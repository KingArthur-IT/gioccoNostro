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
@import '@/assets/base.css';
@import '@/assets/normolize.css';

#app{
  font-family: 'Inter';
  background-color: var(--background-color);
}
</style>
