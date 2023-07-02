// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" }
  },
  // 개발 도구를 사용하도록 설정합니다. 이 설정을 통해 Vue 개발자 도구를 활성화할 수 있습니다.
  devtools: { enabled: true },
  // 모듈을 사용하도록 설정
  modules: [
    // ...
    "@pinia/nuxt"
  ],
  // css 설정
  css: [
    // SCSS 파일
    "@/assets/css/main.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;'
        }
      }
    }
  }
});
