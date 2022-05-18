<template>
  <div class="sign-up">
    <CustomInput 
        :label="'Name & Surname'"
        :placeholder="'Type here...'"
        :isRequired="true"
        :showRequiredInfo="valid.userName"
        class="sign-up__input"
        v-model="userData.userName.value"
        :isError="!valid.userName"
        @blur="userNameValidate"
        :errorMessage="'Username is too short'"
    />
    <CustomInput 
        :label="'Email'"
        :placeholder="'name@mail.com'"
        :isRequired="true"
        class="sign-up__input"
        v-model="userData.email.value"
        :isError="!valid.email"
        @blur="emailValidate"
        :errorMessage="'Email is not valid'"
    />
    <CustomInput 
        :label="'Phone'"
        :placeholder="'+ xxx xxx xx xx'"
        class="sign-up__input"
        v-model="userData.phone.value"
        :isPhone="true"
    />
    <CustomInput 
        :label="'Card'"
        :placeholder="'**** **** **** ****'"
        :isRequired="true"
        class="sign-up__input"
        v-model="userData.card.value"
        :isCard="true"
        :isError="!valid.card"
        @blur="cardValidate"
        :errorMessage="'Card number is not valid'"
    />
    <CustomInput 
        :label="'Password'"
        :placeholder="'Create the password'"
        class="sign-up__input"
        v-model="userData.password.value"
        :isPassword="true"
    />
    <CustomInput 
        :label="'Confirm password'"
        :placeholder="'Confrim the password'"
        class="sign-up__input"
        v-model="userData.confirmPassword.value"
        :isError="!valid.password"
        @blur="passwordValidate"
        :errorMessage="'Incorrect'"
        :isPassword="true"
    />
    <div class="sign-up__checkbox-wrap">
        <CustomCheckbox v-model="userData.isTermAgree.value" :isError="!valid.isTermAgree">
            <p class="sign-up__text ml">
                I agree with <a href="src/docs/Terms introduction.pdf" target="_blank">Terms of Conditions</a>
            </p>
        </CustomCheckbox>
    </div>
    <CustomButton class="sign-up__btn" :text="'Sign Up'" @click="SignUpEvent"/>
    <p class="sign-up__text">
        Do you already have an account? <span @click="goToSignIn">Sign In</span>
    </p>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'
import axios from 'axios'

export default {
    components: {
        CustomInput, CustomButton, CustomCheckbox
    },
    emits: ['setSignInTabActive'],
    setup(props, { emit }){
        const userData = {
            userName: ref(''),
            email: ref(''),
            phone: ref(''),
            card: ref(''),
            password: ref(''),
            confirmPassword: ref(''),
            isTermAgree: ref(false),
        }
        const valid = reactive({
            userName: true,
            email: true,
            card: true,
            password: true,
            isTermAgree: true
        })

        const goToSignIn = () => {
            emit('setSignInTabActive')
        }
        const userNameValidate = () => {
            if(userData.userName.value.length < 5)
                valid.userName = false
            else valid.userName = true;
        }
        const emailValidate = () => {
            if(userData.email.value.length > 7 && userData.email.value.includes('@') && userData.email.value.includes('.'))
                valid.email = true
            else valid.email = false;
        }
        const cardValidate = () => {
            if(userData.card.value.length === 19)
                valid.card = true
            else valid.card = false;
        }
        const passwordValidate = () => {
            if (userData.password.value === userData.confirmPassword.value && userData.password.value.length > 0)
                valid.password = true
            else valid.password = false;
        }

        const SignUpEvent = async () => {
            if (!userData.isTermAgree.value){
                valid.isTermAgree = false;
                return
            }
            else valid.isTermAgree = true;
            userNameValidate();
            emailValidate();
            cardValidate();
            passwordValidate();
            if (Object.values(valid).some((item) => item === false))
                return;
            // await axios.post('https://api.gioconostro.com/api/v1/register', 
            // {
            //     'name': userData.userName.value,
            //     'password': userData.password.value,
            //     'email': userData.email.value,
            //     "phone": userData.phone.value,
            //     "card_number": userData.card.value
            // }, {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Access-Control-Allow-Origin': '*',
            //             'Accept': 'application/json'
            //         }
            // })
            //     .then((response) => console.log('success', response))
            //     .catch((error) => console.log('error', error, error.message))

            console.log('Sign UP', 
                userData.userName.value,
                userData.phone.value.replaceAll(' ',''),
                userData.card.value.replaceAll(' ','')
            )
        }

        //store.commit("addCartItem", props.product);

        return { 
            userData, valid, goToSignIn, SignUpEvent,
            userNameValidate, emailValidate, cardValidate, passwordValidate
        }
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
.sign-up__text a,
.sign-up__text a:visited,
.sign-up__text span{
    text-decoration: none;
    color: var(--primary-button-color);
    font-size: 14px;
    line-height: 120%;
    cursor: pointer;
}
.ml{
    margin-left: 18px;
}
</style>