<template>
  <div class="start-main">
    <div class="container">
      <div class="start-main__hero">
        <img src="@/assets/img/earth.png" alt="" class="start-main__bg-image">
        <div class="start-main__content">
          <h1 class="primary-text-color start-main__title">Hello, my Friend!</h1>
          <p class="primary-text-color start-main__subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button class="primary-text-color" :text="'Start Now'" :width="193"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/UIKit/Button.vue'
export default {
  components:{
    Button
  }
}
</script>

<style scoped>
.start-main{
  background-color: var(--background-start-color);
  position: relative;
}
.start-main__hero{
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.start-main__bg-image{
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  height: 97%;
}
.start-main__content{
  padding-left: 80px;
  max-width: 580px;
  z-index: 2;
}
.start-main__title{
  margin: 0;
  font-weight: 600;
  font-size: 44px;
  line-height: 120%;
  margin-bottom: 40px;
}
.start-main__subtitle{
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  margin-bottom: 40px;
}
</style>