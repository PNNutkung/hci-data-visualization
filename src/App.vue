<template>
  <div id="app" v-md-theme="'default'">
    <menuHeader></menuHeader>
    <main>
      <ContentSection></ContentSection>
    </main>
  </div>
</template>

<script>
import MenuHeader from './components/header/MenuHeader'
import ContentSection from './components/contents/ContentSection'
import 'vue-material/dist/vue-material.css'

export default {
  name: 'app',
  components: {
    MenuHeader,
    ContentSection
  }
}
</script>

<style>
</style>
