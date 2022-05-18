<template>
    <div class="custom-input">
        <div v-if="isHeadInfoShown()" class="custom-input__upper-info">
            <label v-if="label !== ''" class="custom-input__label">{{label}}<sup v-if="isRequired">*</sup> </label>
            <p class="custom-input__required" v-if="showRequiredInfo">Required fields<sup>*</sup></p>
            <p class="custom-input__error" v-if="isError">{{errorMessage}}<sup>*</sup></p>
        </div>
        <input  :type="isPassword ? 'password' : 'text'" 
                :placeholder="placeholder" 
                :value="maskedValue(modelValue)"
                @input="(event) => $emit('update:modelValue', event.target.value)"
                @blur="() => $emit('blur')"
        >
    </div>
</template>

<script>
import { mask } from 'maska'

export default {
    emits: ['update:modelValue', 'blur'],
    props: {
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        showRequiredInfo:{
            type: Boolean,
            default: false
        },
        isError: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: String,
            default: ''
        },
        isPhone: {
            type: Boolean,
            default: false
        },
        isCard: {
            type: Boolean,
            default: false
        },
        errorMessage:{
            type: String,
            default: 'Incorrect'
        },
        isPassword: {
            type: Boolean,
            default: false
        }
    },
    setup(props){
        const isHeadInfoShown = () => {
            return props.label !== '' || props.showRequiredInfo || props.isError
        }

        const maskedValue = (value) => {
            if (props.isPhone)
                return mask(value, '+ ### ### ## ##')
            if (props.isCard)
                return mask(value, '#### #### #### ####')
            return value
        }

        return {
            isHeadInfoShown, maskedValue
        }
    }
}
</script>

<style scoped>
.custom-input{
    position: relative;
    width: 100%;
}
.custom-input__upper-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.custom-input__label{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary-text-color);
}
.custom-input__required{
    margin: 0;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
.custom-input input{
    position: relative;
    width: 100%;
    height: 40px;
    padding: 12px 17px;
    background-color: var(--selected-background);
    color: var(--primary-text-color);
    border-radius: 10px;
    border: 1px solid var(--input-border);
    z-index: 1;
    outline: none;
    caret-color: var(--primary-button-color);
}
.custom-input__error{
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #FF0000;
}
</style>