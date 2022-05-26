<template>
    <div class="filters-wrapper" v-if="marketData && marketData.length">
        <ul class="filter">
            <li class="filter__item" 
                :class="{'active': typeGameSelectorValue === 'All'}"
                @click="typeGameSelectorValue = 'All'" 
            >All</li>
            <li class="filter__item" 
                :class="{'active': typeGameSelectorValue === '3'}"
                @click="typeGameSelectorValue='3'"
            >3x3</li>
            <li class="filter__item" 
                :class="{'active': typeGameSelectorValue === '4'}"
                @click="typeGameSelectorValue='4'"
            >4x4</li>
            <li class="filter__item" 
                :class="{'active': typeGameSelectorValue === '5'}"
                @click="typeGameSelectorValue='5'"
            >5x5</li>
        </ul>
        <ul class="filter">
            <li class="filter__item" 
                :class="{'active': priceGameSelectorValue === 'All'}"
                @click="priceGameSelectorValue='All'"
            >All</li>
            <li class="filter__item" 
                :class="{'active': priceGameSelectorValue === '100'}"
                @click="priceGameSelectorValue='100'"
            >$100</li>
            <li class="filter__item" 
                :class="{'active': priceGameSelectorValue === '200'}"
                @click="priceGameSelectorValue='200'">$200</li>
            <li class="filter__item" 
                :class="{'active': priceGameSelectorValue === '300'}"
                @click="priceGameSelectorValue='300'"
            >$300</li>
        </ul>
    </div>
    <table v-if="marketData && marketData.length" class="table no-spacing" style="width: 100%">
        <colgroup>
            <col style="width: 10%;">
            <col style="width: 20%;">
            <col style="width: 15%;">
            <col style="width: 15%;">
            <col style="width: 15%;">
            <col style="width: 15%;">
        </colgroup>
        <tr class="table__head head-text">
            <th>
                <div class="table__head-cell">
                    <span>ID</span>
                </div>
            </th>
            <th>
                <div class="table__head-cell">
                    <span>Email</span>
                </div>
            </th>
            <th>
                <div class="table__head-cell cell-pointer" @click="sortTableData('finished_games')">
                    <span>Finished Games</span>
                    <TableSortArrows :sortVal="sortVals.finished_games" />
                </div>
            </th>
            <th>
                <div class="table__head-cell cell-pointer" @click="sortTableData('price_code')">
                    <span>Price</span>
                    <TableSortArrows :sortVal="sortVals.price_code"/>
                </div>
            </th>
            <th>
                <div class="table__head-cell cell-pointer" @click="sortTableData('game_type_name')">
                    <span>Type Game</span>
                    <TableSortArrows :sortVal="sortVals.game_type_name"/>
                </div>
            </th>
            <th>
                <div class="table__head-cell table__head-center">
                    <span>Buy</span>
                </div>
            </th>
        </tr>
        <tr v-for="item in currentPageArray" :key="item.id" class="table__body-row body-text">
            <td>{{item.id}}</td>
            <td>{{item.owner_email}}</td>
            <td>{{item.finished_games}}</td>
            <td>$ {{item.price_code}}</td>
            <td>{{item.game_type_name}}</td>
            <td>
                <div class="mr-20">
                    <CustomButton :text="'Buy'" />
                </div>
            </td>
        </tr>
    </table>
    <Pagination v-if="filteredMarketData && filteredMarketData.length && filteredMarketData.length > perPage"
                v-model="currentPage"
                :arrayLength="filteredMarketData.length"
                :perPage="perPage"
    />
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue'
import TableSortArrows from '@/components/UIKit/TableSortArrows.vue'
import Pagination from '@/components/Pagination.vue'
import axios from 'axios'

