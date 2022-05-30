<template>
    <div class="mobile-menu">
        <div class="mobile-menu__head">
            <div class="mobile-menu__search">
                <SearchInput :isForMobileMenu="true"/>
            </div>
            <div class="secondary-text-color mobile-menu__head__lang">
                <Select />
            </div>
        </div>
        <UserInfo @closeMobileMenu="$emit('closeMobileMenuEvent')"/>
        <PageLinks @closeMobileMenu="$emit('closeMobileMenuEvent')"/>
        <div class="mt">
            <InformationSection />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SearchInput from '@/components/UIKit/SearchInput.vue'
import Select from '@/components/UIKit/Select.vue'
import PageLinks from '@/components/PageLinks.vue'
import UserInfo from '@/components/UserInfo.vue'
import InformationSection from '@/components/InformationSection.vue'

export default {
    components: {
        SearchInput,
        Select,
        PageLinks,
        UserInfo,
        InformationSection
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
            locale, isShowModal, modalText,
            yesBtnEvent, logoutEvent
        }
    }
}
</script>

<style scoped>
.mobile-menu{
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    background: var(--section-background);
    z-index: 5;
    padding-top: 90px;
}
.mobile-menu__head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 var(--offset);
    margin-bottom: 21px;
}
.mobile-menu__search{
    margin-right: var(--offset);
}
.mobile-menu__head__lang{

}
.mt{
    margin-top: 28px;
}

</style>