<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.png')"
          transition="moveInandOut"
          width="400"
        />

        <!--v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /-->
      </div>
       <div>
         <v-dialog
          v-model="dialog"
          width="500"
          >
          <template v-slot:activator="{ on }">
            <v-container>
              <v-layout row wrap>
                <v-flex>
          <v-btn color="#a4f9ef7F" mode="out-in" appear v-on="on"> Get a Quote </v-btn> 
          </v-flex><v-flex>
          <div>or Call Us on <v-icon>mdi-phone</v-icon> <b>073 554 6724</b></div>
            </v-flex>
            </v-layout>

          </v-container>
          </template>
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
             Fill in your information
            </v-card-title>

            <v-card-text>
             <v-container>
              <form @submit.prevent="onQuoteRequest">            
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                    label="Name"
                    v-model="form.name">

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                    label="Email"
                    v-model="form.email">

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                    label="PhoneNumber"
                    v-model="form.phonenumber">
                    </v-text-field>
                <v-layout row wrap>
                  <v-flex>
                    <v-textarea
                    label="Message"
                    v-model="form.message">

                    </v-textarea>
                  </v-flex>
                </v-layout>  
                <v-layout row wrap>
                  <v-flex>
                    <v-btn
                    type="submit">
                    I need your services
                    </v-btn>
                  </v-flex>
                </v-layout>  
                  </v-flex>
                </v-layout>
              </form>
              </v-container>  
              </v-card-text>
          </v-card>
          </v-dialog>
        </div>
      <v-spacer></v-spacer>

      <v-btn
        text
        v-for="menuItem in menuItems"
        :key="menuItem.title"
        :to="menuItem.link"
      >
        <span class="mr-2">{{menuItem.title}}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
          <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
const querystring = require("querystring")

export default {
  name: 'App',

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    menuItems: [
      { title: 'home', link: '/', icon: 'mdi-home' },
      { title: 'about us', link: '/about', icon: 'mdi-anchor' },
      { title: 'product & services', link: '/products', icon: 'mdi-watch' },
      { title: 'contact', link: '/contacts', icon: 'mdi-tilde' }
    ],
    dialog:false,
    sent: false,
    form: {
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    }
    //

  }),
  methods: {
    onQuoteRequest() {
      this.dialog = false
      window.console.log('The following was submitted :', this.form.name, this.form.email, this.form.phonenumber, this.form.message)
      // send this to mymai23.php
      window.console.log('axios undefined', this.$axios)
      this.$axios.post('http://thedstvinstaller.co.za/mymai23.php', querystring.stringify(this.form))
        .then(res => {
          this.sent = true
          window.console.log('sent Boyz Zakithi', res)

        })
    }
  }
}
</script>
<style>
.moveInandOut-enter-active .moveInandOut-leave-to-active {
  transition: all 1s;
}
.getAQuoteAPPBar{
  background-color: #000000;
}  
.fade-enter{
        opacity: 0;
    }
  .fade-enter-active{
      transition: opacity 1s;
  }
  .fade-leave{
      /* opacity: 1; */
  }
  .fade-leave-active{
      transition: opacity 1s;
      opacity: 0;
  }
 


</style>
