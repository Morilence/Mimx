<template>
    <div id="sponsor">
        <img src="@/assets/img/sponsor/Alipay.jpg" alt="">
        <img src="@/assets/img/sponsor/WeChat.png" alt="">
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="require('@/assets/img/common/menu_w.svg')" title="无偿资助开发者" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
    </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar';
export default {
    name: '',
    components: {
        TitleBar
    }
}
</script>

<style scoped>
#sponsor {
    margin-top: 65px;
}

img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    height: auto;
    max-width: 95%;
    max-height: 100%;
}

img:nth-child(2) {
    margin-bottom: 25px;
}
</style>