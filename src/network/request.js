import axios from 'axios';
import store from '@/store/store';

export function request(config) {
    // 创建实例，同时对该实例进行一些基本的配置
    const instance = axios.create({
        baseURL: 'http://39.105.51.214:3000',
        timeout: 5000,
    });

    // 拦截请求
    instance.interceptors.request.use(config => {
        // 执行完操作后定要return config;不然请求将被拦截
        return config;
    },error => {
        // 请求失败的一系列操作
        store.commit('setIsLoading', false);
        return Promise.reject(error);
    });

    // 拦截响应
    instance.interceptors.response.use(response => {
        // 执行完操作后定要return response;不然then中将获取不到数据
        return response.data;
    },error => {
        // 响应错误失败的一系列操作
        store.commit('setIsLoading', false);
        return Promise.reject(error);
    });

    // instance实质上即是Promise，所以外部可以通过then和catch对数据（或错误信息）进行处理
    return instance(config);
}