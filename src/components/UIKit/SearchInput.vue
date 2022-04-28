<template>
    <div class="search-input">
        <SearchIcon class="search-input__search-icon"/>
        <input type="text" :placeholder="placeholder" class="primary-text-color">
        <VoiceIcon class="search-input__voice-icon"/>
    </div>
</template>

<script>
import SearchIcon from '@/components/Icons/SearchIcon.vue'
import VoiceIcon from '@/components/Icons/VoiceIcon.vue'

export default {
    components:{
        SearchIcon, VoiceIcon
    },
    props: {
        placeholder: {
            type: String,
            default: 'Type to search...'
        }
    }
}
</script>

<style scoped>
.search-input{
    position: relative;
}
.search-input input{
    position: relative;
    width: 260px;
    height: 40px;
    padding: 12px 40px;
    background-color: var(--selected-background);
    border-radius: 10px;
    border: 1px solid #3C4254;
    z-index: 1;
}
.search-input__search-icon{
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
}
.search-input__voice-icon{
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
}
</style>