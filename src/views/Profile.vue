<template>
    <div class="border-radius profile">
      <div class="profile__left-side">
        <div class="profile__id-label">
          <IdLabel />
        </div>
         <CustomInput 
            :label="'User Info'"
            :placeholder="'John Doe'"
            class="profile__input"
         />
         <CustomInput 
            :label="''"
            :placeholder="'+3462361122'"
            class="profile__input"
         />
         <CustomRadio v-model="gender"/>

         <CustomInput 
            :label="'Email'"
            :placeholder="'poshta@gmail.com'"
            class="profile__input profile__email"
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
          />
          <CustomInput 
              :label="''"
              :placeholder="'New Password'"
              class="profile__input"
          />
          <CustomInput 
              :label="''"
              :placeholder="'Replay Password'"
          />
         </div>

         <CustomInput 
            :label="'Card'"
            :placeholder="'**** **** **** 4921'"
            class="profile__input-card"
         />

         <div class="profile__btn-wrapper">
           <CustomButton class="prodile__btn" :text="'Save'"/>
           <CustomButton class="prodile__btn" :text="'Cancel'" :isPrimary="false"/>
           <CustomButton class="prodile__btn" :text="'Exit'" :isOutlined="true"/>
         </div>
         <CustomButton class="prodile__btn" :text="'Delete Account'" :isPrimary="false" :isOutlined="true"/>
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
</template>

<script>
import { ref } from 'vue'
import IdLabel from '@/components/UIKit/IdLabel.vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomRadio from '@/components/UIKit/CustomRadio.vue'
import Switch from '@/components/UIKit/Switch.vue'

export default {
  components: {
        CustomInput, CustomButton, IdLabel, CustomRadio, Switch
  },
  setup(){
    const gender = ref('Male'),
          emailNotificated = ref(true)

    return {
      gender, emailNotificated
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
  width: 239px;
  margin-bottom: 30px;
}
.profile__input{
  margin-bottom: 15px;
}
.profile__left-side{
  width: 330px;
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
  max-width: 560px;
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
</style>