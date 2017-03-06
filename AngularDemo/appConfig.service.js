(function(){
	var app =angular.module("contactApp");
	app.service("AppDataServiceSVC",function(AppNameService){
		this.name=AppNameService;
		this.author="Sujan";
		this.builtDate=new Date().toDateString();
	}); //uses as a constructor
})();