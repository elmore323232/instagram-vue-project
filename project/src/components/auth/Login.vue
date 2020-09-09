<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar class="gradient"  flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="email"
                :rules="mailRules"
                v-model="email"
              ></v-text-field>

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :loading="loading" :disabled="!valid || loading" @click="onSubmit" color="#5851db">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        data(){
            return{
                valid: null,
                password: '',
                email:'',

                mailRules:[
                    (v) => !!v || "E-mail не может быть пустым",
                    (v) => /.+@.+\..+/.test(v) || "некорректный E-mail",
                ],
                passwordRules:[
                    (v) => !!v || "Password не может быть пустым",
                    (v) => (v && v.length >= 6) || "Password не может быть меньше 6 символов",

                ],
            }
        },
        methods:{
            onSubmit(){
                if ( this.$refs.form.validate() ) {
                    const user = {
                        email: this.email,
                        password: this.password,
                    }
                    this.$store.dispatch('loginUser',user)
                    .then(()=>{this.$router.push('/')})
                    .catch((err) => console.log(err));
                    

                }
            }
        }
        
    }
</script>

<style>

.gradient{
    background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    }

</style>