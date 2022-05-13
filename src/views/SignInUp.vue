<template>
  <div class="sign">
    <div class="container">
      <div class="sign__wrapper">
        <div class="sign__hero">
          <ul class="sign__tabs">
            <li class="sign__tab" :class="{'tab-active': isSignUpTabActive}" @click="isSignUpTabActive = true">Sign Up</li>
            <li class="sign__tab" :class="{'tab-active': !isSignUpTabActive}" @click="isSignUpTabActive = false">Sign In</li>
          </ul>
          <SignUpForm v-if="isSignUpTabActive" @setSignInTabActive="isSignUpTabActive = false"/>
          <SignInForm v-else @setSignUpTabActive="isSignUpTabActive = true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue'
import SignInForm from '@/components/SignInForm.vue'
import { ref } from 'vue'

export default {
    components: {
        SignUpForm, SignInForm
    },
    setup(){
      const isSignUpTabActive = ref(true);

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
  width: 358px;
}
.sign__tabs{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
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
</style>