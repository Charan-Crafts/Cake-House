const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const courseController = require('../controllers/courseController');

const multerMiddleware = require('../middlewares/multerMiddleware');

router.post("/add-course",authMiddleware.authMiddleware,courseController.addNewCourse);

router.get("/",courseController.getAllCourses);

router.put("/update-course/:courseId",authMiddleware.authMiddleware,courseController.editCourseDetails);

router.delete("/delete-course/:courseId",authMiddleware.authMiddleware,courseController.deleteCourse);

router.post("/upload-video/:courseId",authMiddleware.authMiddleware,multerMiddleware.single("video"),courseController.uploadVideo);

router.delete("/delete-video/:videoId",authMiddleware.authMiddleware,courseController.deleteVideo);

router.put("/update-video/:videoId",authMiddleware.authMiddleware,courseController.updateVideoDetails);

module.exports = router;