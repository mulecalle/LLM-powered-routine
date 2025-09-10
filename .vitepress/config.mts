import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "llm-powered-routines",
  description: "random site for gym routines",
  base: '/LLM-powered-routine/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'September',
        items: [
          { text: 'Day 1 - PECHO Y BICEPS', link: '/month/sep/d1' },
          { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/sep/d2' },
          { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/sep/d3' },
        ]
      }
    ],

    // Remove the "On this page" table of contents
    outline: false,
  }
})