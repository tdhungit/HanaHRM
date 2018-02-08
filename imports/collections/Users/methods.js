import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Users from './Users';

Meteor.methods({
    'users.insert': function usersInsert(user) {
        check(user, Object);
        return Users.insert(user);
    }
});