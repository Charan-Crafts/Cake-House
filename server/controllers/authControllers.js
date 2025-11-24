const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

const generateAccessTokenAndRefreshToken = async (user) => {

    const accessToken = jwt.sign(
        {
            userId: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
    );

    const refreshToken = jwt.sign(
        {
            userId: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.JWT_REFRESH_EXPIRATION }
    );

    return { accessToken, refreshToken };
}

const userRegistration = async (req, res) => {

    const { userName, email, password, phoneNumber,role } = req.body;

    try {

        const checkUser = await userModel.findOne({ email: email });

        let assignRole = role==="admin"?"admin":"user";
       

        if (checkUser) {
            return res.status(200).json({
                success: false,
                message: "User already exists, please login"
            })
        }

        const hashedPassword = await hashPassword(password);

     
        const newUser = await userModel.create({
            userName,
            email,
            password: hashedPassword,
            phoneNumber,
            role:assignRole
        });

        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(newUser);

        newUser.refreshToken = refreshToken;
        await newUser.save();

        const response = await userModel.findOne({ email: email }).select("-password -refreshToken -__v");

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
        
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
    
            maxAge:  60 * 60 * 1000 // 1 hour
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user:response
        });

    } catch (error) {
        console.log("error in user registration", error);
        return res.status(500).json({
            success: false,
            message: "Error in user registration",
            error: error.message
        })
    }
}

const loginUser = async (req, res) => {

    const {email,password} = req.body;

    try {

        const checkUser = await userModel.findOne({ email: email });

        if (!checkUser) {
            return res.status(200).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        // Compare password

        const isPasswordValid = await bcrypt.compare(password, checkUser.password);

        if (!isPasswordValid) {
            return res.status(200).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        // Generate tokens
        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(checkUser);

        checkUser.refreshToken = refreshToken;
        await checkUser.save();

        const response = await userModel.findOne({ email: email }).select("-password -refreshToken -__v");

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
        
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
    
            maxAge:  60 * 60 * 1000 // 1 hour
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user:response
        });
        
    } catch (error) {
        console.log("error in user login", error);
        return res.status(500).json({
            success: false,
            message: "Error in user login",
            error: error.message
        })
    }
}


const logoutUser =async (req,res) => {
    
    try {

        const userId = req.user.userId;

        const checkUser = await userModel.findById(userId); 

        checkUser.refreshToken = "";
        await checkUser.save();

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");

        return res.status(200).json({
            success:true,
            message:"Logout successful"
        });
        
    } catch (error) {
        console.log("error while logout",error);
        return res.status(500).json({
            success:false,
            message:error.message
        }); 
    }
}


module.exports = {
    userRegistration,
    loginUser,
    logoutUser
}