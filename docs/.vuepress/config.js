module.exports = {
    port: 9090,
    title: 'vuepress-theme-travis',
    description: 'vuepress-theme-travis',
    // theme: 'travis',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'Group 1',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: ['/']
            }
        ]
    },
};