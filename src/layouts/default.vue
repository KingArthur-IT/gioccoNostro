<template>
  <header class="header">
      <div class="container">
          <p class="header__title">
            <router-link to="/" class="primary-text-color header__logo">
                Giocco Nostro
            </router-link>
        <div class="head__lang secondary-text-color">
          <Select class="float-right"/>
        </div>
        </p>
      </div>
  </header>
  <main>
      <router-view/>
  </main>
</template>

<script>
import Select from '@/components/UIKit/Select.vue';
export default {
  components: {
    Select
  }
}

</script>

<style scoped>
.header{
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}
.header__title{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 117%;
    margin: 0;
    padding: 51px 80px;
}
.header__logo{
    text-decoration: none;
}

@media screen and (max-width: 1020px) {
    .header__title{
        font-size: 24px;
        padding: 42px 60px;
    }
}

@media screen and (max-width: 860px) {
    .header__title{
        font-size: 24px;
        padding: 36px 40px;
    }
}

@media screen and (max-width: 525px) {
    .header__title{
        font-size: 18px;
        padding: 26px 20px;
    }
}
@media screen and (max-width: 480px) {
    .header__title{
        font-size: 16px;
        padding: 26px 20px;
    }
}
@media screen and (max-width: 425px) {
    .header__title{
        font-size: 14px;
        padding: 26px 20px;
    }
}
</style>
