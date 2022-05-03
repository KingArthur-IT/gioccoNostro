<template>
  <button class="button" :style="`width: ${width}px`">
      {{text}}
  </button>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            required: true
        },
        width:{
            type: Number,
        }
    }
}
</script>

<style scoped>
.button{
    background: var(--primary-button-color);
    color: #fff;
    border-radius: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 600px;
    height: 40px;
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;
}
</style>