'use strict'

var models = require('../models/models')

exports.question = function(req,res){
	models.Quiz.findAll().done(function(quiz){
		res.render('quizes/question',{pregunta:quiz[0].pregunta})
	})
	
}
exports.answer = function(req,res){

	
	if(req.body.respuesta!=''){
		models.Quiz.findAll().done(function(quiz){
			console.log(quiz[0].respuesta)
			console.log(req.body.respuesta)
			if(req.body.respuesta === quiz[0].respuesta){
				res.render('quizes/answer',{respuesta:'Correcta'})
			}else{
				res.render('quizes/answer',{respuesta:'Incorrecta'})
			}
		})
		
		
	}else{
		res.send('Debe digitar algo')
	}
}