Template.trajet.helpers
(
	{
		trajet_user_id : function() 
		{			
			return this.user;
		},
		trajet_id : function()
		{
			return this._id;
		},
		current_user_id : function()
		{
			return Meteor.userId();
		},
		full : function()
		{
			if ( this.places_left > 0) {
				return true;
			}
			else {
				return false;
			}
		},
		already_in : function() 
		{
			if (travels.findOne({ trajet_id : this._id, user_id : Meteor.userId() }) == null) {
			 return false;
			}else{
				return true;
			}
		},
		user : function()
		{
			return Meteor.users.findOne({ _id : this.user });
		},
		is_other_user : function()
		{
			if (travels.findOne({trajet_id : this._id}) != null) {
				return true;
			}else{
				return false;
			}
		},
		other_user : function()
		{
			return travels.find( { trajet_id : this._id }).map( function(u) { 
				return Meteor.users.findOne({_id : u.user_id})
			});
		}
	}
);

//Events
Template.trajet.events
(
  {
    'click #get_covoit' : function ( event, template )
    {
      event.preventDefault();
      {
				var $user_id = template.find("#user_id");
				var $trajet_user_id = template.find("#trajet_user_id");
				var $trajet_id = template.find("#trajet_id");
				if( $user_id.value != $trajet_user_id.value) {
					var new_places = this.places_left - 1;
					var id = $trajet_id.value;
					travels.insert( { trajet_id: $trajet_id.value, user_id: $user_id.value } );
					covoiturages.update(
					{_id:  id},
					{$set: {places_left : new_places}});
				}else{
					alert('Encore heureux que tu participe à ton covoit!');
				}
      }
    }
  }
);
