<template>
  <div class="item">
      <img  v-if="color === 'blue'"
            src="@/assets/img/blue-sphere.svg" :alt="color" 
            class="item-img" 
      >
      <img  v-if="color === 'yellow'"
            src="@/assets/img/yellow-sphere.svg" :alt="color" 
            class="item-img" 
      >
      <img  v-if="color === 'red'"
            src="@/assets/img/red-sphere.svg" :alt="color" 
            class="item-img" 
            :style="`filter: drop-shadow(0px 0px ${glowSize}px ${itemColor})`"
      >
      <img  v-if="color === 'green'"
            src="@/assets/img/green-sphere.svg" :alt="color" 
            class="item-img" 
            
      >
      <img  v-if="color === 'orange'"
            src="@/assets/img/orange-sphere.svg" :alt="color" 
            class="item-img" 
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
.item{
    width: 100%;
}
.item-img{
    width: 100%;
}
</style>