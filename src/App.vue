<template>
  <div id="app" v-md-theme="'default'">
    <menuHeader></menuHeader>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuHeader from './components/header/MenuHeader'
import 'vue-material/dist/vue-material.css'

export default {
  name: 'app',
  components: {
    MenuHeader
  }
}
</script>

<style>
</style>
