<template>
    <div>
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

</style>