<template>
    <!-- self修饰符只让被点击的元素触发点击事件 -->
    <div id="gloveBox" v-show="this.$store.state.isGloveBoxDisplay" @click.self="closeGloveBox">
        <glove-box-container></glove-box-container>
    </div>
</template>

<script>
import GloveBoxContainer from '@/components/content/GloveBox/GloveBoxContainer';
export default {
    name: 'GloveBox',
    components: {
        GloveBoxContainer
    },
    data () {
        return {

        }
    },
    methods: {
        closeGloveBox () {
            this.$store.commit('setIsGloveBoxDisplay', false);
        }
    }
}
</script>

<style scoped>
#gloveBox {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.1);
}
</style>