import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Permissions = new Mongo.Collection('acl_permissions');

Permissions.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Permissions.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

const PermissionsSchema = new SimpleSchema({
    createdAt: {
        type: String,
        label: 'The date this menu was created.',
        autoValue() {
            if (this.isInsert) return (new Date()).toISOString();
            return this.value;
        },
    },
    role: {
        type: String,
        label: 'Role name'
    },
    model: {
        type: String,
        label: 'Collection'
    },
    access: {
        type: Boolean,
        label: 'On or Off'
    },
    type: {
        type: String,
        label: 'Permission type: Disable, Owner, Children, Group, All'
    },
    action: {
        type: String,
        label: 'View action: View, Create, Edit, Approve, Delete'
    }
});

Permissions.attachSchema(PermissionsSchema);

export default Permissions;
