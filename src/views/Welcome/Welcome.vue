<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Login from './Login';
import Reigister from './Register';
export default {
    name: '',
    components: {
        Login,
        Reigister
    },
    data () {
        return {

        }
    },
    methods: {
        
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
</style>