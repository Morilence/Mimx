<template>
    <ul id="optionList">
        <li class="optionItem">
            <p @click.stop="unfold($event)">个人信息</p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.stop="unfold($event)">账号安全</p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.stop="unfold($event)">设置</p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.stop="unfold($event)">关于</p>
            <div></div>
        </li>
    </ul>
</template>

<script>
import { log } from 'util';
export default {
    name: 'OptionList',
    data () {
        return {
            lastActiveEl: null
        }
    },
    methods: {
        unfold (el) {
            // 存在上一个展开的选项并且和当前点击选项不同
            if (this.lastActiveEl != null && this.lastActiveEl != el.target) {
                this.lastActiveEl.parentNode.getElementsByTagName('div')[0].style.display = '';
            }            
            if (el.target.parentNode.getElementsByTagName('div')[0].style.display == '') {
                el.target.parentNode.getElementsByTagName('div')[0].style.display = 'block';
            } else {
                el.target.parentNode.getElementsByTagName('div')[0].style.display = '';
            }
            this.lastActiveEl = el.target;
        }
    }
}
</script>

<style scoped>
#optionList {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    margin-top: 15px;
    margin-bottom: 10px;
    /* 开启BFC */
    overflow: hidden;
    /* background-color: #fafafa; */
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.optionItem {
    margin-top: 15px;
    margin-bottom: 15px;
}

.optionItem p {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    padding-left: 15px;

    font-size: 17px;
}

.optionItem div {
    display: none;

    height: 80px;
    background-color: #fff;
}

hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    margin: 0;
}
</style>