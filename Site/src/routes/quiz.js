var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/tentativa", function (req, res) {
    quizController.tentativa(req, res);
})

router.get("/ranking", function (req, res) {
    quizController.ranking(req, res);
});

router.get("/verFeedback", function (req, res) {
    quizController.verFeedback(req, res);
});

router.post("/feedback", function (req, res) {
    quizController.feedback(req, res);
})

module.exports = router;