<template>
  <v-app>
      <v-container>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            
            <v-card
              dark
              class="mt-4"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="user.userName"
                  ></v-card-title>

                  <v-card-subtitle v-text="user.userDescription"></v-card-subtitle>

                  <v-btn class="ml-3" color="warning">Edit</v-btn>
                  <v-btn class="ml-3" color="primary">Settings</v-btn>
                </div>

                <v-avatar
                  class="ma-3"
                  size="150"
                >
                  <v-img src="https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>

       <v-container>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-row>
                        <v-col
                        v-for="(images, i) in user.userImages"
                        :key="i"
                        class="d-flex child-flex"
                        cols="4"
                        >
                        <v-card flat tile class="d-flex">
                            <v-img
                            :src="user.userImages[i].src"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            >
                            </v-img>
                        </v-card>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  }
};
</script>

<style>

</style>
