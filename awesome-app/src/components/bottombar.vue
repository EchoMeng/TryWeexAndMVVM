<template>
  <div>
    <div class="wrapper">
      <div class="bar-item" @click="tabTo('HomeView')">
        <text class="bar-txt">首页</text>
      </div>
      <div class="bar-item" @click="tabTo('BookView')">
        <text class="bar-txt">预约</text>
      </div>
      <div class="bar-item" @click="tabTo('MeetingView')">
        <text class="bar-txt">组会</text>
      </div>
      <div class="bar-item" @click="tabTo('DutyView')">
        <text class="bar-txt">值班</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .wrapper {
    position: fixed;
    display: flex;
    bottom: 20px;
    left: 0;
    right: 0;
    height: 90px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
  }
  .bar-item {
    flex: 1;
    background-color: rebeccapurple;
  }
  .bar-active {
    color: #b4282d;
  }
  .bar-txt {
    font-size: 40px;
    padding-top: 20px;
    text-align: center;
    color: #666666;
  }
</style>

<script>
export default {
  data () {
    return {
      pIndexKey: 'HomeView',
      active: false,
      login: false
    }
  },
  methods: {
    tabTo (_key) {
      if (this.pIndexKey === _key) return
      this.pIndexKey = _key
      this.$emit('tabTo', {
        status: 'tabTo',
        data: {
          key: _key
        }
      })
    }
  }

}
</script>
