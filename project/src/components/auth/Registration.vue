<template>
  <v-app>
    <v-container>
      <v-row class="align-center mt-16" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-toolbar class="gradient" flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text></v-card-text>
          <v-form
          ref="registrationForm"
          v-model="valid"
          validation>
            <v-text-field
            v-model="email"
            label="Email"
            name="email"
            :rules="mailRules"

            ></v-text-field>
            <v-text-field
            v-model="password"
            label="password"
            name="password"


            :rules="passwordRules"></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              name="confirmPasswordRules"
              label="confirm password"



              :rules="confirmPasswordRules"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :loading="loading"
                :disabled="!valid || loading"
                @click="onSubmit"
                color="#5851db"
              >submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
      password: "",
      email: "",
      confirmPassword: "",

      mailRules: [
        (v) => !!v || "E-mail не может быть пустым",
        (v) => /.+@.+\..+/.test(v) || "некорректный E-mail",
      ],
      passwordRules: [
        (v) => !!v || "Password не может быть пустым",
        (v) =>
        (v && v.length >= 6) || "Password не может быть меньше 6 символов",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Password is required",
        (v) => v === this.password || "Password should match",
      ],
    };
  },
  computed:{
      loading(){
          return this.$store.getters.loading
      }
  },
  methods:{
      onSubmit(){
        if ( this.$refs.registrationForm.validate() ) {
            let user = {
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch('registerUser', user)
            .then(()=>{ this.$router.push('/')})
            .catch(err => console.log(err))
      }
      }
  }
};
</script>

<style>
</style>