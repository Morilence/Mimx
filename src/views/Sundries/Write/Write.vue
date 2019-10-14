<template>
    <div id="write">
        <title-bar :backImgPath="require('@/assets/img/common/left_c.svg')" :menuImgPath="require('@/assets/img/common/menu_c.svg')" title="写点什么" titleColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
    </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar';
export default {
    name: 'Write',
    components: {
        TitleBar
    }
}
</script>

<style scoped>
#write {
    margin-top: 55px;
}
</style>