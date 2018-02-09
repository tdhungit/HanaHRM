import {Meteor} from 'meteor/meteor';
import MainMenus from './MainMenus';

Meteor.publish('mainMenus.list', function () {
    const menu_root = MainMenus.find({parent: 'ROOT'});
    let menus = [];
    for (let menu in menu_root) {
        let menu_children = MainMenus.find({parent: menu._id});
        menu.children = menu_children;
        menus.push(menu);
    }
    return menus;
});
