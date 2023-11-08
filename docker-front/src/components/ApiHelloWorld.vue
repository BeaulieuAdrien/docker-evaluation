<template>
    <h1>{{ sentence }}</h1>
</template>

<script>

export default {
    props: {
        sentence: { type: String, required: true }
    }
}

</script>