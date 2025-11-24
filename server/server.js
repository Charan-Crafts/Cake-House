require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const cors = require("cors");

const cookieParser = require("cookie-parser");

const connectDB = require("./config/MongoDB");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectDB();



// Routes
const userRoutes = require("./routes/userRoutes");

const courseRoutes = require("./routes/courseRoutes");

app.use("/api/v1/course", courseRoutes);

app.use("/api/v1/auth", userRoutes);

app.use("/",(req,res)=>{
    return res.status(200).json({message:"API is running"})
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});