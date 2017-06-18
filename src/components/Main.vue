<template>
  <div class="main">
    <v-container fluid>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>中心とする住所</v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-text-field name="input-1" label="中心とする住所" id="testing"></v-text-field>
        </v-flex xs4>
        <v-flex xs4>
          <v-btn primary light>検索</v-btn>
        </v-flex xs4>
      </v-layout>
      <v-layout>
        <gmap-map :center="center" :zoom="7" class="map-container"></gmap-map>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.map-container {
    width: 500px;
    height: 300px;
  }
</style>
