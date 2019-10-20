import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueSocketIO from 'vue-socket.io'

// 在进行界面测试时要关上
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://127.0.0.1:3000',
//     vuex: {
// 		// 绑定vuex实例
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     }
// }));

// 下面是自封装插件引用和安装
import tinyToast from '@/components/common/Toasts/TinyToast';

Vue.use(tinyToast);

Vue.config.productionTip = false;

// 在每次路由跳转之前判断用户有没有登陆
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
