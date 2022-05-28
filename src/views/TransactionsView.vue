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
                <span>Date</span>
                <TableSortArrows :sortVal="sortVals.created_at"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('type_name')">
                <span>Type</span>
                <TableSortArrows :sortVal="sortVals.type_name"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('amount')">
                <span>Amount</span>
                <TableSortArrows :sortVal="sortVals.amount"/>
            </div>
        </th>
        <th>
            <div class="table__head-cell cell-pointer" @click="sortTableData('typeGame')">
                <span>Type Game</span>
                <TableSortArrows :sortVal="sortVals.typeGame"/>
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
        <td>{{getDate(item.created_at)}}</td>
        <td class="type-text">{{item.type_name}}</td>
        <td>$ {{item.amount}}</td>
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
        // await axios.get('https://api.gioconostro.com/api/v1/user/transactions', 
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Accept': 'application/json',
        //             'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        //         }
        //     })
        //     .then((response) => {
        //         console.log(response)
        //         if (response && response.statusText === 'OK'){
        //             this.transactionsData = [...response.data.page.data];
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error.message)
        //     })

        this.transactionsData = [
            {
                "id": 5,
                "type": 2,
                "amount": 600,
                "game_id": 10,
                "user_id": 12,
                "order_id": 5,
                "status": 1,
                "message": null,
                "created_at": "2022-05-15T16:38:17.000000Z",
                "updated_at": "2022-05-15T16:38:17.000000Z",
                "type_name": "Outgoing",
                "status_name": "Success",
                "game_ident": "G-HXMR7GLhhIFQ",
                "user_email": "email@aa.aa",
                "payment_code": "2344655868",
                "game": {
                    "id": 10,
                    "ident": "G-HXMR7GLhhIFQ",
                    "price_code": 100,
                    "game_type": 3,
                    "level_1_count": 1,
                    "level_2_count": 0,
                    "parent_ident": "G-000000000001",
                    "is_finished": 0,
                    "game_type_name": "3x3",
                    "price_value": 101,
                    "owner_email": "*****on43@example.org",
                    "sub_owner_email": "*****system.com"
                },
                "user": {
                    "id": 12,
                    "name": "name",
                    "phone": "123356664",
                    "email": "email@aa.aa",
                    "email_verified_at": "2022-05-10T18:19:33.000000Z",
                    "card_number": "4441114454427277",
                    "blocked": 0,
                    "deleted": 0,
                    "finished_games": 0,
                    "created_at": "2022-05-10T18:19:16.000000Z",
                    "updated_at": "2022-05-18T13:19:15.000000Z",
                    "email_part": "*****@aa.aa"
                },
                "order": {
                    "id": 5,
                    "buyer_id": 12,
                    "owner_id": 2,
                    "sub_owner_id": 1,
                    "game_id": 10,
                    "total_amount": 600,
                    "payment_id": "2344655868",
                    "status": 4,
                    "message": null,
                    "created_at": "2022-05-15T16:38:17.000000Z",
                    "updated_at": "2022-05-15T16:38:17.000000Z"
                }
            },
            {
                "id": 7,
                "type": 2,
                "amount": 903,
                "game_id": 8,
                "user_id": 12,
                "order_id": 6,
                "status": 1,
                "message": null,
                "created_at": "2022-05-15T18:08:30.000000Z",
                "updated_at": "2022-05-15T18:08:30.000000Z",
                "type_name": "Outgoing",
                "status_name": "Success",
                "game_ident": "G-000000000008",
                "user_email": "email@aa.aa",
                "payment_code": "23446558681",
                "game": {
                    "id": 8,
                    "ident": "G-000000000008",
                    "price_code": 300,
                    "game_type": 4,
                    "level_1_count": 1,
                    "level_2_count": 0,
                    "parent_ident": null,
                    "is_finished": 0,
                    "game_type_name": "4x4",
                    "price_value": 301,
                    "owner_email": "*****system.com",
                    "sub_owner_email": ""
                },
                "user": {
                    "id": 12,
                    "name": "name",
                    "phone": "123356664",
                    "email": "email@aa.aa",
                    "email_verified_at": "2022-05-10T18:19:33.000000Z",
                    "card_number": "4441114454427277",
                    "blocked": 0,
                    "deleted": 0,
                    "finished_games": 0,
                    "created_at": "2022-05-10T18:19:16.000000Z",
                    "updated_at": "2022-05-18T13:19:15.000000Z",
                    "email_part": "*****@aa.aa"
                },
                "order": {
                    "id": 6,
                    "buyer_id": 12,
                    "owner_id": 1,
                    "sub_owner_id": null,
                    "game_id": 8,
                    "total_amount": 903,
                    "payment_id": "23446558681",
                    "status": 4,
                    "message": null,
                    "created_at": "2022-05-15T18:08:30.000000Z",
                    "updated_at": "2022-05-15T18:08:30.000000Z"
                }
            }
        ]
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