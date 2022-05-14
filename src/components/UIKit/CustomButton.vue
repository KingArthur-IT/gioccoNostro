<template>
  <button class="button" :class="{
      'primary': isPrimary && !isOutlined,
      'primary-outlined': isPrimary && isOutlined,
      'warning': !isPrimary && !isOutlined,
      'warning-outlined': !isPrimary && isOutlined
  }">
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
        isPrimary: {
            type: Boolean,
            default: true
        },
        isOutlined: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.button{
    color: var(--primary-text-color);
    border-radius: 10px;
    padding-top: 11px;
    padding-bottom: 12px;
    font-weight: 600px;
    height: 40px;
    outline: none;
    appearance: none;
    cursor: pointer;
    width: 100%;
}
.primary{
    background: var(--primary-button-color);
    border: 1px solid var(--primary-button-color);
}
.primary-outlined{
    background: transparent;
    border: 1px solid var(--primary-button-color);
}
.primary:hover{
    background: var(--primary-hover-button-color);
}
.primary:active{
    background: var(--primary-active-button-color);
}
.warning{
    background: var(--warning-color);
    border: 1px solid var(--warning-color);
}
.warning-outlined{
    background: transparent;
    border: 1px solid var(--warning-color);
}
.warning:hover{
    background: var(--warning-hover-color);
}
.warning:active{
    background: var(--warning-active-color);
}
</style>