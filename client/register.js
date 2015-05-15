

Template.register.events
(
	{
		'click #submit_user' : function ( event, template )
		{
			event.preventDefault();
			var $mail = template.find( "#mail" );
			var $pass = template.find( "#pass" );
			var $nom = template.find( "#nom" );
			var $prenom = template.find( "#prenom" );
			var $tel = template.find( "#tel" );

			if ( $mail.value != "" && $pass.value != "" && $nom.value != "" && $prenom.value != "" && $tel.value != "")
			{
				Accounts.createUser( 
				{ 
					email: $mail.value,
					password: $pass.value,
					profile : {
						nom: $nom.value,
						prenom : $prenom.value,
						tel : $tel.value
					}
				}, function(err){
          if (err) {
            // Inform the user that account creation failed
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
						Router.go('/');
						}
				});
			}
		}
	}
);