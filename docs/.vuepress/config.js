module.exports = {
    base:"/xtui/",
    title: 'xtui',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'github', link: 'https://github.com/picnic-yu/xtui' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                '/install/',
                '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/button/',
                    '/gird/',
                    '/badge/',
                    '/alert/'
               ]
            }
        ]
    }
}