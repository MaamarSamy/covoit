// Global access
covoiturages = new Mongo.Collection( "covoiturages" );
travels = new Mongo.Collection( "travels" );

if ( Meteor.isClient )
{
	Template.layout.events
	({
		'click .logout' : function ( event, template )
		{
			Meteor.logout();
			Router.go('/');
		},
		
	});
}