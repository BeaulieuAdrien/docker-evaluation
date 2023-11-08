<template>
    <main>
        <VehiculeList :vehicules="vehicules" />
    </main>
</template>

<script>

import ListVehicule from '../components/ListVehicule.vue'
import axiosInstance from '../plugin/axios.js'

export default {
    components: {ListVehicule},
    data() {
        return {
            vehicules: []
        }
    },
    created() {
        this.fetchVehicules();
    },
    methods: {
        fetchVehicules() {
            axiosInstance.get('/vehicules')
            .then((result) => {
                this.vehicules = result;
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}

</script>