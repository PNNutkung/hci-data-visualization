<template lang="html">
  <div id="about">
    <md-card>
      <md-card-header>
        <div class="md-title">Members</div>
      </md-card-header>

      <md-card-content>
        <span v-for="member in members">
          <span class="md-title">{{ member.studentId }}</span>
          <span class="md-headline">{{ member.name }}</span>
          </br>
        </span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [
        {
          studentId: '5710546372',
          name: 'Pipatpol Tanavongchinda'
        },
        {
          studentId: '5710546381',
          name: 'Pakpon Jetapai'
        },
        {
          studentId: '5710547182',
          name: 'Thanawit Gerdprasert'
        }
      ]
    }
  }
}
</script>

<style lang="css">
#about {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
