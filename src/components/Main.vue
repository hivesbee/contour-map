<template>
  <div class="main">
    <v-container fluid>
      <v-layout  row wrap>
        <v-flex xs12>
          <gmap-map ref="map" :center="center" :zoom="zoom" @center_changed="updateCenter" class="map-container">
            <gmap-marker v-for="m in markers" :key="JSON.stringify(m.position)" :position="m.position" :clickable="m.options.clickable" :draggable="m.options.draggable" @click="center=m.position"></gmap-marker>
            <gmap-circle v-for="c in circles" :key="JSON.stringify(c.position)" :center="c.position" :radius="c.radius" :options="c.options"></gmap-circle>
          </gmap-map>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="grey lighten-4 elevation-0 ma-1">
            <v-card-actions>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs5 sm10>
                    <v-text-field label="中心とする住所" id="testing" v-model="center_address"></v-text-field>
                  </v-flex>
                  <v-flex xs2 sm2>
                    <v-btn primary light @click.native="search">
                      <v-icon light left>search</v-icon>検索
                    </v-btn>
                  </v-flex>
                  <v-flex xs2 sm6>
                    <v-select
                      v-bind:items="range"
                      v-model="selectedRange"
                      label="表示範囲 (m)"
                      class="input-group"
                      item-value="number"
                      input="changeViewCircle"
                    ></v-select>
                  </v-flex>
                  <v-flex xs2 sm6>
                    <v-select
                      v-bind:items="interval"
                      v-model="selectedInterval"
                      label="間隔 (m)"
                      class="input-group"
                      item-value="number"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import config from 'config'

Vue.use(VueGoogleMaps, {
  load: {
    key: config.googleMapKey,
    libraries: ['places', 'geocoder'],
    options: {
    }
  }
})
Vue.use(Vuetify)

export default {
  name: 'main',
  components: {
    // vCard, vCardAction
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      center_address: '',
      center: {lat: 35.6811673, lng: 139.76705160000006},
      markers: [],
      zoom: 7,
      circles: [],
      range: [
        500, 1000, 2000, 3000
      ],
      interval: [
        100, 200, 300, 500, 1000
      ],
      selectedRange: 500,
      selectedInterval: 100
    }
  },
  watch: {
    selectedRange: function (newRange) {
      this.changeViewCircle()
    },
    selectedInterval: function (newInterval) {
      this.changeViewCircle()
    }
  },
  methods: {
    search: function (place) {
      let self = this
      let geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({
        'address': self.center_address,
        'region': 'jp'
      }, function (results, status) {
        console.log(results[0].geometry.location.lat() + ', ' + results[0].geometry.location.lng())
        self.center = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
        self.markers.push({
          position: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          },
          options: {
            clickable: false,
            draggable: false
          }
        })
        self.zoom = 15
        self.changeViewCircle()
        console.log(self.center)
      })
    },
    updateCenter: function (center) {
      console.log('updateCenter')
      this.zoom = 15
      this.circles[0].position = this.center
      this.circles[1].position = this.center
    },
    changeViewCircle: function () {
      this.circles = []
      for (let i = this.selectedInterval; i < this.selectedRange; i += this.selectedInterval) {
        this.circles.push({
          position: this.center,
          radius: i,
          options: {
            fillOpacity: 0.0,
            strokeWeight: 3,
            strokeColor: '#42a5f5'
          }
        })
      }
      this.circles.push({
        position: this.center,
        radius: this.selectedRange,
        options: {
          fillOpacity: 0.0,
          strokeWeight: 4,
          strokeColor: '#1E88E6'
        }
      })
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
  width: 100%;
  height: 400px;
}
</style>
