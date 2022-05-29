<template>
    <div class="border-radius profile">
      <div class="profile__left-side">
        <div class="profile__id-label">
          <IdLabel :id="userData.id"/>
        </div>
        <div class="profile__mobile-text">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              <span class="show-all" v-if="!isShowAllText" @click="isShowAllText = true">Show all</span>
            </p>
            <p v-if="isShowAllText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p v-if="isShowAllText">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </p>
            <p v-if="isShowAllText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>
         <CustomInput 
            :label="'User Info'"
            :placeholder="'John Doe'"
            class="profile__input"
            v-model="newUserData.name"
         />
         <CustomInput 
            :label="''"
            :placeholder="'+3462361122'"
            class="profile__input"
            v-model="newUserData.phone"
            :isPhone="true"
         />
         <CustomRadio v-model="newUserData.gender"/>

         <CustomInput 
            :label="'Email'"
            :placeholder="'poshta@gmail.com'"
            class="profile__input profile__email"
            v-model="newUserData.email"
         />
         <div class="profile__switch">
           <span>Email notifications</span>
           <Switch v-model="emailNotificated" />
         </div>

         <div class="profile__change-password-section">
           <CustomInput 
              :label="'Change Password'"
              :placeholder="'Current Password'"
              class="profile__input"
              :isPassword="true"
              v-model="password.current"
          />
          <CustomInput 
              :label="''"
              :placeholder="'New Password'"
              class="profile__input"
              :isPassword="true"
              v-model="password.new"
              :isError="!passwordValid.new"
          />
          <CustomInput 
              :label="''"
              :placeholder="'Replay Password'"
              :isPassword="true"
              v-model="password.reply"
              :isError="!passwordValid.reply"
              :errorMessage="'Password is not match'"
          />
         </div>

        <div class="card-label-wrapper">
          <p class="card-label">Card</p>
          <p class="card-change" @click="isShowCardNumber = true">Change</p>
        </div>
         <CustomInput 
            :label="''"
            :placeholder="'**** **** **** ****'"
            class="profile__input-card"
            v-model="newUserData.card_number"
            :isCard="true"
            :isCardNumberHidden="!isShowCardNumber"
            :disabled="!isShowCardNumber"
         />

         <div class="profile__btn-wrapper">
           <CustomButton class="prodile__btn" :text="'Save'" @click="saveUserInfo"/>
           <CustomButton class="prodile__btn" :text="'Cancel'" :isPrimary="false" @click="cancelChanges"/>
           <CustomButton class="prodile__btn" :text="'Exit'" :isOutlined="true" @click="exit"/>
         </div>
         <CustomButton class="prodile__btn" :text="'Delete Account'" :isPrimary="false" :isOutlined="true" @click="preDeleteAccount"/>
      </div>
      <div class="profile__right-side">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <p>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
    <transition name="modal">
    <CustomModal v-if="isShowModal" :width="modalOnlyOkBtn ? 300 : 500">
        <template v-slot:header>
            <div class="modal-header">
                {{modalText}}
            </div>
        </template>
        <template v-slot:footer>
            <div v-if="modalOnlyOkBtn">
              <CustomButton :isOutlined="true" :text="'OK'" @click="closeModal"/>
            </div>
            <div v-else class="modal-btns">
              <CustomButton :isPrimary="false" :text="'Yes'" @click="yesBtnEvent" class="mr-2"/>
              <CustomButton :isOutlined="true" :text="'No'" @click="closeModal" />
            </div>
        </template>
    </CustomModal>
  </transition>
</template>

