<template>
    <div id="profile">
        <div id="background"></div>
        <name-card></name-card>
        <option-list></option-list>
        <button id="logoutBtn" @click="logout">logout</button>
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="require('@/assets/img/common/menu_w.svg')" title="我" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
    </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar';
import NameCard from '@/views/Profile/NameCard';
import OptionList from '@/views/Profile/OptionList';
export default {
    name: 'Profile',
    components: {
        NameCard,
        OptionList,
        TitleBar,
    },
    data () {
        return {
        }
    },
    methods: {
        logout () {
            // 将登陆状态撤除并清除用户信息
            this.$store.commit('setIsLogin', false);
            this.$store.commit('setUserInfo', {});
            this.$router.replace('/');
        }
    },
    created () {

    },
}
</script>

<style scoped>
#profile {
    width: 100%;
}

#background {
    position: absolute;
    top: 0;

    width: 100%;
    height: 160px;
    border-radius: 0px 0px 35px 35px/ 0px 0px 15px 15px;
    background-color: rgba(255, 126, 103, 1);
}

#logoutBtn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: rgba(255, 126, 103, 1);
    font-weight: bold;
}

</style>