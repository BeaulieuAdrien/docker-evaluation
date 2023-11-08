<template>
<div>
    <ul>
        <li v-for="vehicule in vehicules" :key="vehicule.name">
            {{ vehicule.name }} - {{ vehicule.brand }} - {{ vehicule.wheels }} wheels
        </li>
    </ul>
</div>
</template>

<script>

export default {
    props: {
        vehicules: { type: Object, required: true}
    }
}


</script>