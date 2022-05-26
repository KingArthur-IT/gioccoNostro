<template>
  <div class="screen">
    <div class="screen-center">
      <BoardItem :color="level === 5 ? 'red' : 'blue'" :glowSize="10"/>
    </div>

    <div class="second-rind-1">
      <BoardItem :color="level === 4 ? 'red' : 'green'" :glowSize="5"/>
    </div>
    <div class="second-rind-2">
      <BoardItem :color="'green'" :glowSize="5"/>
    </div>
    <div class="second-rind-3">
      <BoardItem :color="'green'" :glowSize="5"/>
    </div>

    <div class="third-rind-1">
      <BoardItem :color="level === 3 ? 'red' : 'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-2">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-3">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-4">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-5">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-6">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-7">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-8">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <div class="third-rind-9">
      <BoardItem :color="'yellow'" :glowSize="3"/>
    </div>
    <!--
      <img src="@/assets/img/dashboard-3x3.svg" alt="" class="screen__img">
    
    -->
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
      type: Number
    }
  }
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

.second-rind-1{
  width: 20%;
  height: 20%;
  position: absolute;
  top: calc(50% - 120px * 0.26);
  left: calc(50% + 120px * 0.966);
  transform: translate(-50%, -50%);
}
.second-rind-2{
  width: 20%;
  height: 20%;
  position: absolute;
  top: calc(50% - 120px * 0.707);
  left: calc(50% - 120px * 0.707);
  transform: translate(-50%, -50%);
}
.second-rind-3{
  width: 20%;
  height: 20%;
  position: absolute;
  top: calc(50% + 120px * 0.966);
  left: calc(50% - 120px * 0.259);
  transform: translate(-50%, -50%);
}

.third-rind-1{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% - 205px * 0.174);
  left: calc(50% + 205px * 0.989);
  transform: translate(-50%, -50%);
}
.third-rind-2{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% - 205px * 0.776);
  left: calc(50% + 205px * 0.643);
  transform: translate(-50%, -50%);
}
.third-rind-3{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% - 205px * 1.);
  left: calc(50% + 205px * 0.0);
  transform: translate(-50%, -50%);
}
.third-rind-4{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% - 205px * 0.766);
  left: calc(50% - 205px * 0.644);
  transform: translate(-50%, -50%);
}
.third-rind-5{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% - 205px * 0.174);
  left: calc(50% - 205px * 0.985);
  transform: translate(-50%, -50%);
}
.third-rind-6{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% + 205px * 0.5);
  left: calc(50% - 205px * 0.866);
  transform: translate(-50%, -50%);
}
.third-rind-7{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% + 205px * 0.94);
  left: calc(50% - 205px * 0.342);
  transform: translate(-50%, -50%);
}
.third-rind-8{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% + 205px * 0.94);
  left: calc(50% + 205px * 0.342);
  transform: translate(-50%, -50%);
}
.third-rind-9{
  width: 15%;
  height: 15%;
  position: absolute;
  top: calc(50% + 205px * 0.5);
  left: calc(50% + 205px * 0.866);
  transform: translate(-50%, -50%);
}
</style>