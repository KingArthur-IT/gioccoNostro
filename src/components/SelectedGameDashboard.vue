<template>
  <div class="game-board">
      <div class="game-board__info">
          <p class="game-board__game-type">{{gameType}}</p>
          <p class="game-board__game-price">${{gamePrice}}</p>
      </div>
      <div class="game-board__id">
          <IdLabel :id="gameId"/>
      </div>
      <div class="game-board__legend">
          <BoardLegend />
      </div>
  </div>
</template>

<script>
import IdLabel from '@/components/UIKit/IdLabel.vue'
import BoardLegend from '@/components/BoardLegend.vue'

export default {
    components: {
        IdLabel, BoardLegend
    },
    props:{
        gameType:{
            type: String,
            default: '4x4'
        },
        gamePrice:{
            type: Number,
            default: 100
        },
        gameId:{
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.game-board{
    width: 100%;
    position: relative;
    padding: 20px;
    height: 100%;
}
.game-board__info{
    position: absolute;
    top: 20px;
    left: 20px;
}
.game-board__game-type{
    margin: 0;
    margin-bottom: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: var(--primary-text-color);
}
.game-board__game-price{
    margin: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    color: var(--primary-text-color);
}
.game-board__id{
    position: absolute;
    right: 20px;
    top: 20px;
    width: 133px;
}
.game-board__legend{
    position: absolute;
    left: 20px;
    bottom: 0px;
}

</style>