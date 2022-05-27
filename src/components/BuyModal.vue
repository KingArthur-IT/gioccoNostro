<template>
    <transition name="modal">
        <CustomModal v-if="isShown" :width="450">
            <template v-slot:header>
                <div class="modal-header">
                    <CloseIcon @click="$emit('closeBuyModal')"/>
                </div>
            </template>

            <template v-slot:body>
                <div class="modal-body">
                  <h2 class="modal-body__title">Buy game</h2>
                  <h3 class="modal-body__subtitle">Sed ut perspiciatis unde</h3>
                  <p class="modal-body__text">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
                  </p>
                  <p class="modal-body__detail">Detail:</p>
                  <ul class="modal-body__list">
                    <li class="modal-body__list-item">
                      <p class="modal-body__list-text">Payment for saler #1</p>
                      <p class="modal-body__list-text">$200</p>
                    </li>
                    <li class="modal-body__list-item">
                      <p class="modal-body__list-text">Payment for current saler</p>
                      <p class="modal-body__list-text">$200</p>
                    </li>
                    <li class="modal-body__list-item">
                      <p class="modal-body__list-text">Payment to platform</p>
                      <p class="modal-body__list-text">$200</p>
                    </li>
                  </ul>
                  <div class="modal-body__total">
                    <p>Total:</p>
                    <p>$600</p>
                  </div>
                  <div class="modal-body__terms-wrapper">
                    <CustomCheckbox v-model="isTermAccepred">
                      <p class="modal-body__agree-text">
                          I accept all the <a href="docs/Terms introduction.pdf" target="_blank">terms of</a> the public offer
                      </p>
                    </CustomCheckbox>
                  </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="modal-footer">
                  <CustomButton :text="'Payment'" @click="$emit('PaymentEvent')"/>
                </div>
            </template>
        </CustomModal>
    </transition>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomModal from '@/components/Modal.vue'
import CloseIcon from '@/components/Icons/CloseIcon.vue'
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue'

export default {
  components:{
        CustomButton, 
        CustomModal,
        CloseIcon,
        CustomCheckbox
  },
  props:{
    isShown:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      isTermAccepred: false
    }
  }
}
</script>

<style scoped>
.modal-header{
    display: flex;
    justify-content: flex-end;
}

.modal-body{
  padding: 0;
}
.modal-body__title{
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: var(--primary-text-color);
  margin-bottom: 24px;
}
.modal-body__subtitle{
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: var(--primary-text-color);
  margin-bottom: 8px;
}
.modal-body__text{
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: var(--primary-text-color);
  margin-bottom: 24px;
}
.modal-body__detail{
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: var(--primary-text-color);
  padding-bottom: 14px;
  border-bottom: 1px solid var(--selected-background);
}
.modal-body__list{
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  list-style: none;
}
.modal-body__list-item{
  padding: 8px 0;
  border-bottom: 1px solid var(--selected-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body__list-text{
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: var(--primary-text-color);
}
.modal-body__total{
  display: flex;
  justify-content: space-between;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: var(--primary-text-color);
  margin-bottom: 14px;
}
.modal-body__total p{
  margin: 0;
}
.modal-body__terms-wrapper{

}
.modal-body__agree-text{
  margin: 0;
  margin-left: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: var(--primary-text-color);
}
.modal-body__agree-text a{
  text-decoration: none;
  color: var(--primary-button-color);
}

.modal-footer{
  width: 100%;
  margin-bottom: 18px;
}
</style>