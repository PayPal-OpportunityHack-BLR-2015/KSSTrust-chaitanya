Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'


});

Router.route('/about');
Router.route('/modules');
Router.route('/team');
Router.route('/contact');


Router.route('/logged_in', {
    name: 'loggedIn',
    controller: 'LoggedInController',
    action: 'loggedIn',
    where: 'client'
});

Router.route('/profile', {
    name: 'profile',
    controller: 'LoggedInController',
    action: 'profile',
    where: 'client'
});

Router.route('/campaign', {
    name: 'campaign',
    controller: 'LoggedInController',
    action: 'campaign',
    where: 'client'
});

Router.route('/history', {
    name: 'history',
    controller: 'LoggedInController',
    action: 'history',
    where: 'client'
});

Router.route('AccessDenied', {
    name: 'accessDenied',
    controller: 'HomeController',
    action: 'accessDenied',
    where: 'client'
});

Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        this.render('AccessDenied');
    } else {
        this.next();
    }
}, {
    only: ['loggedIn', 'profile', 'campaign', 'history']
});

Router.onAfterAction(function() {
    if (Meteor.userId()) {
        console.log("Rendering Loggin Template");
        Router.go('profile');
    }
}, {
    except: ['loggedIn', 'profile', 'campaign', 'history']
});
