var app=angular.module("nestedControllers",[]);
app.controller("oneController",one);
app.controller("twoController",two);
app.controller("threeController",three);

//function one($scope){  we do not use $scope when using As syntax
function one(){
	//var this=$scope; this is done
	//$scope.testProp="From oneController";
	this.testProp="From oneController";
}
//function two($scope){
function two(){
	//var this=$scope; this is done
	//$scope.testProp="From twoController";
	this.testProp="From twoController";
}
//function three($scope){
function three(){
	//var this=$scope; this is done
	//$scope.testProp="From threeController";
	this.testProp="From threeController";
}
