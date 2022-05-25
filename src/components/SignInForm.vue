<template>
  <form class="sign-in" autocomplete="off">
    <CustomInput 
        :label="'Email'"
        :placeholder="'name@mail.com'"
        class="sign-in__input"
        v-model="formData.email.value"
        :isError="!valid.email"
        @blur="emailValidate"
        :errorMessage="'Email is not valid'"
    />
    <CustomInput 
        :label="'Password'"
        :placeholder="'Type here'"
        class="sign-in__input"
        v-model="formData.password.value"
        :isPassword="true"
        :isError="!valid.password"
        @blur="passwordValidate"
        :errorMessage="'Incorrect'"
    />
    <div class="sign-in__checkbox-wrap">
        <div class="sign-in__checkbox-hero">
            <CustomCheckbox v-model="shouldRememberMe">
                <p class="sign-in__remember-text ml">Remember me</p>
            </CustomCheckbox>
        </div>
        <p class="sign-in__text sign-in__forgot" @click="goToResetPasswordPage">Forgot Password?</p>
    </div>
    <CustomButton class="sign-in__btn" :text="'Sign In'" @click="SignInEvent"/>
    <p class="sign-in__text">
        Don't have an account? <span @click="goToSignUp">Sign Up</span>
    </p>
  </form>
  <transition name="modal">
    <CustomModal v-if="isShowModal">
        <template v-slot:header>
            <div class="modal-header">
                {{signInText}}
            </div>
        </template>
        <template v-slot:footer>
            <CustomButton :isOutlined="true" :text="'OK'" @click="isShowModal = false"/>
        </template>
    </CustomModal>
  </transition>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'
import CustomModal from '@/components/Modal.vue'

export default {
    components: {
        CustomInput, CustomButton, CustomCheckbox, CustomModal
    },
    setup(props, { emit }){
        const router = useRouter()
        const formData = {
            email: ref(''),
            password: ref(''),
        }
        const valid = reactive({
            email: true,
            password: true,
        })
        let shouldRememberMe = ref(true)
        var isShowModal = ref(false)
        const signInText = ref('')

        const emailValidate = () => {
            if(formData.email.value.length > 7 && formData.email.value.includes('@') && formData.email.value.includes('.'))
                valid.email = true
            else valid.email = false;
        }
        const passwordValidate = () => {
            if (formData.password.value.length > 0)
                valid.password = true
            else valid.password = false;
        }

        const goToSignUp = () => {
            router.push({name: 'signIn', params: {page: 'register'}})
        }
        const goToResetPasswordPage = () => {
            router.push({name: 'forgotPassword'})
        }

        const SignInEvent = async () => {
            emailValidate();
            passwordValidate();
            if (!(valid.email && valid.password))
                return

            await axios.post('https://api.gioconostro.com/api/v1/login', 
            {
                'password': formData.password.value,
                'email': formData.email.value
            }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json'
                    }
            })
                .then((response) => {
                    if (response && response.data && response.data.status === 'success'){
                        localStorage.setItem('access_token', response.data.data.token);
                        router.push({name: 'profile'})
                    }
                    else{
                        isShowModal.value = true;
                        signInText.value = response.data.message;
                    }
                })
                .catch((error) => {
                    isShowModal.value = true;
                    signInText.value = error.response.data.message;
                })
        }

        return { 
            formData, shouldRememberMe, valid,
            goToSignUp, goToResetPasswordPage, SignInEvent,
            emailValidate, passwordValidate,
            isShowModal, signInText
        }
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
.sign-in__remember-text,
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
.modal-header{
    text-align: center;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 120%;
}

@media screen and (max-width: 425px) {
    .sign-in__remember-text,
    .sign-in__forgot{
       font-size: 12px;
    }
    .sign-in__checkbox-wrap{
        margin-bottom: 25px;
    }
}
</style>