
travels = new Mongo.Collection( "travels" );

Template.trajet.helpers
(
   {
     user : function()
     {
         return Meteor.users.findOne({ _id : this.user });
     },
     full : function()
     {
       if ( this.places > 0) {
         return true;
       }
       else {
         return false;
       }
     },
     lol : function()
     {
       return this.params._id;
     },
     mail : function()
     {
       return Meteor.users.findOne({ _id : this.user }).emails[0].address;
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
        travels.insert( { trajet_id: 'lol', user_id: 'dafuq' } );
      }
    }
  }
);
