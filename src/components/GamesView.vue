<template>
  <div class="screen" :class="{'fifth': level === 5}" v-if="viewReady" >
    <div v-if="level" class="screen-center">
      <BoardItem :color="ColorL1" :glowSize="10" :isPainted="true"/>
    </div>

    <div v-for="i in level" :key="i"
         class="second-level"
         :style="`top: calc(50% - ${topPos(i, 2)}px); left: calc(50% + ${leftPos(i, 2)}px)`"
    >
      <BoardItem :color="ColorL2" :glowSize="5"
                 :data-level="currentGameData.tree[0][i-1].level"
                 :data-parent="currentGameData.tree[0][i-1].parent_item"
                 :data-id="currentGameData.tree[0][i-1].id"
                 :isPainted="currentGameData.tree[0][i-1].value"/>
    </div>

    <div v-for="i in level*level" :key="i"
         class="third-level"
         :style="`top: calc(50% - ${topPos(i, 3) }px); left: calc(50% + ${leftPos(i, 3) }px)`"
    >
      <BoardItem :color="ColorL3"
                 :data-level="currentGameData.tree[1][i-1].level"
                 :data-parent="currentGameData.tree[1][i-1].parent_item"
                 :data-id="currentGameData.tree[1][i-1].id"
                 glowSize="5" :isPainted="currentGameData.tree[1][i-1].value"/>
    </div>

    <div v-if="level > 3">
      <div v-for="i in level*level*level" :key="i"
           class="fourth-level"
           :style="`top: calc(50% - ${topPos(i, 4, i % 2)}px); left: calc(50% + ${leftPos(i, 4, i % 2)}px)`"
      >
        <BoardItem :color="ColorL4"
                   :data-level="currentGameData.tree[2][i-1].level"
                   :data-parent="currentGameData.tree[2][i-1].parent_item"
                   :data-id="currentGameData.tree[2][i-1].id"
                   :glowSize="5" :isPainted="currentGameData.tree[2][i-1].value"/>
      </div>
    </div>

    <div v-if="level > 4">
      <div v-for="i in level*level*level*level" :key="i"
           class="fifth-level"
           :style="`top: calc(50% - ${topPos(i, 5, i % 5)}px); left: calc(50% + ${leftPos(i, 5, i % 5)}px)`"
      >
        <BoardItem :color="ColorL5"
                   :data-level="currentGameData.tree[3][i-1].level"
                   :data-parent="currentGameData.tree[3][i-1].parent_item"
                   :data-id="currentGameData.tree[3][i-1].id"
                   :glowSize="5" :isPainted="currentGameData.tree[3][i-1].value"/>
      </div>
    </div>

  </div>
</template>

<script>
import BoardItem from '@/components/UIKit/BoardItem.vue'
import HttpMixin from "../HttpMixin";
import { mapState } from 'vuex'

export default {
  mixins: [HttpMixin],
  components: {
    BoardItem
  },
  props: {
    gameId: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      ColorL1: 'red',
      ColorL2: 'green',
      ColorL3: 'yellow',
      ColorL4: 'orange',
      ColorL5: 'blue',
    }
  },
  computed: mapState({
    currentGameData: state => state.selectedGame,
    viewReady(state) {
      return state.gameViewReady && state.selectedGame.tree;
    },

    level(state) {
      return state.selectedGame.game_type;
    }
  }),
  methods: {
    levelRadius(lvl, step = 0) {
      const windowWidth = window.innerWidth;
      const data = [
        [130, 230],
        [110, 200, 260],
        [95, 160, 200, 250],
      ];
      // const dataMobile = [
      //   [0.20, 0.375],
      //   [0.18, 0.32, 0.42],
      //   [0.15, 0.25, 0.32, 0.38],
      // ];
      const dataMobile = [
        [70, 120],
        [65, 105, 130],
        [50, 80, 105, 125],
      ];

      let dist = 0;
      if (windowWidth > 600)
        dist = this.level === 5 && lvl === 4 ? 20 : 8; //для нескольких кругов
      else
        dist = this.level === 5 && lvl === 4 ? 8 : 4;

      if (windowWidth < 601)
        return dataMobile[this.level - 3][lvl - 2] + step * dist;
      else
        return data[this.level - 3][lvl - 2] + step * dist;
    },

    getAngleStep(lvl) {
      const angleH = this.level === 5 && lvl === 4 ? 2 : 0;
      const countInRing = Math.pow(this.level, lvl - 1);
      return (360.0 - angleH) / countInRing;
    },

    getItemAngleInRing(i, lvl, step = 0) {
      const startDegree = 45;
      const angleStep = this.getAngleStep(lvl);

      let bias = 0;
      if (lvl > 2) {
        for (let lv = 3; lv <= lvl; lv++) {
          let pAstep = this.getAngleStep(lv);
          bias += ((this.level - 1) / 2) * pAstep;
        }
      }

      const angle = (i - 1) * angleStep + startDegree - bias;
      return angle;
    },

    topPos(i, lvl, step = 0) {
      const h = this.level === 4 && lvl === 4 ? 0 : 1;
      const angle = this.getItemAngleInRing(i, lvl, step * h);
      return this.levelRadius(lvl, step * h) * Math.sin(angle * Math.PI / 180.0);
    },
    leftPos(i, lvl, step = 0) {
      const h = this.level === 4 && lvl === 4 ? 0 : 1;
      const angle = this.getItemAngleInRing(i, lvl, step * h);
      return this.levelRadius(lvl, step * h) * Math.cos(angle * Math.PI / 180.0);
    }
  }
  ,
}
</script>

<style scoped>
.screen {
  position: relative;
  height: 100%;
  width: 100%;
}

.screen__img {
  width: 100%;
  height: 100%;
}

.screen-center {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.second-level {
  width: 97px;
  height: 97px;
  position: absolute;
  transform: translate(-50%, -50%);
}

.third-level {
  position: absolute;
  width: 73px;
  height: 73px;
  transform: translate(-50%, -50%);
}

.fourth-level {
  position: absolute;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
}

.fifth-level {
  position: absolute;
  width: 7px;
  height: 7px;
  transform: translate(-50%, -50%);
}

.fifth > .second-level {
  width: 80px;
  height: 80px;
}

.fifth > .third-level {
  width: 50px;
  height: 50px;
}

.fifth .fourth-level {
  width: 18px;
  height: 18px;
}

.fifth .fifth-level {
  width: 7px;
  height: 7px;
}

@media screen and (max-width: 600px) {
  .screen-center {
    width: 90px;
    height: 90px;
  }

  .second-level {
    width: 50px;
    height: 50px;
  }

  .third-level {
    width: 26px;
    height: 26px;
  }

  .fourth-level {
    width: 10px;
    height: 10px;
  }

  .fifth-level {
    width: 4px;
    height: 4px;
  }


  .fifth > .second-level {
    width: 40px;
    height: 40px;
  }

  .fifth > .third-level {
    width: 25px;
    height: 25px;
  }

  .fifth .fourth-level {
    width: 8px;
    height: 8px;
  }

  .fifth .fifth-level {
    width: 3px;
    height: 3px;
  }
}

</style>