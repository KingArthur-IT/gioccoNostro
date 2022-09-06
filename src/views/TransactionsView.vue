<template>
    <table v-if="transactionsData && transactionsData.length" class="table no-spacing">
    <tr class="table__head head-text">
        <th>
            <div class="table__head-cell">
                <span>ID</span>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('created_at')">
                <span>{{$t('Date')}}</span>
                <TableSortArrows :sortVal="sortVals.created_at"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('type_name')">
                <span>{{$t('Type')}}</span>
                <TableSortArrows :sortVal="sortVals.type_name"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('amount')">
                <span>{{$t('Amount')}}</span>
                <TableSortArrows :sortVal="sortVals.amount"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('typeGame')">
                <span>{{$t('type_game')}}</span>
                <TableSortArrows :sortVal="sortVals.typeGame"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell table__head-center">
                <span>{{$t('Status')}}</span>
            </div>
        </th>
    </tr>
    <tr v-for="item in currentPageArray" :key="item.id" class="table__body-row body-text">
        <td>{{item.id}}</td>
        <td>{{getDate(item.created_at)}}</td>
        <td class="type-text">{{item.type_name}}</td>
        <td>€ {{item.amount}}</td>
        <td>{{item.game.game_type_name}}</td>
        <td>
            <StatusLabel :status="item.status_name" class="mr-20"/>
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
import StatusLabel from '@/components/UIKit/StatusLabel.vue'
import TableSortArrows from '@/components/UIKit/TableSortArrows.vue'
import Pagination from '@/components/Pagination.vue'
import axios from 'axios'

export default {
    components:{
        StatusLabel, Pagination, TableSortArrows
    },
    data(){
        return{
            transactionsData: [],
            currentPage: 1,
            perPage: 10,
            sortVals: {
                created_at: null,
                type_name: null,
                amount: null,
                typeGame: null
            }
        }
    },
    async mounted(){
        await axios.get('https://api.gioconostro.com/api/v1/user/transactions', 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then((response) => {
                if (response && response.statusText === 'OK'){
                    this.transactionsData = [...response.data.page.data];
                }
            })
            .catch((error) => {
                console.log(error.message)
            })

    },
    methods:{
        sortTableData(field){
            if ( this.sortVals[field] === null)  this.sortVals[field] = 1;

            if (field !== 'typeGame'){
                this.transactionsData.sort( (a, b) => {
                    return (a[field] > b[field]) ? 1 * this.sortVals[field] : ((b[field] > a[field]) ? -1 * this.sortVals[field] : 0)
                }) 
                this.sortVals[field] *= -1;
            } else{
                this.transactionsData.sort( (a, b) => {
                    return (a.game.game_type_name > b.game.game_type_name) ? 1 * this.sortVals[field] : ((b.game.game_type_name > a.game.game_type_name) ? -1 * this.sortVals[field] : 0)
                }) 
                this.sortVals[field] *= -1;
            }
        },
        getDate(date){
            return date.slice(8, 10) + '/' + date.slice(5,7) + '/' + date.slice(0,4) + ' (' + date.slice(11,16) + ')'
         }
    },
    computed:{
        currentPageArray(){
            return this.transactionsData.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
        }
    },
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
    position: relative;
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
.cell-pointer{
    cursor: pointer;
}
.mr-20{
    margin-right: 20px;
}

@media screen and (max-width: 750px) {
    .table{
        width: 698px !important;
        border-radius: 20px 20px 0 0;
    }
}
</style>