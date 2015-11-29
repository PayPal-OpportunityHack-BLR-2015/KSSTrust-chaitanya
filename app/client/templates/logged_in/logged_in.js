/*****************************************************************************/
/* LoggedIn: Event Handlers */
/*****************************************************************************/
Template.LoggedIn.events({});

/*****************************************************************************/
/* LoggedIn: Helpers */
/*****************************************************************************/
Template.LoggedIn.helpers({});

/*****************************************************************************/
/* LoggedIn: Lifecycle Hooks */
/*****************************************************************************/
Template.LoggedIn.onCreated(function() {});

Template.LoggedIn.onRendered(function() {});

Template.LoggedIn.onDestroyed(function() {});



/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.Profile.helpers({
    DirPath: function() {
        var dirPath = "";

        if (Meteor.user()) {
            var emailId = Meteor.user().emails[0].address;
            var indexOfID = emailId.indexOf("@");
            dirPath = emailId.substring(0, indexOfID);

        }
        return dirPath;
    }
});
/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.onCreated(function() {});

Template.Profile.onRendered(function() {});

Template.Profile.onDestroyed(function() {});
