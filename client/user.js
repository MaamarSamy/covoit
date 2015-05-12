Template.user.helpers
(
	{
    user : function()
    {
       return Meteor.users.findOne({ _id : this.params._uid});
    },

		trajets : function ()
		{
				return covoiturages.find().map( function(u) { return u; });
				// retourne tous les trajets..., a modifier
		},

    mytrajets : function ()
    {
      return travels.map( function(t) { return t; });
    }
	}
)