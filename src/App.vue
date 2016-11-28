<template>
  <div id="app" class="mdl-layout mdl-js-layout">
    <menuHeader></menuHeader>
    <main class="mdl-layout__content">
      <ContentSection></ContentSection>
    </main>
  </div>
</template>

<script>
import MenuHeader from './components/header/MenuHeader'
import ContentSection from './components/contents/ContentSection'

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
