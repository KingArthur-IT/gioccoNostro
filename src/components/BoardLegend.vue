<template>
  <ul class="legend-list">
        <li class="legend-item">
            <div class="legend-img">
                <BoardItem :color="'blue'" />
            </div>
            <p class="legend-text">Capo Nostro</p>
        </li>
        <li class="legend-item">
            <div class="legend-img">
                <BoardItem :color="'green'" />
            </div>
            <p class="legend-text">Venditore</p>
        </li>
        <li class="legend-item">
            <div class="legend-img">
                <BoardItem :color="'red'" />
            </div>
            <p class="legend-text">Your position</p>
        </li>
        <li class="legend-item">
            <div class="legend-img">
                <BoardItem :color="'yellow'" />
            </div>
            <p class="legend-text">Noviziio</p>
        </li>
    </ul>
</template>

<script>
import BoardItem from '@/components/UIKit/BoardItem.vue'

export default {
    components: {
        BoardItem
    },
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
</style>