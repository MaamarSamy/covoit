Meteor.startup
(
	function ()
	{
		// Populate once
		if ( !covoiturages.find().count() )
		{
			//covoiturages.insert( { name : "Priou", firstname : "Eric", depart : "Paris", arrivee : "Toulouse", places : 4} );
		}
	}
);