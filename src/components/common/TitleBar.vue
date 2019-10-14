<template>
    <div id="titleBar" :style="{'background-color': bgColor, 'box-shadow': isShadow ? '0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .01)': 'none'}">
        <img :src="this.backImgPath" alt="" @click="back">
        <p :style="{'color': titleColor}">{{ title }}</p>
        <img :src="this.menuImgPath" alt="">
    </div>
</template>

<script>
export default {
    name: 'TitleBar',
    props: {
        backImgPath: {},
        menuImgPath: {},
        title: String,
        titleColor: String,
        bgColor: String,
        isShadow: {
            type: Boolean,
            default: false
        }
    },
    components: {

    },
    data () {
        return {
        }
    },
    methods: {
        back () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
#titleBar {
    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 49px;
}

img {
    width: 35px;
}

img:nth-child(1) {
    padding-left: 12px;
}

img:nth-child(3) {
    padding-right: 12px;
}

p {
    height: 16px;
    margin-bottom: 0;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
}
</style>