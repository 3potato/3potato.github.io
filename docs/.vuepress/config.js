module.exports = {
    title: 'web前端',
    description: '前端总结',
    head: [
        ['link', {
            rel: 'icon',
            href: `/index_logo.jpg`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        repo: 'https://github.com/3potato/fe_interview_2020',
        docsDir: 'docs',
        editLinks: false,
        editLinkText: '',
        sidebarDepth: 3,
        nav: [
            { text: 'Home', link: '/' },
            { text: '面试题', link: '/interview/' },
            { text: '总结', link: '/summary/' },
        ],
        sidebar: {
            '/interview/': [
                {
                    title: '面试题',
                    children: [
                        ''
                    ]
                },  {
                    title: '更多',
                    children: [
                        'feedback'
                    ]
                }
            ],
            '/summary/': [
                {
                    title: 'JS基础',
                    children: [
                        ''
                    ]
                },  {
                    title: '浏览器',
                    children: [
                        ''
                    ]
                },  {
                    title: '性能',
                    children: [
                        ''
                    ]
                },  {
                    title: '安全',
                    children: [
                        ''
                    ]
                },  {
                    title: '框架',
                    children: [
                        ''
                    ]
                },  {
                    title: '算法',
                    children: [
                        ''
                    ]
                },
            ],
        }
    }
}