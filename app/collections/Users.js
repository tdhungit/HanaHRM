import {Meteor} from 'meteor/meteor';

const Users = Meteor.users;

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('allUsers', function () {
        return Users.find({});
    });
}

export default Users;
