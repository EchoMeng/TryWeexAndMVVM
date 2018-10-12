<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
        <text class="bar-txt">首页</text>
        <list class="mainInfoList">
            <cell class="cell">
                <div class="infoCell">
                    <text class="cellText">第一行</text>
                </div>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第1行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第2行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第3行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第4行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第5行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第6行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第7行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第8行</text>
            </cell>
            <cell class="infoCell">
                <text class="cellText">第9行</text>
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
