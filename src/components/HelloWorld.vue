<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex
      xs12
      mb-5>
        <v-carousel :show-arrows="true" :cycle="true">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          > <v-btn rounded color="primary" class="mb-12 marginbottom">
          <transition name="fade"> 
            <v-icon class="mr-4 animate" >{{item.icon}} </v-icon>
          </transition>  
            <v-spacer></v-spacer>
            {{item.buttonText}}
          </v-btn>
          
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 md6 mb-4>
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

          <v-btn class="mr-4" @click="submit">submit</v-btn>
        </form>
      </v-flex>
      <v-flex
        mb-5
        xs12
        md6
      >
        <h2 class="headline font-weight-bold mb-3">CONTACT US TODAY!</h2>

        <v-layout justify-center>
          Why spend time searching for quotes on expert DSTV installation and repair services! Get a quote here in 2 minutes!
Our team of expert technicians are available  24 Hours 7 days a week, 365 days a year to attend to ALL of your DSTV requirements promptly and competently!
Whatever your DSTV requirement, we will sort it out - the first time around, and fast!
                CONTACT US TODAY!
        </v-layout>
      </v-flex>

     
      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">DSTV Installations and Repairs</h2>
        <v-layout justify-center>
          <v-card
            class="mx-auto"
          >
          <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import imageOne from '../assets/Slide_1.jpg'
import imageTwo from '../assets/Slide_2.jpg'
import imageThree from '../assets/Slide_3.jpg'


export default {
  
  name: 'HelloWorld',
  

  data: () => ({
    cards: [
      { title: 'Let Our Explora Connection enhance you', src: 'https://i.pinimg.com/originals/79/59/4b/79594babb3e604b9fee2e8977f430be3.jpg', flex: 12 },
      { title: 'Favorite sound!!, Great connections', src: 'http://cdn.home-designing.com/wp-content/uploads/2018/04/designer-lamps.jpg', flex: 6 },
      { title: 'Best TV Viewing', src: 'https://cdn.trendir.com/wp-content/uploads/2016/07/HI-MACS-House-by-Karl-Dreer-and-Bemb%C3%A9-Dellinger-Architects-900x599.jpg', flex: 6 }
    ],
    items: [
      {
        src: imageOne,
        buttonText: 'Need!! DSTV Installations ?',
        icon:'mdi-phone-in-talk'
      },
      {
        src: imageTwo,
        buttonText: 'Need!! Sound and Home Theatre Connections ?',
        icon:'mdi-phone-in-talk'
      },
      {
        src: imageThree,
        buttonText: 'Home Theatre Connections ?',
        icon:'mdi-phone-in-talk'
      }
    ],
    doShow: false,
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  }),
  computed: { 
    imageReturn () {
      return 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    }
  }
}

</script>
<style>
.welcomeAndGo-enter-active, .welcomeAndGo-leave-active {
    animation:  2000ms linear 2000ms infinite;
}

.welcomeAndGo-enter, .welcomeAndGo-leave-to {
  transform: scale(0);
}{

}
.marginbottom {
  margin-bottom:50px;
  bottom: -370px;
}
.animate{
   position: relative;
   width: 38px;
   height: 38px;
   cursor: pointer;
   -webkit-transition: .3s;
       transition: .3s;
   display: inline-block;
}
.animate:before {
   top: -8px;
   left: 0;
}
.animate:after {
   top: 8px;
   left: 0;
}
.moveInandOut {
  animation-duration: 0.3s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
