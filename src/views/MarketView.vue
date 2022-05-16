<template>
    <div class="filters-wrapper">
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
            <col style="width: 20%;">
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
                <div class="table__head-cell">
                    <span>Finished Games</span>
                    <TableSortArrows @click="sortTableData('finishedGames')"/>
                </div>
            </th>
            <th>
                <div class="table__head-cell">
                    <span>Price</span>
                    <TableSortArrows @click="sortTableData('price')"/>
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
                    <span>Buy</span>
                </div>
            </th>
        </tr>
        <tr v-for="item in filteredMarketData" :key="item.id" class="table__body-row body-text">
            <td>{{item.id}}</td>
            <td>{{item.email}}</td>
            <td>{{item.finishedGames}}</td>
            <td>$ {{item.price}}</td>
            <td>{{item.typeGame}}</td>
            <td>
                <CustomButton :text="'Buy'"/>
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
import { reactive, ref, computed } from 'vue'
import CustomButton from '@/components/UIKit/CustomButton.vue'
import TableSortArrows from '@/components/UIKit/TableSortArrows.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    components:{
        CustomButton, Pagination, TableSortArrows
    },
    setup(){
        const marketData = [
            {id: '000006241251', email: 'aamemail@gmail.com', finishedGames: '100', price: '100', typeGame: '3 x 3'},
            {id: '000006241252', email: 'bamemail@gmail.com', finishedGames: '200', price: '200', typeGame: '4 x 3'},
            {id: '000006241253', email: 'camemail@gmail.com', finishedGames: '300', price: '300', typeGame: '5 x 3'},
            {id: '000006241254', email: 'damemail@gmail.com', finishedGames: '400', price: '400', typeGame: '3 x 3'},
            {id: '000006241255', email: 'namemail@gmail.com', finishedGames: '500', price: '500', typeGame: '3 x 3'},
            {id: '000006241256', email: 'namemail@gmail.com', finishedGames: '600', price: '200', typeGame: '3 x 3'},
            {id: '000006241257', email: 'namemail@gmail.com', finishedGames: '700', price: '200', typeGame: '3 x 3'},
            {id: '000006241258', email: 'namemail@gmail.com', finishedGames: '100', price: '200', typeGame: '3 x 3'},
            {id: '000006241259', email: 'namemail@gmail.com', finishedGames: '100', price: '200', typeGame: '3 x 3'},
            {id: '000006241210', email: 'namemail@gmail.com', finishedGames: '100', price: '200', typeGame: '3 x 3'},
            {id: '000006241211', email: 'namemail@gmail.com', finishedGames: '100', price: '200', typeGame: '3 x 3'},
        ]
        
        const  typeGameSelectorValue = ref('All'),
               priceGameSelectorValue = ref('All')

        const filteredMarketData = computed(() => {
            let array = [...marketData];
            if (typeGameSelectorValue.value !== 'All')
                array = marketData.filter((item) => {return item.typeGame.includes(typeGameSelectorValue.value)});
            if (priceGameSelectorValue.value !== 'All')
                return array.filter((item) => {return item.price == priceGameSelectorValue.value})
            else return array;
        })

        let currentPage = ref(1),
              perPage = 10;
        
        const sortVals = {
            finishedGames: 1,
            price: 1,
            typeGame: 1
        }

        const currentPageArray = computed(() => {
            return filteredMarketData.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
        })
        
        const sortTableData = (field) => {
            filteredMarketData.sort( (a, b) => {
                return (a[field] > b[field]) ? 1 * sortVals[field] : ((b[field] > a[field]) ? -1 * sortVals[field] : 0)
            }) 
            sortVals[field] *= -1;
        }

        return {
            marketData, filteredMarketData, 
            currentPage, perPage, 
            currentPageArray,
            sortTableData,
            typeGameSelectorValue, priceGameSelectorValue
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
</style>