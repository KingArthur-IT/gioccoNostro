<template>
    <div class="custom-input">
        <div v-if="isHeadInfoShown()" class="custom-input__upper-info" :class="{'w-100': label === ''}">
            <label v-if="label !== ''" class="custom-input__label">{{label}}<sup v-if="isRequired">*</sup> </label>
            <p class="custom-input__required" v-if="showRequiredInfo">Required fields<sup>*</sup></p>
            <p class="custom-input__error" v-if="isError" :class="{'w-100': label === ''}">{{errorMessage}}<sup>*</sup></p>
        </div>
        <input  :type="isPassword && !idPasswordVisible ? 'password' : 'text'" 
                :placeholder="placeholder" 
                :value="maskedValue(modelValue)"
                @input="(event) => inputEvent(event.target.value)"
                @blur="() => $emit('blur')"
                autocomplete="off"
        >
        <EyeIcon v-if="isPassword" :isOpened="idPasswordVisible" @click="idPasswordVisible = !idPasswordVisible" class="password-eye" />
    </div>
</template>

<script>
import { ref } from 'vue'
import { mask } from 'maska'
import EyeIcon from '@/components/Icons/EyeIcon.vue'

export default {
    emits: ['update:modelValue', 'blur'],
    components:{
        EyeIcon
    },
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
    setup(props, {emit}){
        const isHeadInfoShown = () => {
            return props.label !== '' || props.showRequiredInfo || props.isError
        }
        const idPasswordVisible =  ref(false)

        const maskedValue = (value) => {
            if (props.isPhone)
                return mask(value, '+##(###) ### ## ##')
            if (props.isCard)
                return mask(value, '#### #### #### ####')
            return value
        }
        const inputEvent = (value) => {
            let val = value;
            if (props.isCard && value.length > 19){
                val = value.slice(0, 18)
            }

            emit('update:modelValue', val)
        }

        return {
            isHeadInfoShown, maskedValue, inputEvent, idPasswordVisible
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
    width: 100%;
}
.custom-input__label{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: var(--primary-text-color);
}
.custom-input__required{
    margin: 0;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
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
    line-height: 120%;
    text-align: right;
    color: #FF0000;
}
.password-eye{
    position: absolute;
}
.w-100{
    width: 100%;
}

@media screen and (max-width: 425px) {
    .custom-input__label,
    .custom-input__required,
    .custom-input__error{
        font-size: 12px;
    }
    .custom-input__upper-info{
        margin-bottom: 10px;
    }
    .custom-input input{
        font-size: 12px;
    }
}
</style>