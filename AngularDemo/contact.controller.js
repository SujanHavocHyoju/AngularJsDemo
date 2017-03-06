(function(){
	var app =angular.module("contactApp");
	app.controller("contactController",contact);
	
	function contact(ContactDataSVC){
		var self=this;
		self.editMode=false;
		self.addMode=false;
		ContactDataSVC.getContacts()
		.then(function(data){
			self.contacts=data;
		})

		this.selectContact = function(index){
			this.selectedContact=this.contacts[index];
			self.successMessage=undefined;
			self.errorMessage=undefined;
		}

		this.toggleEditMode=function(){
			this.editMode =!this.editMode;
		}

		this.saveUser=function(){
			this.toggleEditMode();
			var userData=this.selectedContact;

			if(self.addMode){
				ContactDataSVC.createUser(userData)
				.then(function(){
					self.successMessage="Contact Added Successfully";
				},
				function(){
					self.errorMessage="There was an error. Please try again.";
				}
				);
				self.addMode=false;	
			}
			else{
				ContactDataSVC.saveUser(userData)
				.then(function(){
					self.successMessage="Data Updated Successfully";
				},
				function(){
					self.errorMessage="There was an error. Please try again.";
				}
				);
			}
		}

		this.addContact=function(){
			self.addMode=true;
			this.selectedContact={
				"id":new Date().toTimeString(),
				"picture": {
					"large":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXvnTdL3e8IYAvTbC61xuTzKxFX-rTOcu5MO81vvZZhg63xdHJ"
        			}
        			
			};
			this.editMode=true;
		}
	}
})();