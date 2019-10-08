<template>
    <form id="loginForm" action="">
        <input type="text" placeholder="Username" maxlength="25" autocomplete="off" v-model="enteredUsername" @keyup.enter="login">
        <input type="password" name="" placeholder="Password" maxlength="25" autocomplete="off" v-model="enteredPassword" @keyup.enter="login">
        <input type="button" value="login" @click="login">
        <!-- 专用于开发时免登陆进入 -->
        <!-- <button @click="skipin">skip in (4 dev)</button> -->
        <hr>
        <router-link to="register">立即注册</router-link>      
    </form>
</template>

<script>
import { sendLoginData } from '@/network/login';
export default {
    name: '',
    data () {
        return {
            enteredUsername: '',
            enteredPassword: '',
        }
    },
    methods: {
        login () {
            let _this = this;

            if (this.enteredUsername != '' && this.enteredPassword != '') {
                sendLoginData(this.enteredUsername, this.enteredPassword).then(res => {
                    if (res.isLogin) {
                        // 将该用户的基本信息全部存储到state中
                        _this.$store.commit('setUserInfo', res);
                        if (localStorage.getItem('isLogin') === null) {
                            localStorage.setItem('isLogin', true);
                        }
                        localStorage.setItem('isLogin', true);
                        _this.$store.commit('setIsLogin', localStorage.getItem('isLogin'));
                        _this.$router.replace('/chat');
                        console.log('Login successfully.');
                    } else {
                        alert('Wrong account or password!');
                        console.log('Login failed.');
                    }
                });
            } else {
                alert('Input cannot be empty!');
            }
        },
        // skipin () {
        //     let _this = this;
        //     if (true) {
        //         // 将该用户的基本信息全部存储到state中
        //         if (localStorage.getItem('isLogin') === null) {
        //             localStorage.setItem('isLogin', true);
        //         }
        //         localStorage.setItem('isLogin', true);
        //         _this.$store.commit('setIsLogin', localStorage.getItem('isLogin'));
        //         _this.$router.replace('/chat');
        //     }
        // }
    },

}
</script>

<style scoped>

#loginForm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
}

input,button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 80%;
}

input:-webkit-autofill {
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(255, 126, 103, 1);
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #fff;
    font-weight: bold;
}

::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.75);
}

input[type="text"] {
    height: 40px;
    margin-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(255, 126, 103, 1);
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #fff;
    font-weight: bold;
}

input[type="password"] {
    height: 40px;
    margin-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(255, 126, 103, 1);
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #fff;
    font-weight: bold;
}

input[type="button"],button {
    padding: 10px;
    background-color: rgba(255, 126, 103, 1);
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #fff;
    font-weight: bold;
}

hr {
    margin-top: 25px;
    margin-bottom: 5px;
}

a {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    display: block;

    width: 80%;
    text-align: right;
    color: rgba(255, 126, 103, 1);
}
</style>