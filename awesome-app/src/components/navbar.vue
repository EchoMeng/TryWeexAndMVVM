<template>
    <div
    :dataRole="dataRole"
    class="container"
    :style="{
        height: height,
        backgroundColor: backgroundColor
    }">
    <text
    v-if="!rightItemSrc"
    naviItemPosition="right"></text>
    </div>
</template>

<style scoped>
.container {
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100;
}
</style>
