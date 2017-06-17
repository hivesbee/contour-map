<template>
  <div class="map">
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
        <v-flex xs12>
          <div class="map-container">
            <gmap-map :center="{lat:1.38, lng:103.8}" :zoom="12">
            </gmap-map>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAzQcDG4ZUVXIDirbDaw853OaS4seLakOc'
  }
})

export default {
  name: 'map',
  data () {
    return {
      message: 'テスト文字列'
    }
  },
  components: {
    'googleMap': VueGoogleMaps.Map,
    'MapMarker': VueGoogleMaps.Marker
  }
}
</script>

<style scoped>
  .map-container {
    width: 500px;
    height: 300px;
  }
</style>
