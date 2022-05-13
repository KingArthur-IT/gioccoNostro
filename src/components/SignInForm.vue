<template>
  <div class="sign-in">
    <CustomInput 
        :label="'Email'"
        :placeholder="'name@mail.com'"
        class="sign-in__input"
        v-model="formData.email.value"
    />
    <CustomInput 
        :label="'Password'"
        :placeholder="'Type here'"
        class="sign-in__input"
        v-model="formData.password.value"
    />
    <div class="sign-in__checkbox-wrap">
        <div class="sign-in__checkbox-hero">
            <CustomCheckbox v-model="shouldRememberMe">
                <p class="sign-in__text">Remember me</p>
            </CustomCheckbox>
        </div>
        <p class="sign-in__text sign-in__forgot">Forgot Password?</p>
    </div>
    <CustomButton class="sign-in__btn" :text="'Sign In'" @click="SignInEvent"/>
    <p class="sign-in__text">
        Don't have an account? <a href="" target="_blank">Sign Up</a>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'

export default {
    components: {
        CustomInput, CustomButton, CustomCheckbox
    },
    setup(){
        const formData = {
            email: ref(''),
            password: ref(''),
        }
        let shouldRememberMe = ref(true)

        const SignInEvent = () => {
            console.log('Sign In', formData.email.value, formData.password.value, shouldRememberMe.value)
        }

        return { formData, shouldRememberMe, SignInEvent }
    }
}
</script>

<style scoped>

.sign-in__input{
    margin-bottom: 15px;
}
.sign-in__checkbox-wrap{
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sign-in__checkbox-hero{
    display: flex;
    align-items: center;
}
.sign-in__btn{
    margin-bottom: 20px;
}
.sign-in__text{
    margin: 0;
    margin-left: 15px;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary-text-color);
}
.sign-in__text a{
    text-decoration: none;
    color: var(--primary-button-color);
    font-size: 14px;
    line-height: 17px;
}
.sign-in__forgot{
    color: var(--gray-text-color);
}
</style>