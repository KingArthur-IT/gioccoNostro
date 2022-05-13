<template>
  <div class="forgot">
    <div class="container">
      <div class="forgot__wrapper">
        <div class="forgot__hero">
          <h2 class="forgot__title">Forgot Password</h2>
          <p class="forgot__text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              <a href="" class="forgot__link">poshta@gmail.com</a>, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
          </p>
          <CustomInput 
                :label="'Email'"
                :placeholder="'name@mail.com'"
                class="forgot__input"
                v-model="email"
          />
          <CustomButton class="forgot__btn" :text="'Reset Password'" @click="ResetEvent"/>
          <a href="" class="forgot__link">I remember the password</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'

export default {
    components: {
        CustomInput, CustomButton
    },
    setup(){
        const email = ref('');
        const ResetEvent = () => {
            console.log('Reset', email.value)
        }

        return { email, ResetEvent }
    }
}
</script>

<style scoped>
.forgot{
  background-color: var(--background-color);
  position: relative;
}
.forgot__wrapper{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 130px;
}
.forgot__hero{
  display: flex;
  flex-direction: column;
  width: 358px;
}
.forgot__title{
    margin: 0;
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: var(--primary-text-color);
}
.forgot__text{
    margin: 0;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: var(--primary-text-color);
}
.forgot__link{
    text-decoration: none;
    color: var(--primary-button-color);
    font-size: 14px;
    line-height: 160%;
}
.forgot__input{
    margin-bottom: 30px;
}
.forgot__btn{
    margin-bottom: 20px;
}
</style>