<script>
import IdLabel from '@/components/UIKit/IdLabel.vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomRadio from '@/components/UIKit/CustomRadio.vue'
import Switch from '@/components/UIKit/Switch.vue'
import CustomModal from '@/components/Modal.vue'
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  components: {
        CustomInput, CustomButton, IdLabel, CustomRadio, Switch,
        CustomModal
  },
  data(){
    return{
      userData: {},
      newUserData: {},
      emailNotificated: false,
      password: {
        current: '',
        new: '',
        reply: ''
      },
      passwordValid:{
        new: true,
        reply: true
      },
      isShowModal: false,
      modalText: '',
      modalOnlyOkBtn: true,
      isShowAllText: false,
      isShowCardNumber: false
    }
  },
  async mounted(){
    this.userData = {
        "id": 37,
        "name": "NDCtest",
        "last_name": null,
        "year": null,
        "gender": null,
        "phone": "123356664",
        "email": "vlook.reg@gmail.co",
        "email_verified_at": "2022-05-25T22:51:59.000000Z",
        "card_number": "4441114454427277",
        "blocked": 0,
        "deleted": 0,
        "finished_games": 0,
        "created_at": "2022-05-25T22:51:46.000000Z",
        "updated_at": "2022-05-25T22:51:59.000000Z",
        "email_part": "*****.reg@gmail.co"
    };
    this.newUserData = Object.assign({}, this.userData);

    // await axios.get('https://api.gioconostro.com/api/v1/user/show', 
    //   {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    //     }
    //   })
    //     .then((response) => {
    //       if (response && response.data && response.statusText === 'OK'){
    //         this.userData = Object.assign({}, response.data.item);
    //         this.newUserData = Object.assign({}, response.data.item);
    //       }
    //       else {
    //           this.isShowModal = true;
    //           this.modalText = 'Error while get user info.';
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //         this.isShowModal = true;
    //         this.modalText = 'Error while get user info. ' + error.message;
    //     })

    this.addUserData({userName: this.userData.name, userLastName: this.userData.last_name, userId: this.userData.id});
  },
  methods:{
    ...mapMutations(['addUserData']),
    saveUserInfo(){
      this.changePassword();
    },
    async changePassword(){
      
      this.passwordValid.new = true;
      this.passwordValid.reply = true;
      this.modalOnlyOkBtn = true;

      if (this.password.new.length < 7){
        this.passwordValid.new = false;
        return
      }
      if (this.password.new !== this.password.reply){
        this.passwordValid.reply = false;
        return
      }
        
      await axios.post('https://api.gioconostro.com/api/v1/user/password', 
        {
          password: this.password.new
        },
        {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
          .then((response) => {
            console.log(response)
            if (response && response.data && response.data.status === 'success'){
              this.modalText = "Password changed successfully";
              this.isShowModal = true;
            }
            else{
                this.isShowModal = true;
                this.modalText = response.data.message;
            }
          })
          .catch((error) => {
            console.log(error)
              this.isShowModal = true;
              this.modalText = error.response.data.message;
          })
    },
    cancelChanges(){
      this.newUserData = Object.assign({}, this.userData);
      this.emailNotificated = false;
      this.password.current = '';
      this.password.new = '';
      this.password.reply = '';
      this.passwordValid.new = true;
      this.passwordValid.reply = true;
      this.isShowCardNumber = false;
    },
    closeModal(){
        this.isShowModal = false;
        this.modalText = "";
    },
    yesBtnEvent(){
      this.closeModal();
      this.deleteAccount();
    },
    exit(){
      this.$router.push({name: 'dashboard'})
    },
    preDeleteAccount(){
      this.isShowModal = true;
      this.modalText = "Are you sure you want to delete account?";
      this.modalOnlyOkBtn = false;
    },
    deleteAccount(){
      //axios
      this.modalText = "The account will be deleted after the completion of all current games";
      this.modalOnlyOkBtn = true;
      setTimeout(() => {
        this.isShowModal = true;
      }, 1000);
    }
  },
  computed: {
    getUserData () {
      return {
        userName: this.$store.state.userName,
        userLastName: this.$store.state.userLastName,
        userId: this.$store.state.userId
      }
    }
  }
}
</script>

<style scoped>
.profile{
  width: 100%;
  background-color: var(--section-background);
  padding: 30px 30px 55px 30px;
  display: flex;
  justify-content: space-between;
}
.profile__id-label{
  width: 100%;
  margin-bottom: 30px;
}
.profile__input{
  margin-bottom: 15px;
}
.profile__left-side{
  width: 330px;
  margin-right: 30px;
}
.profile__btn-wrapper{
  display: flex;
  margin-bottom: 8px;
}
.prodile__btn{
  margin-right: 8px;
}
.prodile__btn:last-child{
  margin-right: 0px;
}

.profile__right-side{
  flex-basis: 60%;
}
.profile__right-side p{
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  color: var(--gray-text-color);
  margin-bottom: 30px;
}

.profile__email{
  margin-bottom: 38px;
}
.profile__switch{
  margin-bottom: 58px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile__switch span{
  color: #fff;
  font-weight: 500;
  font-size: 14px;  
  line-height: 120%;
}
.profile__change-password-section,
.profile__input-card{
  margin-bottom: 60px;
}
.modal-btns{
  display: flex;
}
.mr-2{
  margin-right: 30px;
}
.modal-header{
  text-align: center;
}
.profile__mobile-text{
  display: none;
}
.card-label-wrapper{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.card-label{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: var(--primary-text-color);
}
.card-change{
  text-decoration: underline;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: var(--gray-text-color);
}

@media screen and (max-width: 1020px) {
  .profile__right-side p{
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) {
  .profile__right-side{
    display: none;
  }
  .profile__left-side{
    width: 100%;
    margin-right: 0px;
  }
  .profile__mobile-text{
    display: block;
    color: var(--gray-text-color);
  }
  .profile__mobile-text p{
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    color: var(--gray-text-color);
    margin-bottom: 20px;
  }
  .profile__id-label{
    max-width: 240px;
  }
  .show-all{
    color: var(--primary-text-color);
    text-decoration: underline;
  }
}

@media screen and (max-width: 425px) {
  .profile__mobile-text p{
    font-size: 12px;
  }
  .card-label,
  .card-change{
    font-size: 12px;
  }
}
</style>