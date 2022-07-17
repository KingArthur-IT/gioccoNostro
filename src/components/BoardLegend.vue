<template>
  <ul class="legend-list">
        <li class="legend-item">
            <div class="legend-img">
                <BoardItem :color="'red'" />
            </div>
            <p class="legend-text">Your position</p>
        </li>


        <li v-for="i in level - 1" :key="i" class="legend-item">
            <div class="legend-img">
                <BoardItem :color="legendColor[i - 1]" />
            </div>
            <p class="legend-text">{{legendName[i + 4 - level]}}</p>
        </li>
    </ul>
</template>

<script>
import BoardItem from '@/components/UIKit/BoardItem.vue'

export default {
    components: {
        BoardItem
    },
    props:{
        level:{
            type: Number,
            default: 3
        }
    },
    data(){
        return{
            legendName: [
                'Osservatore', 'Comandante', 'Venditore', 'Novizio'
            ],
            legendColor: [
                'green', 'yellow', 'orange', 'blue'
            ]
        }
    }
}
</script>

<style scoped>
.legend-list{
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
}
.legend-item{
    display: flex;
    align-items: center;
    padding: 0;
    margin-right: 30px;
}
.legend-img{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.legend-text{
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    color: var(--primary-text-color);
}

@media screen and (max-width: 600px) {
    .legend-list{
        flex-direction: column;
        align-items: flex-start;
    }
    .legend-item{
        margin-right: 0px;
        margin-bottom: 8px;
    }
}
</style>