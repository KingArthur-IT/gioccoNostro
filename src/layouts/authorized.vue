<template>
  <header class="header">
      <span class="span">Authorized</span>
  </header>  
  <main>
      <router-view/>
  </main>
</template>

<script>

</script>

<style scoped>
.header{
    height: 300px;
    background-color: var(--background-color);
}
.span{
    color: #fff;
}

</style>
