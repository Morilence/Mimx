<template>
    <div id="nameCard">
        <div id="essentialInfo">
            <input type="file" name="image" accept="image/*" @change="onChangeAvatar($event)">
            <img :src="avatarUrl" alt="">
            <div>
                <p>{{ username }}</p>
                <p>Lv : {{ level }}</p>
            </div>
        </div>
        <ul id="usageInfo">
            <li>
                <p>{{ issueNum }}</p>
                <p>发布</p>
            </li>|
            <li>
                <p>{{ followNum }}</p>
                <p>关注</p>
            </li>|
            <li>
                <p>{{ collectNum }}</p>
                <p>收藏</p>
            </li>|
            <li>
                <p>{{ fanNum }}</p>
                <p>粉丝</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { changeAvatar } from '@/network/profile';
export default {
    name: 'NameCard',
    data () {
        return {
            avatarUrl: '',
            username: '未登录',
            level: 0,
            issueNum: 0,
            followNum: 0,
            collectNum: 0,
            fanNum: 0
        }
    },
    computed: {
        
    },
    methods: {
        onChangeAvatar (e) {
            let _this = this;
            const avatar = e.target.files[0];
            // 防止用户放弃改换图片而导致获取文件为空
            if (avatar != null) {
                let formData = new FormData();
                formData.append('_id', this.$store.state.userInfo._id);
                formData.append('avatar', avatar);
                changeAvatar(formData).then(res => {
                    // 添加时间戳使每次路径请求不同而防止从缓存获取
                    let newUserInfo = _this.$store.state.userInfo;
                    newUserInfo.avatarUrl = res + '?timestamp=' + (new Date().getTime());
                    _this.$store.commit('setUserInfo', newUserInfo);
                    _this.avatarUrl = _this.$store.state.userInfo.avatarUrl;
                    console.log(_this.avatarUrl);
                });
            }
        }
    },
    computed: {
        isLogin () {
            return this.$store.state.isLogin;
        }
    },
    watch: {
        isLogin () {
            if (this.$store.state.isLogin == true) {
                this.username = this.$store.state.userInfo.username;
                this.level = this.$store.state.userInfo.level;
                this.issueNum = this.$store.state.userInfo.issueNum;
                this.followNum = this.$store.state.userInfo.followNum;
                this.collectNum = this.$store.state.userInfo.collectNum;
                this.fanNum = this.$store.state.userInfo.fanNum;
            } else {
                this.avatarUrl = require('@/assets/img/common/visitor.svg');
                this.username = '未登录';
                this.level = 0;
                this.issueNum = 0;
                this.followNum = 0;
                this.collectNum = 0;
                this.fanNum = 0;
            }
        }
    },
    created () {
        // 需要提前就把数据加载好，因为watch还没开始监听
        if (this.$store.state.isLogin == true) {
            this.username = this.$store.state.userInfo.username;
            this.avatarUrl = this.$store.state.userInfo.avatarUrl;
            this.level = this.$store.state.userInfo.level;
            this.issueNum = this.$store.state.userInfo.issueNum;
            this.followNum = this.$store.state.userInfo.followNum;
            this.collectNum = this.$store.state.userInfo.collectNum;
            this.fanNum = this.$store.state.userInfo.fanNum;
        } else {
            this.username = '未登录';
            this.avatarUrl = require('@/assets/img/common/visitor.svg');
            this.level = 0;
            this.issueNum = 0;
            this.followNum = 0;
            this.collectNum = 0;
            this.fanNum = 0;
        }
    }
}
</script>

<style scoped>
#nameCard {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin-top: 60px;
    width: 90%;
    height: 130px;
    padding-top: 5px;
    /* background-color: #fafafa; */
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: #606266;
}

#essentialInfo {
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    height: 80px;
    padding-left: 15px;
    padding-right: 15px;
}

#essentialInfo input[type="file"] {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    margin: 0;
    padding: 0;
    width: 60px;
    height: 60px;
    /* margin-right: 10px; */
    border: 1px solid rgba(255, 126, 103, 1);
    border-radius: 4px;
    z-index: 2;
    opacity: 0;
}

#essentialInfo img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 60px;
    height: 60px;
    margin-right: 10px;
    border: 1px solid rgba(255, 126, 103, 1);
    border-radius: 4px;
}

#essentialInfo div {
    flex: 1;
    display: flex;
    flex-direction: column;

    margin-top: 10px;
    margin-bottom: 10px;
}
#essentialInfo div p {
    margin: 0;
    padding: 0;
}
#essentialInfo div p:nth-child(1) {
    flex: 2;

    font-size: 20px;
    font-weight: bold;
}

#essentialInfo div p:nth-child(2) {
    flex: 1;

    color: #909399;
}

#usageInfo {
    display: flex;

    height: 40px;
    margin-bottom: 5px;

    text-align: center;
    line-height: 40px;
}

#usageInfo li {
    flex: 1;
    display: flex;
    flex-direction: column;

    position: relative;
}
#usageInfo li p{
    flex: 1;

    margin: 0;
    padding: 0;
}
#usageInfo li p:nth-child(1) {
    line-height: 20px;
    font-size: 18px;
    font-weight: bold;
}
#usageInfo li p:nth-child(2) {
    line-height: 20px;
    font-size: 14px;
    color: #909399;
}
</style>