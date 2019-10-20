<template>
    <ul id="optionList">
        <li class="optionItem">
            <p @click.self="unfold({name:'IndividualSpace', path: '/options/individualSpace', params: {targetName: curUsername}})">
                <img src="@/assets/img/profile/OptionList/individualSpace.svg" alt="" @click.self="unfold('/options/individualSpace')">
                个人空间
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold('/options/essentialInfo')">
                <img src="@/assets/img/profile/OptionList/basicInfo.svg" alt="" @click.self="unfold('/options/essentialInfo')">
                基本资料
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold('/options/accountSecurity')">
                <img src="@/assets/img/profile/OptionList/security.svg" alt="" @click.self="unfold('/options/accountSecurity')">
                账号安全
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold('/options/settings')">
                <img src="@/assets/img/profile/OptionList/setting.svg" alt="" @click.self="unfold('/options/settings')">
                设置
            </p>
            <div></div>
        </li>
        <hr>
        <li class="optionItem">
            <p @click.self="unfold('/options/about')">
                <img src="@/assets/img/profile/OptionList/about.svg" alt="" @click.self="unfold('/options/about')">
                关于
            </p>
            <div>
                <!-- Version: 1.01 Beta/Preview <br>
                Developer: Morilence<br>
                Contact us(me): 1280659615@qq.com<br>
                Product communication group: <span style="color: red">GUESS</span> -->
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
    computed: {
        curUsername () {
            return this.$store.state.userInfo.username;
        }
    },
    components: {

    },
    methods: {
        unfold (path) {
            this.$router.push(path);
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

hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin: 0;
    width: 95%;
}
</style>