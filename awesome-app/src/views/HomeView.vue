<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
        <text class="bar-txt">首页</text>
        <list class="mainInfoList">
            <cell class="cell" v-for="num in lists" key="cellCount">
                <div class="infoCell">
                    <text class="cellText">{{num}}</text>
                </div>
            </cell>
        </list>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        background-color: yellow;
        margin-top: 0;
        margin-bottom: 90px;
        margin-left: 0;
        margin-right: 0;
    }
    .bar-txt {
        font-size: 50px;
        padding-top: 20px;
        text-align: center;
        color: #666666;
    }
    .mainInfoList {
        background-color: red;
        margin-top: 200px;
        margin-bottom: 200px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .infoCell {
        width: 600px;
        height: 300px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }
    .cellText {
        font-size: 40px;
        padding-top: 20px;
        text-align: center;
        color: #565656;
    }
</style>

<script>
import util from '../utils/util.js'
var navigator = weex.requireModule('navigator')

export default {
  data () {
    return {
      lists: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    }
  },
  methods: {
    jumpWeb (_url) {
      const url = this.$getConfig().bundleUrl
      navigator.push(
        {
          url: util.setBundleUrl(url, _url),
          animated: 'true'
        }
      )
    },
    loadingDown () {

    }
  }
}
</script>
