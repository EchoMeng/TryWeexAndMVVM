<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
    <bottom-bar @tabTo='onTabTo'></bottom-bar>
  </div>
</template>
<style>
</style>
<script>
import bottombar from './components/bottombar.vue'
export default {
  components: {
    'bottom-bar': bottombar
  },
  methods: {
    onTabTo (_result) {
      let _key = _result.data.key || ''
      this.$router && this.$router.push('/' + _key)
    }
  }
}
</script>
