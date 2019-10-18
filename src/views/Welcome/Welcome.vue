<template>
    <div>
        <router-view></router-view>
        <a href="" @click.prevent="skipin">skipin 4 local dev</a>
        <ball-spin-fade-loader v-show="this.$store.state.isLoading"/>
    </div>
</template>

<script>
import BallSpinFadeLoader from '@/components/common/Loaders/BallSpinFadeLoader';
import Login from '@/views/Welcome/Login';
import Reigister from '@/views/Welcome/Register';
export default {
    name: '',
    components: {
        Login,
        Reigister,
        BallSpinFadeLoader
    },
    data () {
        return {

        }
    },
    methods: {
        skipin () {
            this.$store.commit('setIsLogin', true);
            this.$router.replace('/main/chat');
        },
    },
    created () {

    }
}
</script>

<style scoped>
p {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);

    text-align: center;
    color: rgba(255, 126, 103, 1);
    font-size: 55px;
    font-weight: bold;
}

#loginBtn {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);

    width: 80%;
    padding: 10px;
    background-color: rgba(255, 126, 103, 1);
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #fff;
    font-weight: bold;
}

a {
    position: absolute;
    top: 0;

    display: block;
    width: 100%;
    padding-top: 5px;
    padding-left: 10px;

    text-align: left;
    color: rgba(255, 126, 103, 1);
}
</style>