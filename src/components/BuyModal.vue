<template>
    <transition name="modal">
        <CustomModal v-if="isShown" :width="modalWidth">
            <template v-slot:header>
                <div class="modal-header">
                    <CloseIcon @click="$emit('closeBuyModal')"/>
                </div>
            </template>

            <template v-slot:body>
                <div class="modal-body">
                  <h2 class="modal-body__title">{{$t('buy_game')}}</h2>
                  <h3 class="modal-body__subtitle">{{$t('buy_game_subtitle')}}</h3>
                  <p class="modal-body__text">
                    {{$t('buy_game_text')}}
                  </p>
                  <p class="modal-body__detail">{{ $t('detail') }}:</p>
                  <ul class="modal-body__list">
                    <li class="modal-body__list-item">
                      <p class="modal-body__list-text">{{$t('payment')}}</p>
                      <p class="modal-body__list-text">€{{gamePrice}}</p>
                    </li>
                    <li class="modal-body__list-item">
                      <p class="modal-body__list-text">{{$t('payment_for_current')}}</p>
                      <p class="modal-body__list-text">€{{gamePrice}}</p>
                    </li>
                    <li class="modal-body__list-item">
                      <p class="modal-body__list-text">{{$t('payment_for_platform')}}</p>
                      <p class="modal-body__list-text">€{{gamePrice}}</p>
                    </li>
                  </ul>
                  <div class="modal-body__total">
                    <p>{{$t('total')}}:</p>
                    <p>€{{totalPrice}}</p>
                  </div>
                  <div class="modal-body__terms-wrapper">
                    <CustomCheckbox v-model="isTermAccepred" :isError="!isTermAgreeValid">
                      <p class="modal-body__agree-text">
                          {{$t('i_accept')}} <a href="docs/Terms introduction.pdf" target="_blank">{{$t('terms_of')}}</a> {{$t('public_offer')}}
                      </p>
                    </CustomCheckbox>
                  </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="modal-footer">
                  <CustomButton :text="$t('payment')" @click="paymentEvent"/>
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
    },
    gamePrice:{
      type: Number,
      default: 0
    },
    totalPrice:{
      type: Number,
      default: 0
    },
    gameIdent:{
      type: String,
      default: ''
    }
  },
  data(){
    return{
      isTermAccepred: false,
      isTermAgreeValid: true,
      windowWidth: 0
    }
  },
  mounted(){
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods:{
    paymentEvent(){
      if (!this.isTermAccepred) {
        this.isTermAgreeValid = false;
        return
      }
      else this.isTermAgreeValid = true;
      this.$emit('PaymentEvent', this.gameIdent);
    }
  },
  computed:{
    modalWidth: function(){
      return this.windowWidth > 475 ? 450 : this.windowWidth > 360 ? 350 : 300
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