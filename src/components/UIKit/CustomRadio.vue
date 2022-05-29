<template>
    <div class="radio-group">
        <div v-for="item in radioList" :key="item.id"  class="radio-item">
            <input  type="radio" 
                    :id="item.id" 
                    :value="item.value" 
                    name="radio-male-group"
                    v-model="modelValue"
                    @input="(event) => $emit('update:modelValue', event.target.value)"
            >
            <label :for="item.id">{{item.value === '1' ? 'Male' : 'Female'}}</label>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: String,
            default: '1'
        },
    },
    setup(props){
        const radioList = [
            { id: 'male', value: 1 },
            { id: 'femail', value: 2 },
        ]

        const selectedVal = props.modelValue;

        return {
            radioList, selectedVal
        }
    }
}
</script>

<style scoped>
.radio-group{
    display: flex;
    margin-bottom: 50px;
}
.radio-item{
    margin-right: 34px;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: #fff;
}
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 13px;
    height: 13px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: transparent;
}
[type="radio"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 13px;
    height: 13px;
    border: 1px solid var(--primary-button-color);
    border-radius: 50%;
    background: transparent;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 7px;
    height: 7px;
    background: var(--primary-button-color);
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
</style>