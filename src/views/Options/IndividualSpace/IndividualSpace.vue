<template>
    <div>
        <div id="background-container">
            <div id="infoPanel">
                <img :src="avatarUrl" alt="">
                <div> {{ username }} <img :src="genderImgUrl" alt=""> </div>
                <p>
                    <span>Lv: {{ level }}</span>|
                    <span>关注: {{ followNum }}</span>|
                    <span>粉丝: {{ fanNum }}</span>
                </p>
                <p>简介: {{ intro }}</p>
            </div>
        </div>
        <div id="postPanel"></div>
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="require('@/assets/img/common/menu_w.svg')" title="" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 0)" :isShadow="false"></title-bar>
    </div>
</template>

<script>
import { getInfo } from '@/network/sundries';
import TitleBar from '@/components/common/TitleBar';
export default {
    name: 'IndividualSpace',
    components: {
        TitleBar
    },
    data () {
        return {
            avatarUrl: '',
            username: '',
            gender: '',
            level: 0,
            followNum: 0,
            fanNum: 0,
            intro: '这个人什么都没有写ε=ε=ε=(~￣▽￣)~'
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
        }
    },
    watch: {
        
    },
    methods: {
    
    },
    created () {
        let _this = this;
        this.$store.commit('setIsLoading', true);
        let targetName = this.$route.params.targetName;
        let targetInfo = {};
        getInfo(targetName).then(res => {
            this.$store.commit('setIsLoading', false);
            targetInfo = res;
            _this.avatarUrl = targetInfo.avatarUrl;
            _this.username = targetInfo.username;
            _this.gender = targetInfo.gender;
            _this.level = targetInfo.level;
            _this.followNum = targetInfo.followNum;
            _this.fanNum = targetInfo.fanNum;
            if (targetInfo.intro == '') {
                _this.intro = '这个人啥都没写ε=ε=ε=(~￣▽￣)~';
            } else {
                _this.intro = targetInfo.intro;
            }
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
    font-size: 17px;
    font-weight: bold;
}

#infoPanel div:nth-child(2) img {
    width: 17px;
    height: 17px;
    padding: 1px;
    margin-left: 6px;
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
</style>