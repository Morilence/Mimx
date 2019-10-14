<template>
    <ul id="optionList">
        <li class="optionItem">
            <p @click.self="unfold1($event)">
                <img src="@/assets/img/profile/OptionList/basicInfo.svg" alt="" @click.self="unfold2($event)">
                个人信息
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold1($event)">
                <img src="@/assets/img/profile/OptionList/security.svg" alt="" @click.self="unfold2($event)">
                账号安全
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold1($event)">
                <img src="@/assets/img/profile/OptionList/setting.svg" alt="" @click.self="unfold2($event)">
                设置
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold1($event)">
                <img src="@/assets/img/profile/OptionList/about.svg" alt="" @click.self="unfold2($event)">
                关于
            </p>
            <div>
                Version: 1.01 Beta/Preview <br>
                Developer: Morilence<br>
                Contact us(me): 1280659615@qq.com<br>
                Product communication group: <span style="color: red">GUESS</span>
            </div>
        </li>
        <hr>
         <li class="optionItem">
            <p @click.self="unfold1($event)">
                <img src="@/assets/img/profile/OptionList/sponsor.svg" alt="" @click.self="unfold2($event)">
                无偿资助开发者
            </p>
            <div>
                <img src="@/assets/img/sponsor/Alipay.jpg" alt="">
                <img src="@/assets/img/sponsor/WeChat.png" alt="">
            </div>
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
        unfold1 (el) {
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
        },
        unfold2 (el) {
            if (this.lastActiveEl != null && this.lastActiveEl != el.target.parentNode) {
                this.lastActiveEl.parentNode.getElementsByTagName('div')[0].style.display = '';
            }            
            if (el.target.parentNode.parentNode.getElementsByTagName('div')[0].style.display == '') {
                el.target.parentNode.parentNode.getElementsByTagName('div')[0].style.display = 'block';
            } else {
                el.target.parentNode.parentNode.getElementsByTagName('div')[0].style.display = '';
            }
            this.lastActiveEl = el.target.parentNode;
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

.optionItem img {
    display: inline-block;
    width: 22px;
    height: 22px;
}

.optionItem p {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    padding-left: 15px;

    font-size: 17px;
    color: #606266;
}

.optionItem p img {
    margin-bottom: 3px;
}

.optionItem div {
    display: none;

    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    min-height: 80px;
    background-color: #fff;

    color: #909399;
    font-size: 12px;
}

.optionItem div img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: auto;
    height: auto;
    max-width: 95%;
    max-height: 100%;
    
}

hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin: 0;
}
</style>