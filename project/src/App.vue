<template>
  <v-app>
    <v-container>
              <v-toolbar dense>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>instagram</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
    </v-container>

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


export default {

};
</script>
