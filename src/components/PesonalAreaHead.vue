<template>
    <div class="border-radius head">
        <p class="head__title primary-text-color">{{$route.meta.title}}</p>
        <div class="head__controls">
            <div class="mr-30">
                <SearchInput />
            </div>
            <div class="head__icons mr-20">
                <div class="head__vertical-divider mr-20"></div>
                <BellIcon class="mr-20 head-icon" />
                <LightSchemeIcon class="mr-20 head-icon" @click="toggleColorTheme"/>
                <div class="head__vertical-divider"></div>
            </div>
            <div class="head__lang secondary-text-color">
                <Select />
            </div>
        </div>
    </div>
    <div class="mobile-head">
        <div class="mobile-head__left">
            <MenuIcon class="mobile-head__menu" />
            <p class="mobile-head__title">
                <router-link to="/" class="primary-text-color mobile-head__link">
                    Giocco Nostro
                </router-link>
            </p>
        </div>
        <div class="mobile-head__right">
            <BellIcon class="mobile-head__bell" />
            <LightSchemeIcon class="mobile-head__theme" @click="toggleColorTheme"/>
            <router-link to="/profile" class="router-link">
                <div class="mobile-head__user">
                    {{avatar}}
                </div>
            </router-link>
        </div>
    </div>
    <div class="mobile-page-title">
        <p class="head__title primary-text-color">{{$route.meta.title}}</p>
    </div>
</template>

<script>
import BellIcon from '@/components/Icons/BellIcon.vue'
import MenuIcon from '@/components/Icons/MenuIcon.vue'
import LightSchemeIcon from '@/components/Icons/LightSchemeIcon.vue'
import SearchInput from '@/components/UIKit/SearchInput.vue'
import Select from '@/components/UIKit/Select.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        LightSchemeIcon, BellIcon, MenuIcon,
        SearchInput,
        Select
    },
    setup(){
        const store = useStore();
        const toggleColorTheme = () => {
            const currentTheme = document.getElementById('app').getAttribute('data-theme');
            document.getElementById('app').setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
        }

        const getUserData = computed(() => {
            return {
                userName: store.state.userName,
                userLastName: store.state.userLastName,
                userId: store.state.userId
            }
        })

        const getFirstLetter = (value) => {
            if (value == null)
                return ''
            else return String(value).slice(0,1).toUpperCase()
        }

        const avatar = computed(() => {
            return getFirstLetter(store.state.userName) + getFirstLetter(store.state.userLastName)
        });

       return {
           toggleColorTheme, getUserData, avatar
       }
    }
}
</script>

<style scoped>
.head{
    width: 100%;
    height: 80px;
    padding: 20px;
    margin-bottom: var(--offset);
    background-color: var(--section-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head__title{
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
}
.head__controls{
    display: flex;
    align-items: center;
}
.head__vertical-divider{
    background-color: var(--selected-background);
    width: 2px;
    height: 23px;
}
.head__icons{
    display: flex;
    align-items: center;
}
.head__lang{
    margin-right: 15px;
}
.mr-20{
    margin-right: 20px;
}
.mr-30{
    margin-right: 30px;
}
.head-icon{
    cursor: pointer;
}

.mobile-head{
    position: fixed;
    width: 100%;
    display: none;
    height: 68px;
    padding: 22px var(--offset);
    justify-content: space-between;
    align-items: center;
    background: var(--section-background);
    z-index: 10;
}
.mobile-head__left{
    display: flex;
    align-items: center;
}
.mobile-head__menu{
    margin-right: 19px;
}
.mobile-head__title{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 117%;
    margin: 0;
}
.mobile-link{
    text-decoration: none;
}
.mobile-head__right{
    display: flex;
}
.mobile-head__bell,
.mobile-head__theme{
    margin-right: 20px;
}
.mobile-head__user{
    height: 24px;
    width: 24px;
    background: #F2521D;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mobile-page-title{
    display: none;
    margin-top: var(--offset);
    padding: 0 var(--offset);
    padding-top: 68px;
}

@media screen and (max-width: 860px) {
    .mobile-head{
        display: flex;
    }
    .head{
        display: none;
    }
    .mobile-page-title{
        display: block;
    }
}

@media screen and (max-width: 525px) {
    .mobile-head__title{
        font-size: 18px;
    }
}
@media screen and (max-width: 480px) {
    .mobile-head__title{
        font-size: 16px;
    }
    .mobile-head__bell,
    .mobile-head__theme{
        margin-right: 10px;
    }
}
@media screen and (max-width: 425px) {
    .mobile-head__title{
        font-size: 14px;
    }
}
</style>