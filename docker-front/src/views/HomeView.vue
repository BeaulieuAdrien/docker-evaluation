<template>
  <main>
    <ApiHelloWorld :sentence="sentence" />
  </main>
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
