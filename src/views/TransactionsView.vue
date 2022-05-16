<template>
    <table v-if="transactionsData && transactionsData.length" class="table no-spacing">
    <tr class="table__head head-text">
        <th>
            <div class="table__head-cell">
                <span>ID</span>
            </div>
        </th>
        <th>
            <div class="table__head-cell">
                <span>Date</span>
                <TableSortArrows @click="sortTableData('date')"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell">
                <span>Type</span>
                <TableSortArrows @click="sortTableData('type')"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell">
                <span>Amount</span>
                <TableSortArrows @click="sortTableData('amount')"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell">
                <span>Type Game</span>
                <TableSortArrows @click="sortTableData('typeGame')"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell table__head-center">
                <span>Status</span>
            </div>
        </th>
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
    <Pagination v-if="transactionsData && transactionsData.length && transactionsData.length > perPage"
                v-model="currentPage"
                :arrayLength="transactionsData.length"
                :perPage="perPage"
    />
</template>

<script>
import { reactive, ref, computed } from 'vue'
import StatusLabel from '@/components/UIKit/StatusLabel.vue'
import TableSortArrows from '@/components/UIKit/TableSortArrows.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    components:{
        StatusLabel, Pagination, TableSortArrows
    },
    setup(){
        const transactionsData = reactive([
            {id: '000006241252', date: '000006241251', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Outcomming', amount: '200', typeGame: '3 x 3', status: 'Output'},
            {id: '000006241252', date: '000006241253', type: 'Incoming', amount: '300', typeGame: '3 x 3', status: 'Mistake'},
            {id: '000006241252', date: '000006241254', type: 'Incoming', amount: '400', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241255', type: 'Incoming', amount: '500', typeGame: '4 x 4', status: 'Confirmed'},
            {id: '000006241252', date: '000006241256', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
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
        ])

        let currentPage = ref(1),
              perPage = 10;
        
        const sortVals = {
            date: 1,
            type: 1,
            amount: 1,
            typeGame: 1
        }

        const currentPageArray = computed(() => {
            return transactionsData.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
        })
        
        const sortTableData = (field) => {
            transactionsData.sort( (a, b) => {
                return (a[field] > b[field]) ? 1 * sortVals[field] : ((b[field] > a[field]) ? -1 * sortVals[field] : 0)
            }) 
            sortVals[field] *= -1;
        }

        return {
            transactionsData, currentPage, perPage, 
            currentPageArray,
            sortTableData
        }
    }
}
</script>

<style scoped>
.table__head-cell{
    display: flex;
}
.table__head-center{
    justify-content: center;
}
th span{
    margin-right: 8px;
}
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
</style>