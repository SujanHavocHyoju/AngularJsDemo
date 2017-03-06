var app=angular.module("ngModelExamples",[]);
app.controller("egController",modelEg);
function modelEg($scope){
	$scope.textboxChange=function(){
		console.log("Changed!");
	}
}