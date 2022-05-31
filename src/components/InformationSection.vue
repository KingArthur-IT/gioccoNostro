<template>
    <div class="sidebar__information-wrapper">
        <p class="sidebar__information-title">{{$t('Information')}}</p>
        <a :href="`docs/rules/${locale}.pdf`" target="_blank">
            <p class="sidebar__information-item">{{$t('game_rules')}}</p>
        </a>
        <a :href="`docs/Rules and Terms of Service-full text.pdf`" target="_blank">
            <p class="sidebar__information-item">{{$t('term_of_use')}}</p>
        </a>
    </div>
    <ul class="siderbar__settings-links">
        <li class="sidebar__settings-link" @click="logoutEvent">
            <LogoutIcon class="sidebar__page-icon"/>
            <p>{{$t('Exit')}}</p>
        </li>
    </ul>
    <transition name="modal">
        <CustomModal v-if="isShowModal">
            <template v-slot:header>
                <div class="modal-header">
                    {{modalText}}
                </div>
            </template>
            <template v-slot:footer>
                <div class="modal-btns">
                <CustomButton :isPrimary="false" :text="'Yes'" @click="yesBtnEvent" class="mr-2"/>
                <CustomButton :isOutlined="true" :text="'No'" @click="isShowModal = false" />
                </div>
            </template>
        </CustomModal>
  </transition>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import LogoutIcon from '@/components/Icons/LogoutIcon.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import CustomModal from '@/components/Modal.vue'

export default {
    components: {
        LogoutIcon, CustomButton, CustomModal
    },
    setup(){
        const router = useRouter();
        const { locale } = useI18n({ useScope: 'global' });

        const isShowModal = ref(false);
        const modalText = ref('');

        const logoutEvent = () => {
            isShowModal.value = true;
            modalText.value = 'Logout?'
        }

        const yesBtnEvent = () => {
            isShowModal.value = false;
            localStorage.removeItem('access_token');
            router.push({name: 'signIn'})
        };
 
        return {
            locale,
            isShowModal, modalText,
            yesBtnEvent, logoutEvent
        }
    }
}
</script>

<style scoped>
.sidebar__page-icon{
    margin-right: 17px;
}
.sidebar__information-wrapper{
    
}
.sidebar__information-title{
    margin: 0;
    margin-bottom: 14px;
    padding-left: 26px;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #3C4254;
}
.sidebar__information-item{
    margin: 0;
    padding: 14px 26px;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    cursor: pointer;
}
.siderbar__settings-links{
    padding: 0;
    margin: 0;
    margin-bottom: 18px;
}
.sidebar__settings-link{
    padding: 0;
    padding: 18px 28px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.sidebar__settings-link p{
    margin: 0;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
}
.sidebar__settings-link:hover p{
    color: var(--primary-text-color)
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
</style>