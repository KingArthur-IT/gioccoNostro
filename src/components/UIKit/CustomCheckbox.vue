<template>
  <div class="wrapper" @click="changeEvent(modelValue)">
    <input  type="checkbox"
            class="custom-checkbox"  
            :class="{'checked': modelValue}"
            :value="modelValue"
            @input="(event) => $emit('update:modelValue', event.target.checked)"
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  setup(props, {emit}){
    const changeEvent = (oldValue) => {
      emit('update:modelValue', !oldValue)
    }

    return {
      changeEvent
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  cursor: pointer;
}
.custom-checkbox {
  position: relative;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: var(--primary-button-color);
  width: 20px;
  height: 20px;
  border: 1px solid var(--primary-button-color);
  background-color: var(--background-color);
  cursor: pointer;
}
.custom-checkbox.checked::after{
  content: '';
  position: absolute;
  top: 3px;
  bottom: 0;
  left: 2px;
  right: 0;
  background-color: var(--primary-button-color);
  background: url('@/assets/img/icons/check.svg') no-repeat;
}
</style>

