<template>
  <nav class="header">
    <span class="title-logo">Calculadora Bitcoin</span>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-logo{
    font-size: 2em;
    margin-top: 2%;
    margin-left: 2%;
  }

  .header {
    width: 100%;
    overflow: hidden;
    background-color: white;
  }
</style>
