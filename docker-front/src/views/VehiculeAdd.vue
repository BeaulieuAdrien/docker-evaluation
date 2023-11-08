<template>
  <form @submit.prevent="submitVehicule">
    <input v-model="vehicule.name" placeholder="Name">
    <input v-model="vehicule.brand" placeholder="Brand">
    <input v-model="vehicule.wheels" type="number" placeholder="Wheels">
    <button type="submit">Ajouter</button>
  </form>

  <div v-if="alert" class="alert">
    Erreur dans l'envoi
  </div>
</template>

<script>
import axiosInstance from '../plugin/axios.js';

export default {
  data() {
    return {
      vehicule: {
        name: '',
        brand: '',
        wheels: 0
      },
      alert: false,
    };
  },
  methods: {
    submitVehicule() {
      axiosInstance.post('/vehicules', this.vehicule)
        .then(response => {
            this.$router.push('/vehicules')
        })
        .catch(error => {
            this.alert = true;
            console.error(error);
        });
    }
  }
};
</script>
