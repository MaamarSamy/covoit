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
     mail : function()
     {
       return Meteor.users.findOne({ _id : this.user }).emails[0].address;
     }
   }
);

