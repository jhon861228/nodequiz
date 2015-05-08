var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quizes/question',quizController.question)
router.post('/quizes/answer',quizController.answer)

module.exports = router;
