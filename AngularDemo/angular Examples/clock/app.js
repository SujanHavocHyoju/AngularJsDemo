var app = angular.module("clockApp",[]);
	app.controller("clockController",showTime);
	function showTime($scope){
		var currentDate = new Date();
		$scope.timeString = currentDate.toTimeString();
		$scope.refreshTime=function(){
			//console.log("Button Clicked");
			var currentDate = new Date();
			$scope.timeString = currentDate.toTimeString();
		}
	}