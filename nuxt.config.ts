// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    dir: 'assets/img',
    baseURL: 'https://fcc-laravel.s3.ap-northeast-1.amazonaws.com',
    screens: {
      sm: 640,
      md: 768,
      lg: 992,
      xl: 1140,
      xxl: 1320
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image', 'nuxt-swiper'],
  imports: { dirs: ['stores'] }, //auto import 資料夾
  app: {
    head: {
      title: 'Nuxt Pinia',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Pinia'
        },
        { property: 'og:title', content: 'Nuxt Pinia' },
        { property: 'og:description', content: 'Nuxt Pinia' },
        {
          property: 'og:image',
          content: 'https://nuxtjs.org/nuxt-card.png'
        },
        { property: 'og:url', content: 'https://nuxtjs.org' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:title', content: 'Nuxt Pinia' },
        { name: 'twitter:description', content: 'Nuxt Pinia' },
        {
          name: 'twitter:image',
          content: 'https://nuxtjs.org/nuxt-card.png'
        }
      ]
    }
  },
  vite: {
    define: {
      'process.env': import.meta.env //意思是將 import.meta.env 這個物件的內容設定到 process.env 這個物件上
    },
    'server': {
      'proxy': {
        '/api': {
          'target': 'https://fcc.zeabur.app/',
          'changeOrigin': true,
          rewrite: (path) => path.replace(/^\/api/, '/api') // 确保路径不被错误地替换
        }
      }
    },
    resolve: {
      alias: {
        images: import.meta.env.VITE_APP_IMAGE_URL || '/assets/img'
      }
    }
  }
});

