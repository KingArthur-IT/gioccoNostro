<template>
  <div class="sign-up">
    <CustomInput 
        :label="'Name & Surname'"
        :placeholder="'Type here...'"
        :isRequired="true"
        :showRequiredInfo="true"
        class="sign-up__input"
        v-model="formData.userName.value"
    />
    <CustomInput 
        :label="'Email'"
        :placeholder="'name@mail.com'"
        :isRequired="true"
        class="sign-up__input"
        v-model="formData.email.value"
    />
    <CustomInput 
        :label="'Phone'"
        :placeholder="'+ xxx xxx xx xx'"
        class="sign-up__input"
        v-model="formData.phone.value"
    />
    <CustomInput 
        :label="'Card'"
        :placeholder="'**** **** **** ****'"
        :isRequired="true"
        class="sign-up__input"
        v-model="formData.card.value"
    />
    <CustomInput 
        :label="'Password'"
        :placeholder="'Create the password'"
        class="sign-up__input"
        v-model="formData.password.value"
    />
    <CustomInput 
        :label="'Confirm password'"
        :placeholder="'Confrim the password'"
        class="sign-up__input"
        v-model="formData.confirmPassword.value"
    />
    <div class="sign-up__checkbox-wrap">
        <CustomCheckbox v-model="formData.isTermAgree.value">
            <p class="sign-up__text ml">
                I agree with <a href="" target="_blank">Terms of Conditions</a>
            </p>
        </CustomCheckbox>
    </div>
    <CustomButton class="sign-up__btn" :text="'Sign Up'" @click="SignUpEvent"/>
    <p class="sign-up__text">
        Do you already have an account? <a href="" target="_blank">Sign In</a>
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
            userName: ref(''),
            email: ref(''),
            phone: ref(''),
            card: ref(''),
            password: ref(''),
            confirmPassword: ref(''),
            isTermAgree: ref(false),
        }

        const SignUpEvent = () => {
            console.log('Sign UP', formData)
        }

        return { formData, SignUpEvent }
    }
}
</script>

<style scoped>
.sign-up__input{
    margin-bottom: 15px;
}
.sign-up__checkbox-wrap{
    margin-bottom: 21px;
    display: flex;
    align-items: center;
}
.sign-up__btn{
    margin-bottom: 20px;
}
.sign-up__text{
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary-text-color);
}
.sign-up__text a{
    text-decoration: none;
    color: var(--primary-button-color);
    font-size: 14px;
    line-height: 17px;
}
.ml{
    margin-left: 18px;
}
</style>