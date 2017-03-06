var app=angular.module("modulesApp",["myHelloModule","ngTagsInput"]);
app.controller("TagsController", showTags);
function showTags(){
	this.tags = [
    { text: 'myTag1' },
    { text: 'myTag2' },
    { text: 'myTag3' }
  ];
}
/*app.controller("homeController",homeController);
function homeController(){
	this.helloMessage="From Main Module";
}*/

