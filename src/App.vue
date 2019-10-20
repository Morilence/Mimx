<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepalive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepalive"></router-view>
		<ball-spin-fade-loader v-show="this.$store.state.isLoading"/>
	</div>
</template>

<script>
import BallSpinFadeLoader from '@/components/common/Loaders/BallSpinFadeLoader';
export default {
	name: 'app',
	components: {
		BallSpinFadeLoader
	},
	data () {
		return {
			// 初始滚动高度
			scroll: 0
		}
	},
	methods: {
		
	},
	watch:{
	},
	
	created () {
		this.$router.replace('/');
	},
	
}
</script>

<style>
@import url("./assets/css/base.css");
#app {
  	background-color: #fafafa;
}
</style>
