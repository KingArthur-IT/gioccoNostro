<template>
  <div class="reset">
    <div class="container">
      <div class="reset__wrapper">
        <div class="reset__hero">
          <h2 class="reset__title">{{$t('reset_password')}}</h2>
          <p class="reset__text">
              {{$t('reset_password_text')}}
          </p>
          <CustomInput
                :label="$t('create_new_password')"
                :placeholder="$t('create_new_password')"
                class="reset__input"
                v-model="password"
          />
          <CustomInput
                :label="$t('confirm_password')"
                :placeholder="$t('confirm_password')"
                class="reset__input"
                v-model="confirmPassword"
          />
          <CustomButton class="reset__btn" :text="$t('confirm')" @click="ResetEvent"/>
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
        const password = ref(''),
              confirmPassword = ref('')

        const ResetEvent = () => {
            console.log('Reset', password.value, confirmPassword.value)
        }

        return { password, confirmPassword, ResetEvent }
    }
}
</script>

<style scoped>
.reset{
  background-color: var(--background-color);
  position: relative;
}
.reset__wrapper{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 130px;
}
.reset__hero{
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 0 20px;
}
.reset__title{
    margin: 0;
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: var(--primary-text-color);
}
.reset__text{
    margin: 0;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: var(--primary-text-color);
}
.reset__input{
    margin-bottom: 15px;
}
.reset__btn{
    margin-top: 15px;
}

@media screen and (max-width: 425px) {
  .reset__text{
      font-size: 12px;
      margin-bottom: 20px;
  }
  .reset__btn{
      margin-top: 5px;
  }
}
</style>