Template.user.helpers
(
	{
		nom : function() 
		{
			return Meteor.users.findOne({ _id : this._id}).profile.nom;
		},
		
		mail : function() 
		{
			return Meteor.users.findOne({ _id : this._id}).emails[0].address;
		},
		
		tel : function() 
		{
			return Meteor.users.findOne({ _id : this._id}).profile.tel;
		},
		
		prenom : function()
		{
			return Meteor.users.findOne({ _id : this._id }).profile.prenom;
		},
		
		is_mytrajets : function() 
		{
			if ( covoiturages.findOne({ user : this._id}) != null) {
				return true;
			}else {
				return false;
			}
		},
		mytrajets : function ()
		{
				return covoiturages.find({ user : this._id}).map( function(u) { return u; });
		},
		
		is_trajet_in : function() 
		{
			if ( travels.findOne({ user_id : this._id}) != null) {
				return true;
			}else {
				return false;
			}
		},
		
    trajet_in : function ()
    {
      return travels.find({ user_id : this._id }).map( function(t) { 
				return covoiturages.findOne({_id : t.trajet_id}); 
			});
    }
	}
)