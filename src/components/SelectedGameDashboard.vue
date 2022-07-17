<template>
  <div class="game-board">
      <div class="game-board__info">
          <p v-if="gameType" class="game-board__game-type">{{gameType}}x{{gameType}}</p>
          <p v-if="gamePrice > 0" class="game-board__game-price">€{{gamePrice}}</p>
      </div>
      <div v-if="gameId > 0" class="game-board__id">
          <IdLabel :id="gameId"/>
      </div>
      <div class="game-board__legend">
          <BoardLegend />
      </div>
      <div class="game-board__hero">
          <GamesView :level="gameType === '' ? 0 : gameType"/>        
      </div>
  </div>
</template>

<script>
import IdLabel from '@/components/UIKit/IdLabelDashboard.vue'
import BoardLegend from '@/components/BoardLegend.vue'
import GamesView from '@/components/GamesView.vue'

export default {
    components: {
        IdLabel, BoardLegend, GamesView
    },
    props:{
        gameType:{
            type: Number,
            default: 0
        },
        gamePrice:{
            type: Number,
            default: -1
        },
        gameId:{
            type: Number,
            default: -1
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
.game-board__hero{
    height: calc(100vh - 80px - 26px - 119px - 26px - 120px);
    width: calc(100vh - 80px - 26px - 119px - 26px - 120px);
    margin: auto;
    background: url('@/assets/img/games-bg.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 25px
}
.game-board__img{
    width: 100%;
}
</style>