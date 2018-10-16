<template>
    <div class="wrapper">
        <navbar 
        :dataRole= "dataRole"
        :background-color= "black"
        :height= "height"
        ></navbar>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: pink;
}
</style>

<script>
export default {
    components: {
        navbar: require('../../components/navbar.vue')
    },
}
</script>

