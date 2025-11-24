const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');

const middleware = require('../middlewares/authMiddleware');

router.post('/register', authControllers.userRegistration);
router.post('/login', authControllers.loginUser);

router.post("/logout", middleware.authMiddleware,authControllers.logoutUser);

router.get("/check-auth",middleware.authMiddleware,authControllers.checkAuthStatus);

module.exports = router;