<template>
  <div class="reset">
    <div class="container">
      <div class="reset__wrapper">
        <div class="reset__hero">
          <h2 class="reset__title">Reset Password</h2>
          <p class="reset__text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
          </p>
          <CustomInput 
                :label="'Create new password'"
                :placeholder="'Create new password'"
                class="reset__input"
          />
          <CustomInput 
                :label="'Confirm password'"
                :placeholder="'Create new password'"
                class="reset__input"
          />
          <CustomButton class="reset__btn" :text="'Confirm'" @click="ResetEvent"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'

export default {
    components: {
        CustomInput, CustomButton
    },
    setup(){
        const ResetEvent = () => {
            console.log('Reset')
        }

        return { ResetEvent }
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
  width: 358px;
}
.reset__title{
    margin: 0;
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
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
</style>