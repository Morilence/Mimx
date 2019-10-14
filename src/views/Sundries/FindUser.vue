<template>
    <div>
        <title-bar :backImgPath="require('@/assets/img/common/left_c.svg')" :menuImgPath="require('@/assets/img/common/menu_c.svg')" title="查找用户" titleColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
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

</style>