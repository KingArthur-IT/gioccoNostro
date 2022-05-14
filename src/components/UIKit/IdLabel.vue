<template>
  <div class="id-label">
        <p>ID: 64216342136133</p>
        <CopyToClipboardIcon />
  </div>
</template>

<script>
import CopyToClipboardIcon from '@/components/Icons/CopyToClipboardIcon.vue'
export default {
    components: {
        CopyToClipboardIcon
    }
}
</script>

<style scoped>
.id-label{
    width: 100%;
    height: 40px;
    background-color: var(--selected-background);
    border-radius: 0px 8px 8px 0px;
    padding: 10.5px 16px 10.5px 19px;
    border-left: 4px solid var(--light-green);
    display: flex;
    justify-content: space-between;
}
.id-label p{
    margin: 0;
    color: var(--light-green);
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
}
</style>