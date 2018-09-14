<template>
  <div>
    <div class="login" :class="{'active':active}" v-show="login">
      <div class="head">
        <text class="h2">闲鱼赚钱指南</text>
        <div class="navbar">
          <div class="title-link">
            <a href="">
              <text class="titlename">赚钱神器</text>
              <text class="tip">教你买什么更赚</text>
            </a>
          </div>
          <div class="title-link">
            <a href="">
              <text class="titlename">赚钱神器</text>
              <text class="tip">教你买什么更赚</text>
            </a>
          </div>
          <div class="title-link">
            <a href="">
              <text class="titlename">赚钱神器</text>
              <text class="tip">教你买什么更赚</text>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login {
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: blueviolet;
}
.login .head {
  width: 100%;
}
.login .head .h2 {
  margin-top: 150px;
  font-size: 40px;
  width: 100%;
  color: brown;
  box-sizing: border-box;
}
.navbar {
  margin-top: 2rem;
  width: 100%;
  flex-direction: row;
}
.title-link {
  padding: 20px;
}
.titlename {
  font-size: 30px;
  color: aquamarine;
}
.tip {
  font-size: 20px;
  color: blue;
}
</style>
<script>
export default {
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
