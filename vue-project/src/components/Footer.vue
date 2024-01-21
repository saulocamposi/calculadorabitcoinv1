<template>
  <div class="bg-blue footer">
  <p>Esta página é desenvolvida por Saulo Campos</p>
  <p> Repositório : 
  <a href="https://github.com/saulocamposi/calculadorabitcoin">
  Repository
  </a>  
  </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
  clear: both;
  padding: 0 15px;
}
</style>
