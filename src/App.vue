<template>
  <div id="app" class="mdl-layout mdl-js-layout">
    <menuHeader></menuHeader>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuHeader from './components/header/MenuHeader'

export default {
  name: 'app',
  components: {
    MenuHeader
  }
}
</script>

<style>
</style>
