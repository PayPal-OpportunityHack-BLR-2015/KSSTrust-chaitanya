
Meteor.publish('remittance', function (userId) {
 return Remittance.find({createdBy: userId});
});