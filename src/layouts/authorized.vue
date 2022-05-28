<template>
  <main class="main">
   <Sidebar />
    <div class="hero">
      <PesonalAreaHead />
      <div class="page-content">
        <router-view/>
      </div>
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
    min-height: 100vh;
}
.hero{
    width: 100%;
    margin-left: var(--offset);
}
.page-content{

}

@media screen and (max-width: 860px) {
  .main{
    padding: 0;
  }
  .hero{
    margin-left: 0;
  }
  .page-content{
    padding: var(--offset);
  }
}

@media screen and (max-width: 750px) {
  .hero{
    overflow-x: scroll;
  }
}
</style>
