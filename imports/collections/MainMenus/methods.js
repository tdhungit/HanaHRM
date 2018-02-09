import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import MainMenus from './MainMenus';

Meteor.methods({
    'mainMenus.insert': function (mainMenu) {
        check(mainMenu, Object);
        return MainMenus.insert(mainMenu);
    }
});
