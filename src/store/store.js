import Vue from 'vue';
import Vuex from 'vuex';

// 安装
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 杂物浮框的显示
        isLogin: false,
        isLoading: false,
        isGloveBoxDisplay: false,
        userInfo: {},
        chatStatus: {
            scroll: 0
        },
        exploreStatus: {
            scroll: 0
        }
    },
    mutations: {
        setIsGloveBoxDisplay (state, val) {
            state.isGloveBoxDisplay = val;
        },
        setIsLogin (state, val) {
            state.isLogin = val;
        },
        setIsLoading (state, val) {
            state.isLoading = val;
        },
        setUserInfo (state, val) {
            state.userInfo = val;
        },
        setChatStatus (state, val) {
            state.chatStatus = val;
        },
        setExploreStatus (state, val) {
            state.exploreStatus = val;
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