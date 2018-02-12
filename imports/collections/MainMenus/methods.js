import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import MainMenus from './MainMenus';

Meteor.methods({
    'mainMenus.Nav': function () {
        const menu_root = MainMenus.find({parent: 'ROOT'}).fetch();
        let menus = [];
        for (let idx in menu_root) {
            let menu = menu_root[idx];
            let menu_children = MainMenus.find({parent: menu._id}).fetch();
            if (menu_children.length > 0) {
                menu.children = menu_children;
            }
            menus.push(menu);
        }
        return menus;
    },
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
