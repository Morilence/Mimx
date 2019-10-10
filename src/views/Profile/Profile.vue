<template>
    <div id="profile">
        <div id="background"></div>
        <name-card></name-card>
        <option-list></option-list>
        <button id="logoutBtn" @click="logout">logout</button>
        <img id="backBtn" src="@/assets/img/profile/up_w.svg" alt="" @click="back">
    </div>
</template>

<script>
import NameCard from './NameCard';
import OptionList from './OptionList';
export default {
    name: 'Profile',
    components: {
        NameCard,
        OptionList
    },
    data () {
        return {
            
        }
    },
    methods: {
        back () {
            this.$router.replace(this.$store.state.latestStay);
        },
        logout () {
            // 将登陆状态撤除并清楚用户信息
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

#backBtn {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;

    width: 90%;
    height: 28px;
    padding-left: 22px;
    padding-right: 22px;
    border-top: 1.5px solid rgba(255, 126, 103, 1);
    border-radius: 30px 30px 10px 10px/ 30px 30px 10px 10px;
    background-color: rgba(255, 126, 103, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#background {
    position: absolute;
    top: 0;

    width: 100%;
    height: 140px;
    border-radius: 0px 0px 35px 35px/ 0px 0px 15px 15px;
    background-color: rgba(255, 126, 103, 1);
}

#logoutBtn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    margin-top: 5px;
    margin-bottom: 55px;
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