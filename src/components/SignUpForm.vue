<template>
  <div class="sign-up">
    <CustomInput 
        :label="'Name & Surname'"
        :placeholder="'Type here...'"
        :isRequired="true"
        :showRequiredInfo="true"
        class="sign-up__input"
    />
    <CustomInput 
        :label="'Email'"
        :placeholder="'name@mail.com'"
        :isRequired="true"
        class="sign-up__input"
    />
    <CustomInput 
        :label="'Phone'"
        :placeholder="'+ xxx xxx xx xx'"
        class="sign-up__input"
    />
    <CustomInput 
        :label="'Card'"
        :placeholder="'**** **** **** ****'"
        :isRequired="true"
        class="sign-up__input"
    />
    <CustomInput 
        :label="'Password'"
        :placeholder="'Create the password'"
        class="sign-up__input"
    />
    <CustomInput 
        :label="'Confirm password'"
        :placeholder="'Confrim the password'"
        class="sign-up__input"
    />
    <div class="sign-up__checkbox-wrap">
        <CustomCheckbox class="sign-up__checkbox" />
        <p class="sign-up__text">
            I agree with <a href="" target="_blank">Terms of Conditions</a>
        </p>
    </div>
    <CustomButton class="sign-up__btn" :text="'Sign Up'" @click="SignUpEvent"/>
    <p class="sign-up__text">
        Do you already have an account? <a href="" target="_blank">Sign In</a>
    </p>
  </div>
</template>

<script>
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'

export default {
    components: {
        CustomInput, CustomButton, CustomCheckbox
    },
    setup(){
        const SignUpEvent = () => {
            console.log('Sign UP')
        }

    return { SignUpEvent }
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
.sign-up__checkbox{
    margin-right: 18px;
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
</style>