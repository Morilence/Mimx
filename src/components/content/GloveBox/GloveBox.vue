<template>
    <div id="gloveBox" v-show="this.$store.state.isGloveBoxDisplay">
        <glove-box-container></glove-box-container>
    </div>
</template>

<script>
import GloveBoxContainer from './GloveBoxContainer';
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

    }
}
</script>

<style scoped>
</style>