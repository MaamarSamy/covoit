/**
 * Created by hetic on 15/04/2015.
 */


Router.map(function(){
	this.configure({
        layoutTemplate: 'layout'
	});
	
	this.route('trajets', { path: '/' });
	this.route('login', { path: '/login' });
	this.route('register', { path: '/register' });
	
  this.route('trajet',{
		path: 'trajet/:_id',
		data: function() { return covoiturages.findOne( this.params._id ); }
	});
		
	this.route('user',{
		path: 'user/:_id',
		data: function() { return Meteor.user.findOne( this.params._id ); }
	});
	// this.route('user',{
		// path: '/user/:_uid',
		// data: {
			// user : Meteor.users.findOne( this.params._uid ) ,
			// covoits : covoiturages.find({ user : this.params._uid })
		// }
	// });
});
