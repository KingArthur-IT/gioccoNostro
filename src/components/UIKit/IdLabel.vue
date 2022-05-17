<template>
  <div class="id-label" :class="{'after': afterLabel}">
        <p>ID: 64216342136133</p>
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
    height: 40px;
    background-color: var(--selected-background);
    border-radius: 0px 8px 8px 0px;
    padding: 10.5px 16px 10.5px 19px;
    border-left: 4px solid var(--light-green);
    display: flex;
    justify-content: space-between;
}
.after:after{
    content: 'Copied to clipboard';
    position: absolute;
    right: 0;
    height: 40px;
    padding: 0 10px;
    border-radius: 7px;
    background: var(--selected-background);
    color: var(--primary-text-color);
    transform: translate(102%, -25%);
    display: flex;
    align-items: center;
}
.id-label p{
    margin: 0;
    color: var(--light-green);
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
}
.icon{
    cursor: pointer;
}
</style>