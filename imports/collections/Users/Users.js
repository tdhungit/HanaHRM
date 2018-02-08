import {Meteor} from 'meteor/meteor';

const Users = Meteor.users;
export default Users;

Users.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Users.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});
