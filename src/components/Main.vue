<template>
  <div class="main">
    <h1>{{ msg }}</h1>
      <gmap-map :center="center" :zoom="7" style="width: 500px; height: 300px">
        <!--<gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>-->
      </gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBErs3fDyQiX7Lmc4gy1UaLOhW3tU3xyjU',
    v: '3.24',
    libraries: 'places'
  }
})

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
</style>
