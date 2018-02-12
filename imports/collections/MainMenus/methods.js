import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import MainMenus from './MainMenus';

Meteor.methods({
    'mainMenus.insert': function (mainMenu) {
        check(mainMenu, Object);
        if (typeof mainMenu.parent != 'undefined') {
            if (!mainMenu.parent) {
                mainMenu.parent = 'ROOT';
            }
        }

        return MainMenus.insert(mainMenu);
    },
    'mainMenus.ROOT': function () {
        return MainMenus.find({parent: 'ROOT'}).fetch();
    }
});
