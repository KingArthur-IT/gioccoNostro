<template>
  <main class="main">
   <Sidebar />
    <div class="hero">
      <PesonalAreaHead />
      <router-view/>
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import PesonalAreaHead from '@/components/PesonalAreaHead.vue'

export default{
  components:{
    Sidebar,
    PesonalAreaHead
  }
}

</script>

<style scoped>
.main{
    padding: var(--offset);
    display: flex;
    background-color: var(--background-color);
    height: 100vh;
}
.hero{
    width: 100%;
    margin-left: var(--offset);
}
</style>
