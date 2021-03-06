Template.MasterLayout.helpers({});

Template.MasterLayout.events({
});

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
            if (!value) {
                errorFunction("Please write your first name");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false, // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical', // It can be 'inline' or 'vertical'
        data: [{ // Array of radio options, all properties are required
            id: 1, // id suffix of the radio element
            label: 'Male', // label for the radio element
            value: 'm' // value of the radio element, this will be saved.
        }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'module',
        fieldLabel: 'Module',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select Module',
        data: [{
            id: 1,
            label: 'Share Time Module',
            value: 'shareTimeModule'
        }, {
            id: 2,
            label: 'NGO Campaign',
            value: 'ngoModule',
        }, {
            id: 3,
            label: 'Corporate Social Responsibilty',
            value: 'csrModule',
        }, {
            id: 4,
            label: 'Gift Module',
            value: 'giftModule',
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});

Template.MasterLayout.events({
    'click #login-buttons-logout': function (event) {
        Router.go('home');
        //add your custom logic on top of this
       //the default behaviour should still happen from meteor
    }
});
