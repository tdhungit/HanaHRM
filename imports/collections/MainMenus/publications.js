import {Meteor} from 'meteor/meteor';
import MainMenus from './MainMenus';

Meteor.publish('mainMenus.list', function () {
    const menu_root = MainMenus.find({parent: 'ROOT'});

});
