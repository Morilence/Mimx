import Vue from 'vue';
import TinyToast from '@/components/common/Toasts/TinyToast/TinyToast.vue';
// Vue.extend()将为组件生成一个组件构造器
let TinyToastConstructor = Vue.extend(TinyToast);
// 组件实例
let instance = null;
// 计时器
let timer = null;
let tinyToast = (options) => {
    if (!instance) {
        // 如果不存在组件实例则用构造器生成实例
        instance = new TinyToastConstructor();
        // $mount表示将组件实例挂载为DOM元素（无参则表示挂载为文档流之外的DOM元素），然后通过$el属性来获取该DOM元素
        document.body.appendChild(instance.$mount().$el);
    }
    if (timer) {
        clearTimeout(timer);
        timer = null;
        instance.isShow = false;
        instance.content = '';
    }
    // options是使用时所传进来的参数对象，包含了指定的内容和展示时间
    if (typeof options === 'object') {
        instance.content = options.content;
        instance.duration = options.duration;
    } else {
        return;
    }
    instance.isShow = true;
    timer = setTimeout(() => {
        instance.isShow = false;
        clearTimeout(timer);
        timer = null;
        instance.content = '';
    }, instance.duration);
}

// 清除Toast
tinyToast.clear = () => {
    instance.isShow = false;
    if (instance) {
        instance = null;
    }
    if (timer) {
        clearTimeout(timer);
        timer = null;
        instance.content = '';
    }
}

// 挂载到全局成为插件可使用（即在main.js中通过Vue.use()安装，通过this.$tinyToast({options})来调用）
Vue.prototype.$tinyToast = tinyToast;

export default tinyToast;