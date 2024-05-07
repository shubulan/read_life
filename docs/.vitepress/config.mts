import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cursed with knowledge",
  description: "Record the books I have read",
  base: "/read_life/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '如何阅读一本书', link: '/how_to_read_a_book/' },
      { text: '如何用提问解决问题', link: '/the_book_of_beautiful_questions/' }
    ],

    sidebar: {
      "/the_book_of_beautiful_questions/": [
        {
          text: '书籍介绍',
          items: [
            { text: '检视阅读', link: './introduction.md'},
          ]
        },
        {
          text: '为什么要提问',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '决策问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '创新问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '沟通问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '管理问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      "/how_to_read_a_book/": [
        {
          text: '书籍介绍',
          items: [
            { text: '检视阅读', link: '/how_to_read_a_book/introduction.md'},
          ]
        },
        {
          text: '阅读的层次',
          items: [
            { text: '阅读的活力与艺术', link: '/how_to_read_a_book/level_of_read/ch01.md' },
            { text: '阅读的层次', link: '/how_to_read_a_book/level_of_read/ch02.md' },
            { text: '基础阅读', link: '/how_to_read_a_book/level_of_read/ch03.md' },
            { text: '检视阅读', link: '/how_to_read_a_book/level_of_read/ch04.md' },
            { text: '自我要求的读者',   link: '/how_to_read_a_book/level_of_read/ch05.md' }
          ]
        },
        {
          text: '阅读第三层：分析阅读',
          items: [
            { text: '一本书的分类', link: '/how_to_read_a_book/analysis_read/ch06.md' },
            { text: '透视一本书', link: '/how_to_read_a_book/analysis_read/ch07.md' },
            { text: '与作者找出共通的词义', link: '/how_to_read_a_book/analysis_read/ch08.md' },
            { text: '判断作者的主旨', link: '/how_to_read_a_book/analysis_read/ch09.md' },
            { text: '公正的评断一本书', link: '/how_to_read_a_book/analysis_read/ch10.md' },
            { text: '赞同或者反对作者', link: '/how_to_read_a_book/analysis_read/ch11.md' },
            { text: '辅助阅读', link: '/how_to_read_a_book/analysis_read/ch12.md' },
          ]
        },
        {
          text: '创新问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '沟通问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '管理问题清单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
