<template lang="html">
  <header id="menu-header" class="mdl-layout__header mdl-layout__header--scroll">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">{{ title }}</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation" v-for="page in pages">
        <router-link class="mdl-navigation__link" :to="page.link" >
          {{ page.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import VueRouter from 'vue-router'
import ContentSection from '../contents/ContentSection'
export default {
  name: 'menuHeader',
  data: function () {
    return {
      router,
      title: 'Data Visualization',
      pages: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Data',
          link: '/data'
        },
        {
          name: 'About',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