export default {
    components:{
        CustomButton, Pagination, TableSortArrows
    },
    data(){
        return{
            marketData: [],
            filteredMarketData: [],
            typeGameSelectorValue: 'All',
            priceGameSelectorValue: 'All',
            currentPage: 1,
            perPage: 10,
            sortVals:{
                finished_games: null,
                price_code: null,
                game_type_name: null
            }
        }
    },
    async mounted(){
        // await axios.get('https://api.gioconostro.com/api/v1/game/list', 
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Accept': 'application/json',
        //             'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        //         }
        //     })
        //     .then((response) => {
        //         if (response && response.status && response.data.status === 'success'){
        //             this.marketData = [...response.data.data.data];
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error.message)
        //     })
            
         this.marketData = [
             {
                "id": 1,
                "ident": "G-000000000001",
                "price_code": 100,
                "game_type": 3,
                "level_1_count": 2,
                "level_2_count": 1,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "3x3",
                "price_value": 101,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 1
            },
            {
                "id": 2,
                "ident": "G-000000000002",
                "price_code": 100,
                "game_type": 4,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "4x4",
                "price_value": 101,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 2
            },
            {
                "id": 3,
                "ident": "G-000000000003",
                "price_code": 100,
                "game_type": 5,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "5x5",
                "price_value": 101,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
                "id": 4,
                "ident": "G-000000000004",
                "price_code": 200,
                "game_type": 3,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "3x3",
                "price_value": 201,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
                "id": 5,
                "ident": "G-000000000005",
                "price_code": 200,
                "game_type": 4,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "4x4",
                "price_value": 201,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
                "id": 6,
                "ident": "G-000000000006",
                "price_code": 200,
                "game_type": 5,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "5x5",
                "price_value": 201,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
                "id": 7,
                "ident": "G-000000000007",
                "price_code": 300,
                "game_type": 3,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "3x3",
                "price_value": 301,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
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
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
                "id": 9,
                "ident": "G-000000000009",
                "price_code": 300,
                "game_type": 5,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": null,
                "is_finished": 0,
                "game_type_name": "5x5",
                "price_value": 301,
                "owner_email": "*****system.com",
                "sub_owner_email": "",
                "finished_games": 0
            },
            {
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
                "sub_owner_email": "*****system.com",
                "finished_games": 0
            },
            {
                "id": 11,
                "ident": "G-z8PfyfiSnmPO",
                "price_code": 100,
                "game_type": 3,
                "level_1_count": 0,
                "level_2_count": 0,
                "parent_ident": "G-000000000001",
                "is_finished": 0,
                "game_type_name": "3x3",
                "price_value": 101,
                "owner_email": "*****@aa.aa2",
                "sub_owner_email": "*****system.com",
                "finished_games": 0
            }
        ]
    },
    computed:{
        currentPageArray(){
            return this.filteredMarketData.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
        }
    },
    methods:{
        sortTableData(field){
            if ( this.sortVals[field] === null)  this.sortVals[field] = 1;
            this.filteredMarketData.sort( (a, b) => {
                return (a[field] > b[field]) ? 1 * this.sortVals[field] : ((b[field] > a[field]) ? -1 * this.sortVals[field] : 0)
            }) 
            this.sortVals[field] *= -1;
        },
        filtering(){
            let array = [...this.marketData];
            if (this.typeGameSelectorValue !== 'All')
                array = this.marketData.filter((item) => {return item.game_type_name.includes(this.typeGameSelectorValue)});
            if (this.priceGameSelectorValue !== 'All')
                return array.filter((item) => {return item.price_code == this.priceGameSelectorValue})
            else return array;
        }
    },
    watch:{
        typeGameSelectorValue(){
            this.filteredMarketData = this.filtering();
        },
        priceGameSelectorValue(){
            this.filteredMarketData = this.filtering();
        },
        marketData(){
            this.filteredMarketData = [...this.marketData];
        }
    }
}
</script>

<style scoped>
.filters-wrapper{
    display: flex;
    margin-bottom: 33px;
    width: 100%;
}
.filter{
    padding: 0 50px;
    margin: 0;
    list-style: none;
    background: var(--section-background);
    border-radius: 20px;
    display: flex;
    flex-basis: 50%;
}

.filter:first-child{
    margin-right: 21px;
}
.filter__item{
    margin: 0;
    padding: 0;
    height: 64px;
    flex-basis: 25%;
    color: var(--gray-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.filter__item:nth-child(1),
.filter__item:nth-child(4){
    flex-basis: 25%;
}
.filter__item.active{ 
    color: var(--primary-text-color);
    border-top: 2px solid var(--primary-button-color);
    border-bottom: 2px solid var(--primary-button-color);
}


.table__head-cell{
    display: flex;
}
.cell-pointer{
    cursor: pointer;
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
th:first-child,
td:first-child{
    padding-left: 25px;
}
.no-spacing {
  border-spacing:0; 
  border-collapse: collapse;
}
.mr-20{
    margin-right: 20px;
}
</style>