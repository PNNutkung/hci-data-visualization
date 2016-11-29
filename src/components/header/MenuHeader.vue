<template lang="html">
  <div id="menu" class="page-content single-page">
    <md-whiteframe md-elevation="1" class="main-header">
      <md-toolbar>
        <div class="md-title">
          <span class="page-title">{{ title }}</span>
        </div>

        <router-link exact v-for="page in pages" :to="page.link">
          <md-button>
            {{ page.name }}
          </md-button>
        </router-link>
      </md-toolbar>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  data () {
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
  #menu {
    padding-bottom: 30px;
  }
</style>
