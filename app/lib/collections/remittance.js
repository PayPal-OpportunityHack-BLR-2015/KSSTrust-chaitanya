Remittance = new Mongo.Collection('remittance');

Remittance.attachSchema(new SimpleSchema({
    remittor: {
        type: String,
        label: "remittorName",
        max: 20
    },
    remittanceCurrency: {
        type: String,
        label: "remittanceCurrency",
        max: 20
    },
    remittanceQuantity: {
        type: Number,
        label: "remittanceQuantity"
    },
    beneficiary: {
        type: String,
        label: "beneficiaryName",
        max: 20
    },
    beneficiaryCurrency: {
        type: String,
        label: "beneficiaryCurrency",
        max: 20
    },
    beneficiaryQuantity: {
        type: Number,
        label: "beneficiaryQuantity"
    },
    exchangeRate: {
        type: Number,
        label: "exchangeRate"
    },
    createdBy: {
        type: String,
        autoValue: function() {
            return this.userId
        }
    }
}));


if (Meteor.isServer) {
    Remittance.allow({
        insert: function(userId, doc) {
            return false;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function(userId, doc) {
            return false;
        }
    });

    Remittance.deny({
        insert: function(userId, doc) {
            return true;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function(userId, doc) {
            return true;
        }
    });
}
