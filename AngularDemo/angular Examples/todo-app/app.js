var app=angular.module("todoApp",[]);
app.controller("todoController", showToDo);
function showToDo(){
	this.editMode=false;
	this.todos=[
		"Open ToDo App",
		"View ToDo List",
		"Perform tasks"
	];

	this.addNewTodo =function(){
		this.todos.push(this.newTodo);
		this.newTodo="";
	}

	this.editTodo =function(){
		this.editMode=!this.editMode;
	}

	this.deleteTodo =function(index){
		this.todos.splice(index,1);
	}
}
