import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "llm-powered-routines",
  description: "random site for gym routines",
  base: '/LLM-powered-routine/',
  lastUpdated: true,
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
      },
      {
        text: 'October',
        items: [
          { text: 'Day 1 - PECHO Y BICEPS', link: '/month/oct/d1' },
          { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/oct/d2' },
          { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/oct/d3' },
        ]
      }
    ],

    // Remove the "On this page" table of contents
    outline: false,

    // Customize the Last Updated label and date format
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    }
  }
})