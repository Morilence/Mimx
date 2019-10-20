<template>
    <div id="registerForm">
        <input type="text" placeholder="Username" maxlength="25" autocomplete="off" v-model="enteredUsername" @keyup.enter="register">
        <input type="password" readonly="readonly" placeholder="Password" maxlength="25" autocomplete="off" @focus="pwdGetFocus($event)" @blur="pwdLoseFocus($event)" v-model="enteredPassword" @keyup.enter="register">
        <input type="password" readonly="readonly" placeholder="Pwd Confirm" maxlength="25" autocomplete="off" @focus="pwdGetFocus($event)" @blur="pwdLoseFocus($event)" v-model="enteredPwdConfirm" @keyup.enter="register">
        <input type="submit" value="register" @click.prevent="register">
        <hr>
        <div>
            <router-link to="login">返回登陆</router-link>
        </div>
    </div>
</template>

<script>
import { sendRegData } from '@/network/register';
export default {
    name: '',
    data () {
        return {
            enteredUsername: '',
            enteredPassword: '',
            enteredPwdConfirm: ''
        }
    },
    methods: {
        register () {
            let _this = this; 
            if (this.enteredUsername != '' && this.enteredPassword != '') {
                if (this.enteredPassword == this.enteredPwdConfirm) {
                    this.$store.commit('setIsLoading', true);
                    sendRegData(this.enteredUsername, this.enteredPassword).then(res => {
                        _this.$store.commit('setIsLoading', false);
                        if (res) {
                            _this.$router.replace('/welcome/login');
                            this.$tinyToast({content: 'Register successfully.', duration: 2000});
                            console.log('Register successfully.');
                        } else {
                            // alert('The username already exists!');
                            this.$tinyToast({content: 'The username already exists!', duration: 2000});
                            console.log('Register failed.');
                        }
                    });
                } else {
                    // alert('Entered passwords differ!');
                    this.$tinyToast({content: 'Entered passwords differ!', duration: 2000});
                }
            } else {
                // alert('Input cannot be empty!');
                this.$tinyToast({content: 'Input cannot be empty!', duration: 2000});
            }
        },
        pwdGetFocus (el) {
            el.target.removeAttribute('readonly');
        },
        pwdLoseFocus (el) {
            el.target.setAttribute('readonly', 'readonly');
        }
    }
}
</script>

<style scoped>
#registerForm {
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

input[type="submit"] {
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

#registerForm div {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 32px;
}

a {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: block;

    width: 80%;
    height: 24px;
    text-align: right;
    color: rgba(255, 126, 103, 1);
}
</style>