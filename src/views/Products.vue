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
            <v-list-item-title class="headline">DSTV Installations </v-list-item-title>
           
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://cdn.dstv.com/dstvcms/2018/01/18/DStv_Explora2_Features_lrg.jpg"
          height="194"
        ></v-img>

        <v-card-text>
          Multichoice Accredited Technicians
        </v-card-text>
We are Our Multichoice Accredited technicians install all types of DSTV systems that cater for your exact needs. We supply top of the range durable products that have been tried and tested over the years. Our technicians and salesman will be able to directly satisfy all your DSTV preferences and ensure that you receive the best entertainment for your money. Our technicians are highly qualified and will guarantee perfect workmanship and same day service as we strive to keep all our customers happy.

    <v-card-actions>
    <v-spacer></v-spacer>
    <v-dialog
    v-model="dialog"
    width="500" 
    >
      <template v-slot:activator="{on}"> 
        <v-btn
            v-on="on"
            text
            style="background-color:blue"
        dark
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
              <form @submit.prevent="onQuoteRequest">            
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
   <v-layout row wrap mt-5>
      <v-flex xs12 mt-0>
         <v-card
        width="100%"
        mt-0
        >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline"> Perfect Home Cinema Setup </v-list-item-title>
           
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://homelyau.wpengine.com/wp-content/uploads/2018/09/iStock_000017988219Small-741x486.jpg"
          height="194"
        ></v-img>

        <v-card-text>
            Need help setting up the perfect home cinema?

        </v-card-text>
There’s nothing quite like getting together with friends, grabbing some freshly made popcorn, lounging in a comfy armchair and taking in a film on the big screen. The only thing that could possibly improve this experience is having all of this in the convenience and comfort of your own home.

Just screening your favourite film on a whim, pausing the picture whenever you like, and best of all never having to queue up for snacks or expensive tickets again. If this sounds like a dream come true read on to find out how to bring the magic of the big screen into your home.      
            <v-spacer></v-spacer>
            <v-dialog
            v-model="perfectCinema"
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
              <form @submit.prevent="onCinemaQuoteRequest">            
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
        </v-card>
      </v-flex>
       
    </v-layout>
   
  </v-container>
</template>
<script>
export default {
    data () {
        return {
            dialog: false,
            perfectCinema: false
        }
    },
    methods: {
        onQuoteRequest() {
        this.dialog = false
        },
        onCinemaQuoteRequest() {
            this.perfectCinema = false
        }
    }
}
</script>

