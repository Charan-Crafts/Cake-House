const jwt = require('jsonwebtoken');

const decodeToken = (token) => {
    const response = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    return response;
}

const authMiddleware = (req, res, next) => {

    let token = "";

    if (req.cookies && req.cookies.accessToken) {
        token = req.cookies.accessToken;
    }
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided, authorization denied' });
    }


    const decodeTokenData = decodeToken(token);

    if (!decodeTokenData) {
        return res.status(401).json({ success: false, message: 'Token is not valid' });
    }
    req.user = decodeTokenData;
    next();
}

module.exports = {authMiddleware};