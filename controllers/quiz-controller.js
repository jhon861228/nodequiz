'use strict'

exports.question = function(req,res){
	res.render('question',{pregunta:'Capital de Italia'})
}
exports.answer = function(req,res){

	if(req.body.respuesta!=''){
		if(req.body.respuesta === 'Roma'){
			res.render('answer',{respuesta:'Correcta'})
		}else{
			res.render('answer',{respuesta:'Incorrecta'})
		}
		
	}else{
		res.send('Debe digitar algo')
	}
}