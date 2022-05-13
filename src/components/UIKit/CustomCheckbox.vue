<template>
  <input  type="checkbox"
          class="custom-checkbox"  
          :class="{'checked': isChecked}"
          @input="handleInput"
  >
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['input'],
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }){
    let isChecked = ref(props.value)

    const handleInput = () => {
      isChecked.value = !isChecked.value;
      emit('input', isChecked.value)
    }

    return {
      isChecked, handleInput
    }
  }
}
</script>

<style>
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

