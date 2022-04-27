<template>
  <main class="main">
    <div class="sidebar">

    </div>
    <div class="hero">
        <div class="head">

        </div>
        <router-view/>
    </div>
  </main>
</template>

<script>

</script>

<style scoped>
.main{
    padding: 26px;
    display: flex;
    background-color: var(--background-color);
    height: 100vh;
}
.sidebar{
    background-color: var(--items-background);
    width: 250px;
    height: 100%;
    border-radius: 20px;
}
.hero{
    width: 100%;
    margin-left: 26px;
}
.head{
    background-color: var(--items-background);
    width: 100%;
    height: 80px;
    border-radius: 20px;
    padding: 25px 20px;
}
</style>
