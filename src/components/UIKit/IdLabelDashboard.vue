<template>
  <div class="id-label" :class="{'showPopup': afterLabel}">
        <p>ID: {{id}}</p>
        <CopyToClipboardIcon @click="copyToClipboard" class="icon"/>
  </div>
</template>

<script>
import CopyToClipboardIcon from '@/components/Icons/CopyToClipboardIcon.vue'
import { ref } from 'vue'

export default {
    components: {
        CopyToClipboardIcon
    },
    props:{
        id:{
            type: Number,
            default: 0
        }
    },
    setup(){
        var afterLabel = ref(false);

        const copyToClipboard = () => {
            navigator.clipboard.writeText(64216342136133);
            
            afterLabel.value = true;
            setTimeout(() => {
                afterLabel.value = false;
            }, 1000);
        }

        return { 
            copyToClipboard, afterLabel
        }
    }
}
</script>

<style scoped>
.id-label{
    position: relative;
    width: 100%;
    background: rgba(48, 224, 161, 0.2);
    border-radius: 6px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
}
.id-label:after{
    content: 'Copied to clipboard';
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px 10px;
    border-radius: 7px;
    background: var(--selected-background);
    color: var(--primary-text-color);
    transform: translate(0%, 120%);
    display: flex;
    align-items: center;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.1s ease-out;
    font-size: 14px;
}
.showPopup.id-label:after{
    opacity: 1;
}
.id-label p{
    margin: 0;
    color: var(--light-green);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
}
.icon{
    cursor: pointer;
}
</style>