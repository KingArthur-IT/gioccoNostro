<template>
  <div class="start-main">
    <div class="container">
      <div class="start-main__hero">
        <img src="@/assets/img/earth.png" class="start-main__bg-image">
        <div class="start-main__content">
          <h1 class="primary-text-color start-main__title">A POSTERIORI: ABDUCET PRAEDAM, QUI ACCURRIT PRIOR</h1>
          <p class="primary-text-color start-main__subtitle">
            
          </p>
          <div class="start-main__btn">
            <CustomButton :text="'Start Now'" @click="startEvent"/>
          </div>
        </div>
        <img src="@/assets/img/laptop.png" class="start-main__laptop">
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue'
import { useRouter } from 'vue-router'

export default {
  components:{
    CustomButton
  },
  setup(){
    const router = useRouter()
    const startEvent = () => {
      router.push({name: 'signIn'})
    }

    return { startEvent }
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
.start-main__content{
  padding-left: 80px;
  max-width: 580px;
  z-index: 2;
}
.start-main__laptop{
  position: absolute;
  right: 0;
  max-width: 800px;
}
.start-main__title{
  margin: 0;
  font-weight: 600;
  font-size: 44px;
  line-height: 120%;
  margin-bottom: 40px;
}
.start-main__subtitle{
  display: none;
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  margin-bottom: 40px;
}
.start-main__btn{
  width: 193px;
}
.start-main__bg-image{
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  height: 97%;
}

@media screen and (max-width: 1260px) {
  .start-main{
    overflow: hidden;
  }
  .start-main__laptop{
    right: auto;
    left: 500px;
  }
}

@media screen and (max-width: 1020px) {
  .start-main__content{
    padding-left: 60px;
  }
  .start-main__laptop{
    left: 475px;
  }
}

@media screen and (max-width: 860px) {
  .start-main__content{
    padding-left: 40px;
  }
  .start-main__title{
    font-size: 36px;
    width: 80%;
  }
  .start-main__laptop{
    left: 370px;
  }
}

@media screen and (max-width: 600px) {
  .start-main__hero{
    flex-direction: column-reverse;
  }
  .start-main__laptop{
    position: relative;
    width: 100vw;
    left: 50px;
    margin-top: 120px;
    margin-bottom: 60px;
  }
  .start-main__content{
    margin-bottom: 150px;
  }
  .start-main__bg-image{
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 525px) {
  .start-main__content{
    padding-left: 20px;
  }
  .start-main__title{
    font-size: 32px;
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .start-main__bg-image{
    width: 110%;
  }
  .start-main__title{
    font-size: 28px;
    width: 90%;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 425px) {
  .start-main__title{
    font-size: 24px;
  }
  .start-main__laptop{
    margin-top: 110px;
  }
}

@media screen and (max-width: 370px) {
  .start-main__laptop{
    margin-top: 100px;
  }
}
</style>