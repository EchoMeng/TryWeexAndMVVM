<template>
    <list class="mainInfoList" @loadmore="fetch" loadmoreoffset="1">
        <header class="listHeader">首页</header>
        <cell class="cell" v-for="num in lists"
        @click="clickoncell(num)">
            <div class="infoCell">
                <text class="cellText"
                @appear="onAppear(num)"
                @disappear="onDisAppear(num)"
                >{{num}}</text>
            </div>
        </cell>
    </list>
</template>

<style scoped>
    .listHeader {
        font-size: 50px;
        padding-top: 20px;
        text-align: center;
        color: #666666;
        background-color: yellow;
    }
    .mainInfoList {
        background-color: red;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .infoCell {
        width: 600px;
        height: 900px;
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
// import util from '../utils/util.js'
var navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
const LOAD_MORE_COUNT = 10

export default {
  data () {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    fetch (event) {
      modal.toast({ message: 'loadmore', duration: 1 })

      setTimeout(() => {
        const length = this.lists.length
        for (let i = length; i < length + LOAD_MORE_COUNT; ++i) {
          this.lists.push(i + 1)
        }
      }, 800)
    },
    onAppear (num) {
      modal.toast({ message: num + ' appear', duration: 1 })
    },
    onDisAppear (num) {
      modal.toast({ message: num + ' disappear', duration: 1 })
    },
    clickoncell (num) {
      modal.toast({ message: num + ' click', duration: 1 })
      navigator.push(
        {
          url: 'http://192.168.1.102:8081/dist/CellPage.js',
          animated: 'true'
        }, event => {
          modal.toast({message: 'jump success!', duration: 0.5})
        })
    }
  }
}
</script>
