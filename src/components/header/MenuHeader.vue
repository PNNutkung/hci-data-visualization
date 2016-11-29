<template lang="html">
  <header id="menu-header">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{ title }}</h2>
      <router-link v-for="page in pages" :to="page.link">
        <md-button>
          {{ page.name }}
        </md-button>
      </router-link>
    </md-toolbar>
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
