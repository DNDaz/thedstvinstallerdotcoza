<template>
  <v-container>
    <v-layout row wrap mb-0>
      <v-flex xs12 mt-0>
         <v-card
        width="100%"
        mt-0
        >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">Contact Us For Your Peace of Mind </v-list-item-title>
           
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://www.callcentrehelper.com/images/stories/2010/03/outbound-contact-centre-760.jpg"
          height="194"
        ></v-img>

        <v-card-text>
          Please complete the form below and a representative will call you shortly
        </v-card-text>

    <v-card-actions>
    <v-spacer></v-spacer>
    <v-dialog
    v-model="dialog"
    width="500">
    <template v-slot:activator="{on}">
      <v-btn
        text
        style="background-color:blue"
       dark
       v-on="on"
      >
        Quote Me Today
      </v-btn>
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
              <form @submit.prevent="onContactQuoteRequest">            
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                    label="Name">

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                    label="Email">

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                    label="PhoneNumber">
                    </v-text-field>
                <v-layout row wrap>
                  <v-flex>
                    <v-textarea
                    label="Message">

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
    </v-card-actions>
      </v-card>
      </v-flex>
       
    </v-layout>
    <v-layout row wrap>
        <v-flex xs12 md6>
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="phonenumber"
                :error-messages="phoneNumberErrors"
                label="Phonenumber"
                required
                @input="$v.phonenumber.$touch()"
                @blur="$v.phonenumber.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="phonenumber"
                :error-messages="phoneNumberErrors"
                label="Suburb"
                required
                @input="$v.phonenumber.$touch()"
                @blur="$v.phonenumber.$touch()"
              ></v-text-field>
              <v-textarea
                v-model="phonenumber"
                :error-messages="phoneNumberErrors"
                label="Message"
                required
                @input="$v.phonenumber.$touch()"
                @blur="$v.phonenumber.$touch()"
              ></v-textarea>

              <v-btn class="mr-4" @click="submit" style="background-color:blue"
       dark>I Need Your Services</v-btn>
            </form>
          </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      dialog:false
    }
  },
  methods: {
    onContactQuoteRequest () {
      this.dialog = false
    }
  }
}
</script>