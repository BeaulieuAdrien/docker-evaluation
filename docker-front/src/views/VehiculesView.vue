<template>
    <main>
        <div v-if="isEmpty" >
            <h2>Liste des vehicules</h2>
            <ListVehicule :vehicules="vehicules" />
        </div>
        <div v-else>
            <h2>Aucun véhicules enregistrés</h2>
        </div>
    </main>
    <router-link :to="{ name: 'vehicule_add' }" class="router-link">
        Ajouter un véhicule
    </router-link>

</template>

<script>

import ListVehicule from '../components/ListVehicule.vue'
import axiosInstance from '../plugin/axios.js'

export default {
    components: {ListVehicule},
    data() {
        return {
            vehicules: [],
            isEmpty: true,
        }
    },
    created() {
        this.fetchVehicules();
    },
    methods: {
        fetchVehicules() {
            axiosInstance.get('/vehicules')
            .then((result) => {
                this.vehicules = result.data;
                if (this.vehicules.lenght > 0) this.isEmpty = false;
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}

</script>