import Vue from 'vue';
import Vuex from 'vuex';

// 安装
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // // 记录进入profile页前是在chat页还是在explore页，以便返回至该页
        latestStay: '/chat',
        isLogin: false,
        userInfo: {}
    },
    mutations: {
        setLatestStay (state, val) {
            state.latestStay = val;
        },
        setIsLogin (state, val) {
            state.isLogin = val;
        },
        setUserInfo (state, val) {
            state.userInfo = val;
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
});

export default store;