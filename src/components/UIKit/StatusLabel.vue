<template>
  <div class="status" :class="`${status.toLowerCase()}`">
      <span>{{status}}</span>
  </div>
</template>

<script>
export default {
    props:{
        status: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.status{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
}
.confirmed{
    background: rgba(48, 224, 161, 0.2);
}
.confirmed span{
    color: #30E0A1;
}
.output{
    background: rgba(36, 108, 249, 0.2);
}
.output span{
    color: #246CF9;
}
.mistake{
    background: rgba(250, 34, 86, 0.2);
}
.mistake span{
    color: #FA2256;
}
</style>