import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  base: '/coachball-info/',
  lang: 'nl-NL',

  title: 'CoachBall',
  description: 'CoachBall documentatie',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
})
