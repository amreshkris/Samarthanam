var express = require('express');
var tasks = express.Router();
var Task = require('../model/taskModel');

tasks.get('/api/v1/tasks', function(req, res, next) {  
  var query = {};  
  if(req.query.status)
  {
	  query.status = req.query.status;
  }
  Task.find(query,function(err,tasks){
	if(err)
		{
			res.status(500).send(err);
		}
	else
		res.json(tasks);
  });  
});

tasks.get('/api/v1/tasks/:id', function(req, res, next) {	
  Task.findById(req.params.id,function(err,task){
	if(err)
		{
		  res.status(500).send(err);
		}
	else
		res.json(task);
  });  
});


tasks.post('/api/v1/tasks', function(req, res) {
    var task = new Task(req.body);	
    task.save();
	res.status(201).send(task);		
});

module.exports = tasks;
