var app =angular.module("calculatorApp",[]);
app.controller("calculatorController",calculate);

function calculate(){
	this.resultValue=0;
	this.buttonClicked =function(button){
		this.operator=button;
	}
	this.showResult = function(){
		var num1=parseFloat(this.input1);
		var num2=parseFloat(this.input2);
		if(this.operator==="+"){
			this.resultValue=num1+num2;
		} 
		else if(this.operator==="-"){
			this.resultValue=num1-num2;
		} 
		else if(this.operator==="*"){
			this.resultValue=num1*num2;
		} 
		else if(this.operator==="/"){
			this.resultValue=num1/num2;
		}
	}
}