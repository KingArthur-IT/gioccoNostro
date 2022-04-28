<template>
    <div class="border-radius head">
        <p class="head__title primary-text-color">{{$route.meta.title}}</p>
        <div class="head__controls">
            <div class="mr-20">
                <SearchInput />
            </div>
            <div class="head__icons mr-20">
                <div class="head__vertical-divider mr-20"></div>
                <BellIcon class="mr-20" />
                <LightSchemeIcon class="mr-20" />
                <div class="head__vertical-divider"></div>
            </div>
            <div class="head__lang secondary-text-color">
                <Select />
            </div>
        </div>
    </div>
</template>

<script>
import BellIcon from '@/components/Icons/BellIcon.vue'
import LightSchemeIcon from '@/components/Icons/LightSchemeIcon.vue'
import SearchInput from '@/components/UIKit/SearchInput.vue'
import Select from '@/components/UIKit/Select.vue'

export default {
    components: {
        LightSchemeIcon, BellIcon,
        SearchInput,
        Select
    },
    setup(){
       
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
}
.mr-20{
    margin-right: 20px;
}
</style>