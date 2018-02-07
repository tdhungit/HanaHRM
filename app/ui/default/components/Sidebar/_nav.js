export default {
    items: [
        {
            name: 'Dashboard',
            url: '/manager/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
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
        }
    ]
};
