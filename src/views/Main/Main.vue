<template>
    <div id="main">
        <keep-alive>
			<router-view v-if="$route.meta.keepalive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepalive"></router-view>
        <float-bar></float-bar>
        <glove-box></glove-box>
		<tab-bar></tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/content/TabBar/TabBar';
import FloatBar from '@/components/content/FloatBar/FloatBar';
import GloveBox from '@/components/content/GloveBox/GloveBox';
import Chat from '@/views/Main/Chat/Chat';
import Explore from '@/views/Main/Explore/Explore';
export default {
    name: 'Main',
    components: {
        TabBar,
        FloatBar,
        GloveBox,
        Chat,
        Explore
    }
}
</script>

<style scoped>

</style>