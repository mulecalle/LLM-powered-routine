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
            text: '2026 - March',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/26/mar/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/26/mar/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/26/mar/d3' },
            ]
        },
        {
            text: '2026 - February',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/26/feb/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/26/feb/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/26/feb/d3' },
            ]
        },
        {
            text: '2026 - January',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/26/jan/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/26/jan/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/26/jan/d3' },
            ]
        },
        {
            text: '2025 - December',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/25/dec/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/25/dec/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/25/dec/d3' },
            ]
        },
        {
            text: '2025 - November',
            items: [
                { text: 'Day 1 - PECHO Y BICEPS', link: '/month/25/nov/d1' },
                { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/25/nov/d2' },
                { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/25/nov/d3' },
            ]
        },
        {
        text: '2025 - October',
        items: [
            { text: 'Day 1 - PECHO Y BICEPS', link: '/month/25/oct/d1' },
            { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/25/oct/d2' },
            { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/25/oct/d3' },
        ]
        },
        {
        text: '2025 - September',
        items: [
          { text: 'Day 1 - PECHO Y BICEPS', link: '/month/25/sep/d1' },
          { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/25/sep/d2' },
          { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/25/sep/d3' },
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