<template>
  <v-app>
    <Navbar></Navbar>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

import Navbar from './views/Navbar'

export default {
  components: {
    Navbar,
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
