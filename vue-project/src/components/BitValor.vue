<template>
  <div class="card card-item">
    <div class="title-card">
      <span>BitValor - Consolidado 12h Horas</span>
    </div>
    <table class="">
      <tr>
        <th>Empresas</th>
        <th>Volume</th>
        <th>Last Trade</th>
      </tr>
      <tr>
        <td>Foxbit</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>MBTC</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Bitcointoyou</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Negociecoins</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>flowBTC</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BitValor',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.card-content {
  position: relative;
}

.card {
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
}

.card-item {
  float: left;
  margin: 0 1.5% 2%;
  overflow: auto;
  width: 45%;
}

.title-card {
  background: #673AB7;
}

.title-card span {
  color: #FFFFFF;
  font-size: 1.5em;
  margin-left: 1%;
  vertical-align: bottom;
  position: relative;
  top: 28%;
  left: 0;
}

.title-card span a {
  color: #FFFFFF;
  font-size: 1em;
  margin-top: 5%;
  margin-left: 1%;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 0;
}

.card-index {
  display: block-inline;
  float: left;
  margin-bottom: 1%;
  margin-left: 1%;
}

.card-index-right {
  display: block-inline;
  float: right;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 22.5%;
}
</style>