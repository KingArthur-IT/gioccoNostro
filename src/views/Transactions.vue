<template>
  <table class="table no-spacing">
    <tr class="table__head head-text">
        <th>ID</th>
        <th>Date</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Type Game</th>
        <th>Status</th>
    </tr>
    <tr v-for="item in currentPageArray" :key="item.id" class="table__body-row body-text">
        <td>{{item.id}}</td>
        <td>{{item.date}}</td>
        <td class="type-text">{{item.type}}</td>
        <td>$ {{item.amount}}</td>
        <td>{{item.typeGame}}</td>
        <td>
            <StatusLabel :status="item.status"/>
        </td>
    </tr>
    </table>
    <div class="pagination">
        <PageArrow :isLeft="true" :isEnable="isLeftArrowEnable" @click="prevPage"/>
        <div class="page-nums-wrapper">
            <div v-for="i in pageItemsArray" :key="i">
                <span   :class="{'active-page': i === pageSettings.currentPage}" 
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
import { reactive, computed } from 'vue'
import StatusLabel from '@/components/UIKit/StatusLabel.vue'
import PageArrow from '@/components/UIKit/PageArrow.vue'

export default {
    components:{
        StatusLabel, PageArrow
    },
    setup(){
        const transactionsData = [
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Mistake'},
        ]

        const pageSettings = reactive({
            perPage: 10,
            currentPage: 1,
        })

        const currentPageArray = computed(() => {
            return transactionsData.slice((pageSettings.currentPage - 1) * pageSettings.perPage, pageSettings.currentPage * pageSettings.perPage)
        })
        const pagesCount = computed(() => {
            return Math.ceil(transactionsData.length / pageSettings.perPage)
        })
        const isLeftArrowEnable = computed(() => {
            return pageSettings.currentPage > 1
        })
        const isRightArrowEnable = computed(() => {
            return pageSettings.currentPage < pagesCount.value
        })
        const isPageItemShow = (index) => {
            return index === 1 || index === pagesCount.value || Math.abs(index - pageSettings.currentPage) < 2
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
            if (isRightArrowEnable)
                pageSettings.currentPage ++;
        }
        const prevPage = () => {
            if (isLeftArrowEnable)
                pageSettings.currentPage --;
        }
        const goToPage = (num) => {
            if (num !== '...')
                pageSettings.currentPage = num;
        }


        return {
            transactionsData, pageSettings, currentPageArray,
            pagesCount, isLeftArrowEnable, isRightArrowEnable,
            isPageItemShow, pageItemsArray,
            nextPage, prevPage, goToPage
        }
    }
}
</script>

<style scoped>
.table{
    width: 100%;
    background: var(--section-background);
    border-radius: 20px;
}
.table__head{
    height: 60px;
    padding: 21px 0;
}
.head-text{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: #FFFFFF;
    text-align: left;
}
.table__body-row{
    height: 60px;
    padding: 21px 0;
}
.table__body-row:nth-child(even){
    background: var(--selected-background);
}
.body-text{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: var(--gray-text-color);
}
.type-text{
    color: var(--light-green);
}
th:first-child,
td:first-child{
    padding-left: 25px;
}
.no-spacing {
  border-spacing:0; 
  border-collapse: collapse;
}
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