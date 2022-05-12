<template>
  <button class="button">
      {{text}}
  </button>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.button{
    background: var(--primary-button-color);
    color: var(--primary-text-color);
    border-radius: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 600px;
    height: 40px;
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;
    width: 100%;
}
.button:hover{
    background: var(--primary-hover-button-color);
}
.button:active{
    background: var(--primary-active-button-color);
}
</style>