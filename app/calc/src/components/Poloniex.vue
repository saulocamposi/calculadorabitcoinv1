<template>

<div id="div1" class="card card-item" ondrop="drop(event)" ondragover="allowDrop(event)">
  <div class="title-card">
    <span>Poloniex</span>
  </div>

  <table class="">
    <tr>
      <th>
        Moeda
      </th>
      <!-- XXX:
      <th>
        Conversão
      </th>-->
      <th>
        Volume
      </th>
      <th>
        LastTrade
      </th>
      <th>
        Preço
      </th>
    </tr>
    <tr>
      <td>
        {{lite.currency}}
      </td>
      <!-- XXX:  <td>
        {{lite.label}}
      </td>-->

      <td>
        {{lite.volume}}
      </td>
      <td>
        {{lite.lastrader}}
      </td>
      <td>
        {{lite.price}}
      </td>
    </tr>
    <tr>
      <td>
        {{doge.currency}}
      </td>
      <!-- XXX:  <td>
        {{doge.label}}
      </td>-->

      <td>
        {{doge.volume}}
      </td>
      <td>
        {{doge.lastrader}}
      </td>
      <td>
        {{doge.price}}
      </td>
    </tr>
    <tr>
      <td>
        {{ether.currency}}
      </td>
      <!-- XXX:  <td>
        {{ether.label}}
      </td>-->
      <td>
        {{ether.volume}}
      </td>
      <td>
        {{ether.lastrader}}
      </td>
      <td>
        {{ether.price}}
      </td>
    </tr>
    <tr>
      <td>
        {{dash.currency}}
      </td>
      <!-- XXX:  <td>
        {{dash.label}}
      </td>-->

      <td>
        {{dash.volume}}
      </td>
      <td>
        {{dash.lastrader}}
      </td>
      <td>
        {{dash.price}}
      </td>
    </tr>
  </table>
</div>

</template>

<script>
export default {
  name: 'Poloniex',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-content{
  position: relative;
}

.card{
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
}

.card-item{
  float: left;
  margin: 0 1.5% 2%;
  overflow: auto;
  width: 45%;
}

.title-card{
  background: #673AB7;
}

.title-card span{
  color: #FFFFFF;
  font-size: 1.5em;
  margin-left: 1%;
  vertical-align: bottom;
  position: relative;
  top: 28%;
  left: 0;
}

.title-card span a{
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
