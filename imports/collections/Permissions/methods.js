import {Meteor} from 'meteor/meteor';
import Permissions from './Permissions';

Meteor.methods({
    'permissions.detail': function (role) {
        let detail = {};
        const permissions = Permissions.find({role: role}).fetch();
        for (let idx in permissions) {
            let permission = permissions[idx];
            detail[permission.model] = permission;
        }

        return detail;
    },
    'permissions.update': function (permissions) {
        for (let idx in permissions) {
            let permission = permissions[idx];
            if (permission && permission._id) {
                Permissions.update(permission._id, permission);
            } else {
                Permissions.insert(permission);
            }
        }
    }
});
