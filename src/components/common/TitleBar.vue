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

    width: 100%;
    height: 45px;
}

img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
}

img:nth-child(1) {
    padding-left: 10px;
}

img:nth-child(3) {
    padding-right: 10px;
}

p {
    height: 45px;
    text-align: center;
    font-weight: bold;
    line-height: 45px;
}
</style>