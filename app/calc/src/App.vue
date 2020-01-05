<template>
  <div id="app">
    <Header/>
    <BitValor></BitValor>
    <Exchanges/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BitValor from './components/BitValor.vue'
import Exchanges from './components/Exchanges.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    BitValor,
    Exchanges
  }
}
</script>

<style>

</style>
