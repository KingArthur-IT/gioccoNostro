<template>
  <div class="rules">
  <div class="container">
    <h3>{{$t('game_rules')}}</h3>
    <div class="element" v-for="(name, index) in list">
      <a :href="'/src/docs/rules/' + index + '.pdf'">
        {{name}}
      </a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      list: {
        az: 'Azərbaycan',
        de: 'Deutsche',
        en: 'English',
        gr: 'Ελληνικά',
        iv: 'עִברִית',
        nd: 'Nederlands'
      }
    }
  }
}
</script>

<style scoped>
.rules h3 {
  color: #fff;
}
.rules .element a{
  background-color: transparent;
  text-decoration-line: underline;
  color: var(--gray-text-color);
}
.rules .element {
  margin-bottom: 15px;
}

.rules .element a:hover{
  text-decoration-line: unset;
}

</style>