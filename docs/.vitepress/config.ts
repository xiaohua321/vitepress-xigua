import { defineConfig } from 'vitepress'
import { nav } from './relaConf/navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-xigua/',
  title: "xiGua-blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    logo: '/avatar.jpeg', // 表示docs/public/avatar.jpeg
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
