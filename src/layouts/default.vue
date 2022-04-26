<template>
  <header class="header">
      <p class="header__title">
        <router-link to="/" class="primary-text-color header__logo">
            Giocco Nostro
        </router-link>
      </p>
  </header>
  <router-view/>
</template>

<script>

</script>

<style scoped>
.header{
    background-color: var(--background-color);
    max-width: 1440px;
    margin: auto;
    padding: 51px 80px;
}
.header__title{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 117%;
    margin: 0;
}
.header__logo{
    text-decoration: none;
}
</style>
