<template>
  <div class="sign">
    <div class="container">
      <div class="sign__wrapper">
        <div class="sign__hero">
          <ul class="sign__tabs">
            <li class="sign__tab" :class="{'tab-active': isSignUpTabActive}" @click="$router.push({name: 'signIn', params: {page: 'register'}})">
              {{$t('sign_up')}}
            </li>
            <li class="sign__tab" :class="{'tab-active': !isSignUpTabActive}" @click="$router.push({name: 'signIn', params: {page: 'login'}})">
              {{$t('sign_in')}}
            </li>
          </ul>
          <SignUpForm v-if="isSignUpTabActive"/>
          <SignInForm v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue'
import SignInForm from '@/components/SignInForm.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: {
        SignUpForm, SignInForm
    },
    setup(){
      const route = useRouter();

      const isSignUpTabActive = computed(() => {
        return route.currentRoute.value.params.page === 'register' || route.currentRoute.value.params.page === ''
      })

      return {
        isSignUpTabActive
      }
    }
}
</script>

<style scoped>
.sign{
  background-color: var(--background-color);
  position: relative;
}
.sign__wrapper{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 130px;
}
.sign__hero{
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 0 20px;
}
.sign__tabs{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  cursor: pointer;
}
.sign__tab{
  text-align: center;
  padding: 0;
  margin: 0;
  color: var(--gray-text-color);
  font-size: 24px;
  line-height: 29px;
}
.tab-active{
  color: var(--primary-text-color)
}

@media screen and (max-width: 425px) {
  .sign__tabs{
    margin-bottom: 25px;
  }
}
</style>