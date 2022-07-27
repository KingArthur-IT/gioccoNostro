<template>
  <div class="item">
      <img  :src="'/src/assets/img/' + color + '-sphere.png'" :alt="color"
            :class="['item-img', {'free': !isPainted}]"
            :style="`filter: drop-shadow(0px 0px ${glowSize}px ${itemColor})`"
      >
  </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'yellow'
        },
        glowSize: {
            type: Number,
            default: 7
        },
      isPainted: {
          type: Boolean,
        default: true
      }
    },
    computed:{
        itemColor: function(){
            if (this.color === 'yellow') return '#FACB22';
            if (this.color === 'blue') return '#246CF9';
            if (this.color === 'red') return '#FA2256';
            if (this.color === 'green') return '#22FA86';
            return '#FACB22'
        },
    }
}
</script>

<style scoped>
.free {
  opacity: 0.2;
}
.item{
    width: 100%;
}
.item-img{
    width: 100%;
}
</style>