Template.login.events({

    'click #login' : function(e, t){
      e.preventDefault();
      var email = t.find('#login-email').value;
			var	password = t.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err){
        if (err){
					console.log('error login');
				}
        else{
					console.log('login bon');
					Router.go('/');
				}
      });
         return false; 
      }
  });