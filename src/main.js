import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) {
		if (store.state.isLogin == true) {
			next();
		} else {
			next({
				path: '/'
			});
		}
	} else {
		next();
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
