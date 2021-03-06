'use strict'

var path = require('path')
var Sequelize = require('sequelize')
var env = require('node-env-file')

env(__dirname+'/../.env')
console.log(process.env.DATABASE_URL)
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/)

var DB_name = (url[6] || null)
var user = (url[2] || null)
var pwd = (url[3] || null)
var protocol = (url[1] || null)
var dialect = (url[1] || null)
var port = (url[5] || null)
var host = (url[4] || null)
var storage = process.env.DATABASE_STORAGE

var sequelize = new Sequelize(DB_name,user,pwd,{
	dialect:dialect,
	protocol:protocol,
	port:port,
	host:host,
	storage:storage,
	omitNull:true
})


var Quiz = sequelize.import(path.join(__dirname,'quiz'))

exports.Quiz = Quiz;

sequelize.sync().done(function(){
	Quiz.count().done(function(count){
		if(count===0){
			Quiz.create({
				pregunta:"Capital de italia",
				respuesta:"Roma"
			})
			.done(function(){
				console.log("Base de datos Iniciada")
			})
		}
	})
})