<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepalive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepalive"></router-view> 
	</div>
</template>

<script>

export default {
	name: 'app',
	components: {
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
