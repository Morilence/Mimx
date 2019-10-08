<template>
    <div id="floatBarContainer" @click="openProfile">
        <div id="infoArea">
            <img :src="avatarUrl" alt="">
            <div><p>{{ username }}</p></div>
        </div>
        <div id="statusArea">
            <p>Lv : {{ level }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FloatBarContainer',
    data () {
        return {
            avatarUrl: require('@/assets/img/common/visitor.svg'),
            username: '未登录',
            level: 0
        }
    },
    methods: {
        openProfile () {
            this.$router.replace('/profile');
        }
    },
    computed: {
        isLogin () {
            return this.$store.state.isLogin;
        }
    },
    watch: {
        isLogin () {
            if (this.$store.state.isLogin == 'false') {
                this.avatarUrl = require('@/assets/img/common/visitor.svg');
                this.username = '未登录';
                this.level = 0;
            }
        }
    },
    created () {
        if (localStorage.getItem('isLogin') === null) {
            localStorage.setItem('isLogin', false);
        }
        this.$store.state.isLogin = localStorage.getItem('isLogin');
        if (this.$store.state.isLogin == 'true') {
            this.username = this.$store.state.userInfo.username;
            this.level = this.$store.state.userInfo.level;
        }
    }
}
</script>

<style scoped>
/* 注: line-height属性在某些移动端浏览器渲染不出 */
p {
    margin: 0;
    padding: 0;

    position: relative;
    top: 50%;
    transform: translateY(-50%);

    margin-left: 8px;
    margin-right: 5px;
    text-align: center;

    white-space:nowrap;
}

#floatBarContainer {
    display: flex;
    background-color: #fafafa;

    height: 30px;
    padding-left: 22px;
    padding-right: 22px;
    border-top: 1.5px solid rgba(255, 126, 103, 1);
    border-radius: 5px 5px 30px 30px/ 5px 5px 30px 30px;

    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
}

#infoArea {
    display: flex;
}

#infoArea img {
    /* flex: 1; */

    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 20px;
    height: 20px;    
    border-radius: 5px;
}

#infoArea p {
    flex: 1;

    /* 限定行宽，多处的文字以省略号显示 */
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #606266;
}

#statusArea {
    flex: 1;
}

#statusArea p {
    font-size: 10px;
    color: #909399;
}
</style>