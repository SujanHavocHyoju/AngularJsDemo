angular.module("moreDirectives",[])
.controller("moreDirectivesController",more);

function more(){
	this.myListNumbers=[1,2,3,4,5];

	this.myList=[
	{"name":"Ram", "age":10},
	{"name":"Raja Ram", "age":20},
	{"name":"Sadhu Ram", "age":30},
	{"name":"Bhola Ram", "age":40}
	];
}