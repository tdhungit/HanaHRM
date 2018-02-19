import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import UserGroups from './UserGroups';

Meteor.methods({
    'userGroups.insert': function (userGroup) {
        check(userGroup, Object);
        if (typeof userGroup.parent != 'undefined') {
            if (!userGroup.parent) {
                userGroup.parent = 'ROOT';
            }
        }

        return UserGroups.insert(userGroup);
    },
    'userGroups.update': function (userGroup) {
        check(userGroup, Object);
        if (typeof userGroup.parent != 'undefined') {
            if (!userGroup.parent) {
                userGroup.parent = 'ROOT';
            }
        }

        try {
            const groupId = userGroup._id;
            UserGroups.update(groupId, {$set: userGroup});
            return groupId;
        } catch (exception) {
            throw new Meteor.Error('500', exception);
        }
    },
    'userGroups.ROOT': function () {
        return UserGroups.find({parent: 'ROOT'}).fetch();
    }
});
