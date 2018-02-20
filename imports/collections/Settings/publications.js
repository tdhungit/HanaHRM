import {Meteor} from 'meteor/meteor';
import Settings from './Settings';

Meteor.publish('settings.getCategory', (category) => {
    let params = {};
    if (category) {
        params.category = category;
    }

    return Settings.find(params);
});
