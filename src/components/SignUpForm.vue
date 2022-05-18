<template>
  <div class="sign-up">
    <CustomInput 
        :label="'Name & Surname'"
        :placeholder="'Type here...'"
        :isRequired="true"
        :showRequiredInfo="true"
        class="sign-up__input"
        v-model="userData.userName.value"
    />
    <CustomInput 
        :label="'Email'"
        :placeholder="'name@mail.com'"
        :isRequired="true"
        class="sign-up__input"
        v-model="userData.email.value"
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
    />
    <CustomInput 
        :label="'Password'"
        :placeholder="'Create the password'"
        class="sign-up__input"
        v-model="userData.password.value"
    />
    <CustomInput 
        :label="'Confirm password'"
        :placeholder="'Confrim the password'"
        class="sign-up__input"
        v-model="userData.confirmPassword.value"
    />
    <div class="sign-up__checkbox-wrap">
        <CustomCheckbox v-model="userData.isTermAgree.value">
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
import { ref } from 'vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'
import { useStore } from "vuex";
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
    components: {
        CustomInput, CustomButton, CustomCheckbox
    },
    emits: ['setSignInTabActive'],
    setup(props, { emit }){
        const store = useStore();
        const router = useRouter()
        const userData = {
            userName: ref(''),
            email: ref(''),
            phone: ref(''),
            card: ref(''),
            password: ref(''),
            confirmPassword: ref(''),
            isTermAgree: ref(false),
        }

        const goToSignIn = () => {
            emit('setSignInTabActive')
        }

        const SignUpEvent = async () => {
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

            //
            router.push({name: 'profile'})
            console.log('Sign UP', formData)
        }

        //store.commit("addCartItem", props.product);

        return { userData, goToSignIn, SignUpEvent }
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