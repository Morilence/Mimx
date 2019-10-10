<template>
    <div id="registerForm">
        <input type="text" placeholder="Username" maxlength="25" autocomplete="off" v-model="enteredUsername" @keyup.enter="register">
        <input type="password" placeholder="Password" maxlength="25" autocomplete="off" v-model="enteredPassword" @keyup.enter="register">
        <input type="password" placeholder="Pwd Confirm" maxlength="25" autocomplete="off" v-model="enteredPwdConfirm" @keyup.enter="register">
        <input type="submit" value="register" @click.prevent="register">
        <hr>
        <router-link to="login">返回登陆</router-link>
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
                    sendRegData(this.enteredUsername, this.enteredPassword).then(res => {
                        if (res) {
                            _this.$router.replace('/welcome/login');
                            console.log('Register successfully.');
                        } else {
                            alert('The username already exists!');
                            console.log('Register failed.');
                        }
                    });
                } else {
                    alert('Entered passwords differ!');
                }
            } else {
                alert('Input cannot be empty!');
            }
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
    margin-bottom: 40px;
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
    margin-bottom: 40px;
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