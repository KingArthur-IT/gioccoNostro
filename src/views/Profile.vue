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
         <CustomInput 
            :label="'Change Password'"
            :placeholder="'poshta@gmail.com'"
            class="profile__input"
         />

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
            class="profile__input"
         />

         <CustomInput 
            :label="'Card'"
            :placeholder="'**** **** **** 4921'"
            class="profile__input"
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
import IdLabel from '@/components/UIKit/IdLabel.vue'
import CustomInput from '@/components/UIKit/CustomInput.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
export default {
  components: {
        CustomInput, CustomButton, IdLabel
    },
}
</script>

<style scoped>
.profile{
  width: 100%;
  height: 85%;
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
</style>