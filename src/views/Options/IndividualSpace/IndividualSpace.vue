<template>
    <div>
        <div id="background-container">
            <div id="infoPanel">
                <img :src="avatarUrl" alt="">
                <div> 
                    <p>{{ username }}</p>  
                    <img :src="genderImgUrl" alt=""> 
                </div>
                <p>
                    <span>Lv: {{ level }}</span>|
                    <span>关注: {{ followNum }}</span>|
                    <span>粉丝: {{ fanNum }}</span>
                </p>
                <p>简介: {{ intro }}</p>
            </div>
        </div>
        <div id="postPanel"></div>
        <div id="contactBar" v-show="isContactBarShow">
            <button @click="followSwitch">{{ btnText }}</button>
            <button>私信</button>
        </div>
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="require('@/assets/img/common/menu_w.svg')" title="" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 0)" :isShadow="false"></title-bar>
    </div>
</template>

<script>
import { getInfo } from '@/network/sundries';
import { getFollowRelation, changeFollowRelation } from '@/network/profile';
import TitleBar from '@/components/common/TitleBar';
export default {
    name: 'IndividualSpace',
    components: {
        TitleBar
    },
    data () {
        return {
            targetInfo: {},
            avatarUrl: '',
            username: 'ddddd',
            gender: '',
            level: 0,
            followNum: 0,
            fanNum: 0,
            intro: '这个人什么都没有写ε=ε=ε=(~￣▽￣)~',
            isFollow: false,
            isContactBarShow: false
        }
    },
    computed: {
        genderImgUrl () {
            if (this.gender == '男') {
                return require('@/assets/img/common/man_w.svg');
            } else if (this.gender == '女') {
                return require('@/assets/img/common/woman_w.svg');
            } else {
                return require('@/assets/img/common/question_w.svg');
            }
        },
        btnText () {
            return this.isFollow ? '取消关注' : '关注';
        }
    },
    watch: {
        
    },
    methods: {
        followSwitch () {
            let _this = this;
            this.$store.commit('setIsLoading', true);
            if (this.isFollow) {
                changeFollowRelation({aod: false, follower: this.$store.state.userInfo._id, followee: this.targetInfo._id}).then(res => {
                    _this.$store.commit('setIsLoading', false);
                    if (res.isOk) {
                        _this.isFollow = false;
                        // 更新被关注者的粉丝数和关注者的关注数
                        _this.fanNum = res.followee_fanNum;
                        let newUserInfo = _this.$store.state.userInfo;
                        newUserInfo.followNum = res.follower_followNum;
                        _this.$store.commit('setUserInfo', newUserInfo);
                    } else {
                        _this.$tinyToast({content: 'Unfollow failed! (unknown error)', duration: 2000});
                    }
                });
            } else {
                changeFollowRelation({aod: true, follower: this.$store.state.userInfo._id, followee: this.targetInfo._id}).then(res => {
                    _this.$store.commit('setIsLoading', false);
                    if (res.isOk) {
                        _this.isFollow = true;
                        // 更新粉丝数
                        _this.fanNum = res.followee_fanNum;
                        let newUserInfo = _this.$store.state.userInfo;
                        newUserInfo.followNum = res.follower_followNum;
                        _this.$store.commit('setUserInfo', newUserInfo);
                    } else {
                        _this.$tinyToast({content: 'Follow failed! (unknown error)', duration: 2000});
                    }
                });
            }
        }
    },
    created () {
        let _this = this;
        this.$store.commit('setIsLoading', true);
        let targetName = this.$route.params.targetName;
        getInfo(targetName).then(res => {
            _this.targetInfo = res;
            _this.avatarUrl = _this.targetInfo.avatarUrl;
            _this.username = _this.targetInfo.username;
            _this.gender = _this.targetInfo.gender;
            _this.level = _this.targetInfo.level;
            _this.followNum = _this.targetInfo.followNum;
            _this.fanNum = _this.targetInfo.fanNum;
            if (_this.targetInfo.intro == '') {
                _this.intro = '这个人啥都没写ε=ε=ε=(~￣▽￣)~';
            } else {
                _this.intro = _this.targetInfo.intro;
            }
            // 如果是访问自己的个人空间则不显示contactBar
            if (_this.targetInfo.username != _this.$store.state.userInfo.username) {
                _this.isContactBarShow = true;
            }
            // 判断该用户自己是否关注
            getFollowRelation({follower: this.$store.state.userInfo._id, followee: this.targetInfo._id}).then(res => {
                if (res) {
                    _this.isFollow = true;
                } else {
                    _this.isFollow = false;
                }
                this.$store.commit('setIsLoading', false);
            });
        });
    }
}
</script>

<style scoped>
p {
    margin: 0;
    padding: 0;
}

#background-container {
    position: relative;
    top: 0;
    background-image: radial-gradient(rgba(255, 180, 120, 1) 5%, rgba(255, 180, 120, 1) 5%, rgba(255, 126, 103, 1) 90%);

    width: 100%;
    min-height: 200px;
}

#infoPanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-top: 55px;
    padding-bottom: 15px;

    text-align: center;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
    color: #fafafa;
}

#infoPanel img:nth-child(1) {
    width: 55px;
    height: 55px;
    border: 1px solid #fafafa;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
}

#infoPanel div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 15px;
}

#infoPanel div:nth-child(2) p {
    margin: 0;
    padding: 1px 0px 1px 0px;
    
    font-size: 18px;
    font-weight: bold;
    max-width: 205px;
    overflow: hidden;
    text-overflow: ellipsis;
}

#infoPanel div:nth-child(2) img {
    width: 17px;
    height: 17px;
    padding: 1px;
    margin-left: 10px;
    border: 0.5px solid #fafafa;
    border-radius: 100%;
    background-color: rgba(255, 126, 103, 1);
}

#infoPanel p:nth-child(3) {
    display: flex;
    margin-top: 10px;

    font-size: 14px;
}

#infoPanel p:nth-child(3) span {
    padding: 0 10px 0 10px;
}

#infoPanel p:nth-child(4) {
    padding: 0 20px 0 20px;
    margin-top: 10px;

    /* word-wrap: break-word; */
    word-break: break-all;
    font-size: 14px;
}

#postPanel {
    margin-top: 20px;
}

#contactBar {
    position: fixed;
    bottom: 0;

    display: flex;

    width: 100%;
    height: 46px;
    background-color: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
}

#contactBar button {
    flex: 1;
    outline: none;
    border: none;

    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #fafafa;
    font-size: 16px;
    color: #909399;
}

#contactBar button:nth-child(1) {
    border-right: 1.5px solid rgba(0, 0, 0, 0.1);
}
</style>