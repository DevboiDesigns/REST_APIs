const express = require("express");
const router = express.Router();

const feedController = require('../controllers/feed')

// Routes
router.get("/posts", feedController.getPosts);

router.post('/post', feedController.postAPost)

module.exports = router;
