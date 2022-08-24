<template> 
  <component :is="layout">
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/authorized.vue'

export default {
 components:{
    DefaultLayout, AuthLayout
 },
  computed: {
    layout () {
      return this.$route.meta.auth ? 'AuthLayout' : 'DefaultLayout'
    }
  },
} 

</script>

<style>
@import '@/styles/base.css';
@import '@/styles/normolize.css';
@import '@/styles/style.css';
/*@font-face {*/
/*  font-family: 'Gilroy';*/
/*  src: local('@/assets/fonts/Gilroy Medium'), local('@/assets/fonts/Gilroy-Medium'),*/
/*      url('@/assets/fonts/Gilroy-Medium.woff2') format('woff2'),*/
/*      url('@/assets/fonts/Gilroy-Medium.woff') format('woff'),*/
/*      url('@/assets/fonts/Gilroy-Medium.ttf') format('truetype');*/
/*  font-weight: 500;*/
/*  font-style: normal;*/
/*}*/

#app{
  font-family: 'Inter';
  background-color: var(--background-color);
}
</style>
