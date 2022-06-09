<template>
  <div class="forgot">
    <div class="container">
      <div class="forgot__wrapper">
        <div class="forgot__hero">
          <h2 class="forgot__title">Forgot Password</h2>
          <p class="forgot__text">
            To reset your password, please enter e-mail address below, recovery link will be provided automatically, please follow further instructions, sent to indicated e-mail address.
              <!--
              <a href="" class="forgot__link">poshta@gmail.com</a>
              -->
          </p>
          <CustomInput 
                :label="'Email'"
                :placeholder="'name@mail.com'"
                class="forgot__input"
                v-model="email"
                :isError="!emailValid"
          />
          <CustomButton class="forgot__btn" :text="'Reset Password'" @click="ResetEvent"/>
          <p class="forgot__link" @click="goToSignIn">I remember the password</p>
        </div>
      </div>
    </div>
  </div>
  <transition name="modal">
    <CustomModal v-if="isShowModal">
        <template v-slot:header>
            <div class="modal-header">
                {{modalText}}
            </div>
        </template>
        <template v-slot:footer>
            <CustomButton :isOutlined="true" :text="'OK'" @click="isShowModal = false"/>
        </template>
    </CustomModal>
  </transition>
</template>

<script>
import { ref } from 'vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CustomModal from '@/components/Modal.vue'

export default {
    components: {
        CustomInput, CustomButton, CustomModal
    },
    setup(){
      const router = useRouter()
      const email = ref('');
      const emailValid = ref(true)
      const isShowModal = ref(false)
      const modalText = ref('')
      
      const emailValidate = () => {
          if(email.value.length > 7 && email.value.includes('@') && email.value.includes('.'))
              emailValid.value = true
          else emailValid.value = false;
      }

      const ResetEvent = () => {
        emailValidate();
        if (!emailValid.value) return;
        console.log('Reset', email.value)
        resetPassword();
      }
      const goToSignIn = () => {
        router.push({name: 'signIn', params: {page: 'login'}})
      }

      const resetPassword = async () => {
        await axios.post('https://api.gioconostro.com/api/v1/send_link', 
        { 'email': email.value }, 
        {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json'
          }
        })
          .then((response) => {
            console.log(response)
            isShowModal.value = true;
            modalText.value = response.data.message
          })
          .catch((error) => {
            console.log(error)
            isShowModal.value = true;
            modalText.value = error.response.data.error;
          })
        }

      return { 
        email, emailValid, emailValidate,
        ResetEvent, goToSignIn, isShowModal, modalText, 
      }
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
  width: 450px;
  padding: 0 20px;
}
.forgot__title{
    margin: 0;
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
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
    margin: 0;
    text-decoration: none;
    color: var(--primary-button-color);
    font-size: 14px;
    line-height: 160%;
    cursor: pointer;
}
.forgot__input{
    margin-bottom: 30px;
}
.forgot__btn{
    margin-bottom: 20px;
}
.modal-header{
    text-align: center;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 120%;
}

@media screen and (max-width: 425px) {
  .forgot__text{
      font-size: 12px;
      margin-bottom: 20px;
  }
  .forgot__input{
      margin-bottom: 20px;
  }
  .forgot__btn{
      margin-bottom: 15px;
  }
}
</style>