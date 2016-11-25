<template lang="html">
  <header id="menu-header" class="mdl-layout__header mdl-layout__header--scroll">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">{{ title }}</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation" v-for="page in pages">
          <a href="#"> <router-link to="/data">data</router-link> </a>
          <a href="#"> <router-link to="/">about</router-link> </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'menuHeader',
  data: function () {
    return {
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
