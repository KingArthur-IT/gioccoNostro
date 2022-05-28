<template>
  <div class="pagination">
        <PageArrow :isLeft="true" :isEnable="isLeftArrowEnable" @click="prevPage"/>
        <div class="page-nums-wrapper">
            <div v-for="i in pageItemsArray" :key="i">
                <span   :class="{'active-page': i === modelValue}" 
                        class="page-item"
                        @click="goToPage(i)"
                >
                    {{i}}
                </span>
            </div>
        </div>
        <PageArrow :isLeft="false" :isEnable="isRightArrowEnable" @click="nextPage"/>
    </div>
</template>

<script>
import { computed } from 'vue'
import PageArrow from '@/components/UIKit/PageArrow.vue'

export default {
    components:{
        PageArrow
    },
    emits:['update:modelValue'],
    props:{
        modelValue:{
            type: Number,
        },
        arrayLength:{
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        }
    },
    setup(props, { emit }){
        const pagesCount = computed(() => {
            return Math.ceil(props.arrayLength / props.perPage)
        })

        const isLeftArrowEnable = computed(() => {
            return props.modelValue > 1
        })
        const isRightArrowEnable = computed(() => {
            return props.modelValue < pagesCount.value
        })

        const isPageItemShow = (index) => {
            return index === 1 || index === pagesCount.value || Math.abs(index - props.modelValue) < 2
        }
        const pageItemsArray = computed(() => {
            let hasDots = false,
                arr = []
            for(let i = 1; i <= pagesCount.value; i++ ){
                if (isPageItemShow(i)) 
                    arr.push(i)
                else{
                    if (!hasDots){
                        arr.push('...');
                        hasDots = true;
                    }
                }
            }
            return arr;
        })

        const nextPage = () => {
            if (isRightArrowEnable){
                const num = props.modelValue + 1;
                emit('update:modelValue', num)
            }
        }
        const prevPage = () => {
            if (isLeftArrowEnable){
                const num = props.modelValue - 1;
                emit('update:modelValue', num)
            }
        }
        const goToPage = (num) => {
            if (num !== '...')
                emit('update:modelValue', num)
        }

        return {
            isLeftArrowEnable, isRightArrowEnable,
            pageItemsArray,
            nextPage, prevPage, goToPage
        }
    }
}
</script>

<style scoped>
.pagination{
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
}
.page-nums-wrapper{
    display: flex;
}
.page-item{
    color: var(--gray-text-color);
    cursor: pointer;
     margin-right: 25px;
}
.page-item:first-child{
    margin-left: 20px;
}
.page-item:last-child{
    margin-right: 20px;
}
.active-page{
    color: var(--primary-text-color)
}


</style>