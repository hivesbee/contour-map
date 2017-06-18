<template>
  <v-app id="app">
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar class="indigo" light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Contour Map</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer class="indigo">
      <span>nethive.info © 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: true,
      drawerRight: true,
      right: null,
      left: null
    }
  }
}
</script>

<style lang="stylus">
  @import './main'
  @import './roboto.css'
</style>
