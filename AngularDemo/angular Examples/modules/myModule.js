var myHelloModule=angular.module("myHelloModule",[]);
myHelloModule.controller("helloController",helloController);
function helloController(){
	this.helloMessage="From myHelloModule";
}

