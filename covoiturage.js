// Global access
covoiturages = new Mongo.Collection( "covoiturages" );
		
if ( Meteor.isClient )
{
	Template.layout.events
	( {
		'click .logout' : function ( event, template )
		{
			Meteor.logout();
			Route.go('/');
		}
	} );
}