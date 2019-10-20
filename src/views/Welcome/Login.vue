<template>
    <div id="loginForm" action="">
        <input type="text" placeholder="Username" maxlength="25" autocomplete="off" v-model="enteredUsername" @keyup.enter="login">
        <input type="password" readonly="readonly" name="" placeholder="Password" maxlength="25" autocomplete="off" @focus="pwdGetFocus($event)" @blur="pwdLoseFocus($event)" v-model="enteredPassword" @keyup.enter="login">
        <input type="button" value="login" @click.self="login">
        <hr>
        <div>
            <label>
                <input type="checkbox" name="" id="" v-model="isChecked"><p>记住登陆信息</p>
            </label>
            <router-link to="register">立即注册</router-link>
        </div>
    </div>
</template>

<script>
import { sendLoginData } from '@/network/login';
export default {
    name: '',
    data () {
        return {
            enteredUsername: '',
            enteredPassword: '',
            isChecked: true
        }
    },
    methods: {
        login () {
            let _this = this;
            if (this.enteredUsername != '' && this.enteredPassword != '') {
                this.$store.commit('setIsLoading', true);
                sendLoginData(this.enteredUsername, this.enteredPassword).then(res => {
                    _this.$store.commit('setIsLoading', false);
                    if (res.isLogin) {
                        // 用户勾选记住用户名和密码
                        if (localStorage.getItem('isRemUP') == 'true') {
                            localStorage.setItem('unm', _this.enteredUsername);
                            localStorage.setItem('pwd', _this.enteredPassword);
                        }
                        // 将该用户的基本信息全部存储到state中
                        _this.$store.commit('setIsLogin', true);
                        _this.$store.commit('setUserInfo', res);
                        _this.$router.replace('/main/chat');
                        // 测试vue-socket.io
                        // _this.$socket.emit('message', _this.enteredUsername+' is online.');
                        console.log('Login successfully.');
                    } else {
                        _this.$tinyToast({content: 'Wrong account or password!', duration: 2000});
                        // alert('Wrong account or password!');
                        console.log('Login failed.');
                    }
                });
            } else {
                // alert('Input cannot be empty!');
                this.$tinyToast({content: 'Input cannot be empty!', duration: 2000});
            }
        },
        // 让密码输入框在未获取焦点的时候为仅读模式，防止浏览器自动填充表单
        pwdGetFocus (el) {
            el.target.removeAttribute('readonly');
        },
        pwdLoseFocus (el) {
            el.target.setAttribute('readonly', 'readonly');
        }
    },
    watch: {
        'isChecked': (newVal) => {
            if (newVal == true) {
                localStorage.setItem('isRemUP', true);
            } else {
                localStorage.setItem('isRemUP', false);
            }
        }
    },
    created () {
        if (localStorage.getItem('isRemUP') === null) {
            localStorage.setItem('isRemUP', false);
            this.isChecked = false;
        } else if (localStorage.getItem('isRemUP') == 'true') {
            this.isChecked = true;
            this.enteredUsername = localStorage.getItem('unm');
            this.enteredPassword = localStorage.getItem('pwd');
        } else {
            this.isChecked = false;
        }
    }

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

input {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 80%;
}

/* 开发阶段的测试按钮 */
button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 50%;
    margin-top: 30px;
    padding: 10px;
    background-color: rgba(255, 126, 103, 1);
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #fff;
    font-weight: bold;
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
    margin-bottom: 55px;
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
    margin-bottom: 55px;
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

input[type="button"] {
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
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    margin-top: 25px;
    margin-bottom: 5px;
}

#loginForm div {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-between;

    width: 80%;
    height: 32px;
}

label {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    width: 350px;
    height: 24px;
    margin: 0;
}

label p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 24px;
    margin: 0;
    padding-left: 3px;
    color: rgba(255, 126, 103, 1);
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
}

label input[type="checkbox"] {
    position: relative;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
}

a {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 24px;

    text-align: right;
    color: rgba(255, 126, 103, 1);
    white-space:nowrap;
}
</style>