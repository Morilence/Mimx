<template>
    <ul id="gloveBoxContainer">
        <li @click="findUser">
            <img src="@/assets/img/GloveBox/searchUser.svg" alt="">
            <p>查找用户</p>
        </li>
        <li @click="write">
            <img src="@/assets/img/GloveBox/createPost.svg" alt="">
            <p>写点什么</p>
        </li>
    </ul>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
    },
    methods: {
        findUser () {
            this.$router.push('/sundries/findUser');
        },
        write () {
            this.$router.push('/sundries/write');
        }
    }
}
</script>

<style scoped>
#gloveBoxContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 85%;
    height: 300px;
    border-radius: 10px;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.2);

    background-color: rgba(250, 250, 250, 0.95);
}

li {
    width: 50px;
    height: 65px;
    margin: 12px;
}

li p {
    margin: 0;
    padding: 0;
    margin-top: 2px;

    text-align: center;
    font-size: 12px;
    color: #606266
}

li img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 45px;
    height: 45px;
    
    padding: 4px;
    border-radius: 10px;
    background-color: rgba(255, 126, 103, 1);
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>