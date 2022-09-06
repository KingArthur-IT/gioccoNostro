<template>
    <div class="select-wrapper" @click="popupEvent">
        <div class="select secondary-text-color">{{currentLanguage}}</div>
        <ul class="select-popup" :class="{'show': isSelectShown}">
            <li v-for="(lang, i) in languages.filter((item) => {return item !== currentLanguage})" :key="i" 
                @click="selectLang(lang)"
            >{{lang}}</li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue' 
import { useI18n } from 'vue-i18n'

export default {
    setup(){
        const { locale } = useI18n({ useScope: 'global' })
        const   isSelectShown = ref(false),
                currentLanguage = ref('eng'),
                languages = ['eng', 'rus']


        const popupEvent = () => {
            isSelectShown.value = !isSelectShown.value
        }
        const selectLang = (lang) => {
            currentLanguage.value = lang;
            locale.value = lang;
        }

        return {
            isSelectShown, currentLanguage, languages,
            popupEvent, selectLang
        }
    }
}
</script>

<style scoped>
.select-wrapper{
    width: 50px;
    position: relative;
    cursor: pointer;
}
.select-wrapper::after {
  content: "";
  position: absolute;
  top: 4px;
  right: 0;
  width: 9px;
  height: 8px;
  background-color: var(--secondary-text-color);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  z-index: 0;
}
.select{
    width: 50px;
    z-index: 2;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-right: 15px;
}
.select-popup{
    padding: 6px 0;
    margin: 0;
    position: absolute;
    background: var(--selected-background);
    list-style: none;
    border-radius: 12px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    transform: translate(-20%, -10px);
    opacity: 0;
    transition: all .3s ease-out;
    pointer-events: none;
}
.show.select-popup{
    transform: translate(-20%, 8px);
    opacity: 1;
    pointer-events: all;
}
.select-popup li{
    padding: 6px 25px;
    margin: 0;
    width: 79px;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.04em;
}
.select-popup li:hover{
    color: var(--primary-button-color)
}
</style>