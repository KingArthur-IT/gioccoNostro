<template>
  <div class="screen" :class="{'fifth': level === 5}">
    <div v-if="level" class="screen-center">
      <BoardItem :color="'red'" :glowSize="10"/>
    </div>

    <div  v-for="i in level" :key="i"
          class="second-level"
          :style="`top: calc(50% - ${topPos(i, 2)}px); left: calc(50% + ${leftPos(i, 2)}px)`"
    >
      <BoardItem :color="'green'" :glowSize="5"/>
    </div>

    <div  v-for="i in level*level" :key="i"
          class="third-level"
          :style="`top: calc(50% - ${topPos(i, 3)}px); left: calc(50% + ${leftPos(i, 3)}px)`"
    >
      <BoardItem :color="'yellow'" :glowSize="5"/>
    </div>

    <div v-if="level > 3">
      <div  v-for="i in level*level*level" :key="i"
            class="fourth-level"
            :style="`top: calc(50% - ${topPos(i, 4, i % 2)}px); left: calc(50% + ${leftPos(i, 4, i % 2)}px)`"
      >
        <BoardItem :color="'orange'" :glowSize="5"/>
      </div>
    </div>

    <div v-if="level > 4">
      <div  v-for="i in level*level*level*level" :key="i"
            class="fifth-level"
            :style="`top: calc(50% - ${topPos(i, 5, i % 5)}px); left: calc(50% + ${leftPos(i, 5, i % 5)}px)`"
      >
        <BoardItem :color="'blue'" :glowSize="5"/>
      </div>
    </div>

  </div>
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
  methods:{
    levelRadius(lvl, step = 0){
      const windowWidth = window.innerWidth;
      const data = [
        [130, 230],
        [110, 200, 260],
        [95, 160, 200, 250],
      ];
      const dataMobile = [
        [0.20, 0.375],
        [0.18, 0.32, 0.42],
        [0.15, 0.25, 0.32, 0.38],
      ];

      let dist = 0;
      if (windowWidth > 500)
        dist = this.level === 5 && lvl === 4 ? 20 : 8; //для нескольких кругов
      else 
        dist = this.level === 5 && lvl === 4 ? 8 : 4;
      
      if (windowWidth < 601)
        return dataMobile[this.level - 3][lvl - 2] * windowWidth + step * dist;
      else 
        return data[this.level - 3][lvl - 2] + step * dist;
    },
    getItemAngleInRing(i, lvl, step = 0){
      const angleH = this.level === 5 && lvl === 4 ? 2 : 0;
      const startDegree = 45 + step * 10;
      const countInRing = Math.pow(this.level, lvl - 1);
      const angleStep = (360.0 - angleH) / countInRing;

      const angle = i * angleStep + startDegree;
      return angle;
    },
    topPos(i, lvl, step = 0){
      const h = this.level === 4 && lvl === 4 ? 0 : 1;
      const angle = this.getItemAngleInRing(i, lvl, step * h);
      return this.levelRadius(lvl, step * h) * Math.sin(angle * Math.PI / 180.0);
    },
    leftPos(i, lvl, step = 0){
      const h = this.level === 4 && lvl === 4 ? 0 : 1;
      const angle = this.getItemAngleInRing(i, lvl, step * h);
      return this.levelRadius(lvl, step * h) * Math.cos(angle * Math.PI / 180.0);
    }
  },
}
</script>

<style scoped>
.screen{
  position: relative;
  height: 100%;
  width: 100%;
}
.screen__img{
  width: 100%;
  height: 100%;
}
.screen-center{
  width: 33%;
  height: 33%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.second-level{
  width: 20%;
  height: 20%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.third-level{
  position: absolute;
  width: 15%;
  height: 15%;
  transform: translate(-50%, -50%);
}

.fourth-level{
  position: absolute;
  width: 5%;
  height: 5%;
  transform: translate(-50%, -50%);
}

.fifth-level{
  position: absolute;
  width: 2.5%;
  height: 2.5%;
  transform: translate(-50%, -50%);
}

.fifth > .second-level{
  width: 15%;
  height: 15%;
}
.fifth > .third-level{
  width: 10%;
  height: 10%;
}
.fifth .fourth-level{
  width: 3%;
  height: 3%;
}
.fifth .fifth-level{
  width: 1.5%;
  height: 1.5%;
}

</style>