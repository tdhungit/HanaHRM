import { Meteor } from 'meteor/meteor';
import {publishPagination} from 'meteor/kurounin:pagination';
import Users from './Users';

Meteor.publish('users.list', () => Users.find());
publishPagination(Users, {
    name: 'users.paginatedList'
});
