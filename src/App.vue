<template>
  <v-app id="app">
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar class="indigo" light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Contour Map</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <gmap-map :center="center" :zoom="7" style="width: 500px; height: 300px">
        </gmap-map>
      </v-container>
    </main>
    <v-footer class="indigo">
      <span>nethive.info © 2017</span>
    </v-footer>
  </v-app>
</template>
<!--<template>
  <div id="app">
    <gmap-map :center="center" :zoom="7" style="width: 500px; height: 300px">
    </gmap-map>
  </div>
</template>-->

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: true,
      drawerRight: true,
      right: null,
      left: null,
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

<style lang="stylus">
  @import './main'
  @import './roboto.css'
</style>
