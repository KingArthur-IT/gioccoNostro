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
                <p class="sign-in__text ml">Remember me</p>
            </CustomCheckbox>
        </div>
        <p class="sign-in__text sign-in__forgot" @click="goToResetPasswordPage">Forgot Password?</p>
    </div>
    <CustomButton class="sign-in__btn" :text="'Sign In'" @click="SignInEvent"/>
    <p class="sign-in__text">
        Don't have an account? <span @click="goToSignUp">Sign Up</span>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'

export default {
    components: {
        CustomInput, CustomButton, CustomCheckbox
    },
    emits: ['setSignUpTabActive'],
    setup(props, { emit }){
        const router = useRouter()
        const formData = {
            email: ref(''),
            password: ref(''),
        }
        let shouldRememberMe = ref(true)

        const goToSignUp = () => {
            emit('setSignUpTabActive')
        }
        const goToResetPasswordPage = () => {
            router.push({name: 'resetPassword'})
        }
        const SignInEvent = () => {
            console.log('Sign In', formData.email.value, formData.password.value, shouldRememberMe.value)
        }

        return { formData, shouldRememberMe, goToSignUp, goToResetPasswordPage, SignInEvent }
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
    font-size: 14px;
    line-height: 120%;
    color: var(--primary-text-color);
}
.sign-in__text a,
.sign-in__text a:visited,
.sign-in__text span{
    text-decoration: none;
    color: var(--primary-button-color);
    font-size: 14px;
    line-height: 120%;
    cursor: pointer;
}
.sign-in__forgot{
    color: var(--gray-text-color);
    cursor: pointer;
}
.ml{
    margin-left: 15px;
}
</style>