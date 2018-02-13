export default {
    first_items: [
        {
            name: 'Dashboard',
            url: '/manager/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
    ],
    last_items: [
        {
            name: 'Users',
            url: '/manager/users',
            icon: 'icon-user',
            children: [
                {
                    name: 'View Users',
                    url: '/manager/users',
                    icon: 'icon-user'
                },
                {
                    name: 'Create User',
                    url: '/manager/users/create',
                    icon: 'icon-user'
                }
            ]
        },
        {
            name: 'Sidebar Menu',
            url: '/manager/main-menus',
            icon: 'icon-user',
            children: [
                {
                    name: 'View Menus',
                    url: '/manager/main-menus',
                    icon: 'icon-user'
                },
                {
                    name: 'Create Menu',
                    url: '/manager/main-menus/create',
                    icon: 'icon-user'
                }
            ]
        }
    ]
};
