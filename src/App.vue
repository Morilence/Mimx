<template>
	<div id="app">
		<router-view></router-view>
		<!-- <float-bar></float-bar>
		<tab-bar></tab-bar> -->
	</div>
</template>

<script>

export default {
	name: 'app',
	components: {
	},
	data () {
		return {

		}
	},
	methods: {
		
	},
	created () {
		this.$router.replace('/');
	}
}
</script>

<style>
@import url("./assets/css/base.css");
#app {
	background-color: #fafafa;
}
</style>
