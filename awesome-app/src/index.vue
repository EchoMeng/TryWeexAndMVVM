<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
    <bottom-bar @tabTo="onTabTo"></bottom-bar>
  </div>
</template>
<style>
    body{
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color:#333;
    }
</style>
// 在style标签上添加scoped属性，以表示它的样式作用于当下的模块
<style scoped>
  .app-wrapper{
    background-color: #f4f4f4;
  }
  .r-box{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background-color: red; */
  }
</style>
<script>
import HomeViewVue from './views/HomeView.vue';
import bottombarVue from './components/bottombar.vue';
export default {
  components: {
    'bottom-bar': bottombarVue,
    'HomeView': HomeViewVue
  },
  methods: {
    onTabTo (_result) {
      let _key = _result.data.key || ''
      this.$router && this.$router.push({path: '/' + _key})
    }
  }
}
</script>
