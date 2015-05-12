Template.user.helpers
(
	{
    user : function()
    {
       return this;
    },

		trajets : function ()
		{
			return covoiturages.find({user : this.params._uid }).map
			(
					function ( trajet, index, cursor )
					{
						return { _id : trajet._id, user : trajet.user,
                    depart : trajet.depart, arrivee : trajet.arrivee, places : trajet.places };
					}
			);
		}	
	}
)