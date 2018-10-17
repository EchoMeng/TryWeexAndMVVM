<template>
    <div class="wrapper">
        <navbar></navbar>
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
  }
}
</script>
