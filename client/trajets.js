// Helpers
Template.trajets.helpers
(
	{
		all_trajets : function ()
		{
			return covoiturages.find().map
			(
					function ( trajet, index, cursor )
					{
						return { _id : trajet._id, user : trajet.user,
                    depart : trajet.depart, arrivee : trajet.arrivee, places : trajet.places };
					}
			);
		},
    user : function()
    {
      return Meteor.user();
    }
	}
);

// Events
Template.trajets.events
(
	{
		'click #submit_trajet' : function ( event, template )
		{
			event.preventDefault();
			var $depart = template.find( "#depart" );
			var $arrivee = template.find( "#arrivee" );
			var $places = template.find( "#places" );
			var $date = template.find( "#date" );
			var $id = template.find( "#id" );

			if ( $depart.value != "" && $arrivee.value != "" && $places.value > 0 && $date.value != "")
			{
				covoiturages.insert( { depart: $depart.value, arrivee: $arrivee.value, places: $places.value, date : $date.value, user : $id.value} );
			}
		}
	}
);