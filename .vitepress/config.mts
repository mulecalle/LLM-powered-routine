import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Set favicon
  head: [
    ['link', { rel: 'icon', href: 'muscle.png', type: 'image/png' }]
  ],
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
            text: 'December \'25',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/dec/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/dec/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/dec/d3' },
            ]
        },
        {
            text: 'November \'25',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/nov/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/nov/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/nov/d3' },
            ]
        },
        {
        text: 'October \'25',
        items: [
            { text: 'Day 1 - PECHO Y BICEPS', link: '/month/oct/d1' },
            { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/oct/d2' },
            { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/oct/d3' },
        ]
        },
        {
        text: 'September \'25',
        items: [
          { text: 'Day 1 - PECHO Y BICEPS', link: '/month/sep/d1' },
          { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/sep/d2' },
          { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/sep/d3' },
        ]
        }
    ],

    // Remove the "On this page" table of contents
    outline: false,

    // Customize the Last Updated label and date format
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    }
  }
})