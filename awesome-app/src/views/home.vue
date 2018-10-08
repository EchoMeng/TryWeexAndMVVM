<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
        <text class="bar-txt">首页</text>
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
</style>
