<template>
    <div id="navBar">
        <li class="navBarItem" @click="activate($event)">综合</li>|
        <li class="navBarItem" @click="activate($event)">影视</li>|
        <li class="navBarItem" @click="activate($event)">游戏</li>|
        <li class="navBarItem" @click="activate($event)">美食</li>|
        <li class="navBarItem" @click="activate($event)">体育</li>|
        <li class="navBarItem" @click="activate($event)">经济</li>|
        <li class="navBarItem" @click="activate($event)">政治</li>|
        <li class="navBarItem" @click="activate($event)">军事</li>|
        <li class="navBarItem" @click="activate($event)">搞笑</li>|
        <li class="navBarItem" @click="activate($event)">其他</li>
    </div>
</template>

<script>
import { log } from 'util';
export default {
    name: 'navBar',
    components: {
    },
    data () {
        return {
            lastActiveEl: null
        }
    },
    methods: {
        activate (el) {
            if (this.lastActiveEl != null) {
                this.lastActiveEl.classList.remove("active");
            }
            el.target.classList.add("active");
            this.lastActiveEl = el.target;
        },
    },
    // DOM元素还未生成
    created () {

    },
    mounted () {
        var fel = document.getElementsByClassName("navBarItem")[0];        
        fel.classList.add("active");
        this.lastActiveEl = fel;
    }
}
</script>

<style scoped>
::-webkit-scrollbar  {
    display: none;
}

#navBar {
    display: flex;
    /* line-height对移动端浏览器无效可用flex布局下的align-items来设置垂直居中 */
    align-items: center;
    flex-flow: row nowrap;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    height: 40px;
    margin-top: 5px;
    padding-right: 5px;
    border-radius: 5px;
    /* background-color: rgba(255, 126, 103, 1); */

    color: #909399;
    font-size: 18px;
    text-align: center;
    line-height: 40px;

    white-space: nowrap;
    overflow-x: scroll;
}

.navBarItem {
    flex: 1;
    
    padding-left: 10px;
    padding-right: 10px;
}

.active {
    color: rgba(255, 126, 103, 1);
    font-size: 20px;
    font-weight: bold;
}
</style>