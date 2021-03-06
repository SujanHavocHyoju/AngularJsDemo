(function(){
	var app =angular.module("contactApp");
	app.service("ContactDataSVC",function($http){

		var self=this;
		self.getContacts = function(){
			var promise1=$http.get('http://localhost:3000/contacts');
			var promise2=promise1.then(function(response){
				return response.data;
				//self.contacts=response.data;
				//return self.contacts;
			});
			return promise2;
		}

		self.saveUser = function(userData){
			return $http.put('http://localhost:3000/contacts/'+userData.id, userData)
			.then(function(response){
				console.log(response);
			})
		}

		self.createUser = function(userData){
			return $http.post('http://localhost:3000/contacts/', userData)
			.then(function(response){
				console.log(response);
			})
		}
		/*this.contacts=[
			{"gender":"female","name":{"title":"ms","first":"natália","last":"jesus"},"location":{"street":"6265 rua são francisco ","city":"são lourenço da mata","state":"alagoas","postcode":98656},"email":"natália.jesus@example.com","login":{"username":"lazyelephant295","password":"23232323","salt":"hiYe2Ata","md5":"c3af0dd786bda3820eb479bb74ceae59","sha1":"f884f6b6451a09769b30d7f4feb38aec4d02b1a9","sha256":"240977464f55cd5468566792177e80accbb138f6e6470009f3825820eb03c534"},"dob":"1961-11-15 14:37:36","registered":"2015-10-14 11:57:44","phone":"(62) 5000-7007","cell":"(69) 8253-3660","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"BR"},
			{"gender":"female","name":{"title":"madame","first":"hélèna","last":"menard"},"location":{"street":"5947 grande rue","city":"senarclens","state":"glarus","postcode":3287},"email":"hélèna.menard@example.com","login":{"username":"silvermeercat599","password":"zippo","salt":"Qn9ermkw","md5":"03ddaec3fe31b13d57b3b46adcea8ea9","sha1":"d8e6f51de06dd27992ea399c0ecbe9e8d24dfbb5","sha256":"db70c255e9b9f55bdeaf313bae7352e0cb5be5904510a8277ee901e53acc396e"},"dob":"1983-09-13 13:54:31","registered":"2010-04-07 00:01:01","phone":"(357)-936-3980","cell":"(940)-685-4293","id":{"name":"AVS","value":"756.HDIL.YGAX.14"},"picture":{"large":"https://randomuser.me/api/portraits/women/55.jpg","medium":"https://randomuser.me/api/portraits/med/women/55.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/55.jpg"},"nat":"CH"},
			{"gender":"male","name":{"title":"mr","first":"volkan","last":"tunçeri"},"location":{"street":"2370 şehitler cd","city":"çankırı","state":"sakarya","postcode":82557},"email":"volkan.tunçeri@example.com","login":{"username":"crazylion683","password":"steelers","salt":"MBzXK6Zl","md5":"162a9186f516d54a0158e0d3268b3836","sha1":"42458225f762609407e23e6b042fa372c7bd8f40","sha256":"0b794ab7d15db17b01247ddcdd2dd717e7fa5f4ec50c00a9b8835057d0126260"},"dob":"1989-01-30 03:19:12","registered":"2005-06-20 14:04:13","phone":"(996)-270-7610","cell":"(030)-548-2724","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/32.jpg","medium":"https://randomuser.me/api/portraits/med/men/32.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/32.jpg"},"nat":"TR"},
			{"gender":"male","name":{"title":"mr","first":"alexander","last":"mann"},"location":{"street":"6096 rosenweg","city":"nordfriesland","state":"saarland","postcode":95225},"email":"alexander.mann@example.com","login":{"username":"orangemouse458","password":"goldeney","salt":"zkPNElMC","md5":"f9fb71fd0132e2ef35706663dce9be45","sha1":"e9cafe9521d3c90ab10327b7b02bf3bc6a970bc9","sha256":"b563fed9057ab91da0529f6094f6423cf8ea6c440b4574808544cdf705d03984"},"dob":"1971-01-17 07:44:53","registered":"2012-09-12 13:15:48","phone":"0957-9136112","cell":"0176-3924088","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/26.jpg","medium":"https://randomuser.me/api/portraits/med/men/26.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/26.jpg"},"nat":"DE"}
		];*/
	});
})();