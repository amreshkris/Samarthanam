var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskModel = new Schema({
	task:{
		type:String
	},
	created_by:{
		type:String
	},
	assigned_to:{
		type:String
	},
	status:{
		type:String
	},	
	created_date:{
		type:String
	},	
	expected_completion_date:{
		type:String
	}	
});

module.exports = mongoose.model('Task',taskModel);
