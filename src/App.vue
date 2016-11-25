<template>
  <div id="app" class="mdl-layout mdl-js-layout">
    <menuHeader></menuHeader>
    <main class="mdl-layout__content">
      <SectionBody></SectionBody>
    </main>
  </div>
</template>

<script>
import MenuHeader from './components/header/MenuHeader'
import SectionBody from './components/SectionBody'
export default {
  name: 'app',
  components: {
    MenuHeader,
    SectionBody
  }
}
</script>

<style>
</style>
