const express = require("express");
const router = express.Router();

// POST route for saving a question
router.post("/addEassyQ", authorizationHeader, addEassyQuestions);

module.exports = router;
