<template>
    <div class="search-input">
        <SearchIcon class="search-input__search-icon"/>
        <input  type="text" 
                :placeholder="placeholder" 
                class="primary-text-color"
                :value="modelValue"
                @input="(event) => $emit('update:modelValue', event.target.value)"
        >
    </div>
</template>

<script>
import SearchIcon from '@/components/Icons/SearchIcon.vue'

export default {
    emits: ['update:modelValue'],
    components:{
        SearchIcon
    },
    props: {
        placeholder: {
            type: String,
            default: 'Type to search...'
        },
        modelValue: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.search-input{
    position: relative;
    width: 100%;
}
.search-input input{
    position: relative;
    width: 100%;
    height: 40px;
    padding: 12px 40px;
    color: var(--primary-text-color);
    background-color: var(--selected-background);
    border-radius: 10px;
    border: 1px solid var(--input-border);
    z-index: 1;
    outline: none;
    caret-color: var(--primary-button-color);
}
.search-input__search-icon{
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
}

@media screen and (max-width: 1100px) {
    .search-input input{
        width: 200px;
    }
}

@media screen and (max-width: 950px) {
    .search-input{
        display: none;
    }
}
</style>