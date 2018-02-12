import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';
import Users from '/imports/collections/Users/Users';

Meteor.methods({
    'users.insert': function (user) {
        check(user, Object);
        return Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password,
            profile: {
                first_name: user.first_name,
                last_name: user.last_name
            }
        });
    },
    'users.update': function (user) {
        check(user, Object);
        const userClean = {
            emails: [{
                address: user.email,
                verified: false
            }],
            profile: {
                first_name: user.first_name,
                last_name: user.last_name
            }
        };
        try {
            const userId = user._id;
            Users.update(userId, { $set: userClean });
            return userId;
        } catch (exception) {
            throw new Meteor.Error('500', exception);
        }
    }
});