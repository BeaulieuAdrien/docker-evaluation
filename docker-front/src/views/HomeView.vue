<template>
  <main>
    <ApiHelloWorld :sentence="sentence" />
  </main>

  <router-link :to="{ name: 'vehicule_list' }" class="router-link">
    Voir les véhicules
  </router-link>
  <br>
  <router-link :to="{ name: 'vehicule_add' }" class="router-link">
    Ajouter un véhicule
  </router-link>

</template>

<script>

import ApiHelloWorld from '../components/ApiHelloWorld.vue'
import axiosInstance from '../plugin/axios.js'

export default {
  components: {ApiHelloWorld},
  data(){
    return {
      sentence: ''
    }
  },
  created() {
    this.fetchHelloWorld();
  },
  methods: {
    fetchHelloWorld() {
      axiosInstance.get('/')
      .then((result) => {
        this.sentence = result.data
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}

</script>
