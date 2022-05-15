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
    <tr v-for="item in transactionsData" :key="item.id" class="table__body-row body-text">
        <td>{{item.id}}</td>
        <td>{{item.date}}</td>
        <td class="type-text">{{item.type}}</td>
        <td>$ {{item.amount}}</td>
        <td>{{item.typeGame}}</td>
        <td>{{item.status}}</td>
    </tr>
    </table>
</template>

<script>
export default {
    setup(){
        const transactionsData = [
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
            {id: '000006241252', date: '000006241252', type: 'Incoming', amount: '200', typeGame: '3 x 3', status: 'Confirmed'},
        ]

        return {
            transactionsData
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
</style>