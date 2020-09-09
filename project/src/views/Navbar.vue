<template>
    <v-container>
                <v-toolbar dense>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>instagram</v-toolbar-title>

                <v-spacer></v-spacer>

                <router-link class="pointer icon" tag="span" to="/feed">
                    <v-icon>mdi-home</v-icon>
                </router-link>

                <v-btn icon>
                    <v-icon>mdi-send</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <router-link tag="span" class="pointer" to="/user">
                    <v-avatar size="30">
                    <img src="https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG" alt="">
                    </v-avatar>
                </router-link>
                </v-toolbar>
    </v-container>
</template>

<script>

export default {
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
