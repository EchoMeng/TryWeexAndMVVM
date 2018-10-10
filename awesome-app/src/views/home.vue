<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
        <text class="bar-txt">首页</text>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            <yx-slider :imageList="YXBanners"></yx-slider>
            <div class="slogan">
                <banner-goods-box hasMore=flase newGoods=false :goods="xianyu_banner_goods"></banner-goods-box>
            </div>
            </div>
            <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
                        <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
                        <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
                        <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
                        <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
                        <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
                        <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
            </div>
        </scroller>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        background-color: yellow;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .bar-txt {
        font-size: 40px;
        padding-top: 20px;
        text-align: center;
        color: #666666;
    }
    .main-list {
        position: fixed;
        background-color: blueviolet;
        top: 108px;
        bottom: 90px;
        left: 0;
        right: 0;
    }
    .cell-button {
        padding-bottom: 180px;
        background-color: aqua;
    }
    .slogan {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: blue;
    }
</style>

<script>
import util from '../utils/util.js'
var navigator = weex.requireModule('navigator')

export default {
  methods: {
    jumpWeb (_url) {
      const url = this.$getConfig().bundleUrl
      navigator.push(
        {
          url: util.setBundleUrl(url, _url),
          animated: 'true'
        }
      )
    }
  }
}
</script>
