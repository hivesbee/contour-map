<template>
  <div class="map">
    <h1>{{ message }}</h1>
    中心とする住所
    <input type="text" />
    <button type="button">検索</button>
    <v-btn dark flat>Normal</v-btn>
  </div>
</template>


<script>
export default {
  name: 'map',
  data () {
    return {
      message: 'テスト文字列'
    }
  }
}
</script>

<style scoped>
</style>
