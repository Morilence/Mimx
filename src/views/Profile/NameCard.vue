<template>
    <div id="nameCard">
        <div id="essentialInfo">
            <input type="file" name="image" accept="image/*" @change="onChange($event)">
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
            <li @click="showList('/sundries/followList')">
                <p>{{ followNum }}</p>
                <p>关注</p>
            </li>|
            <li @click="showList('/sundries/collectList')">
                <p>{{ collectNum }}</p>
                <p>收藏</p>
            </li>|
            <li @click="showList('/sundries/fanList')">
                <p>{{ fanNum }}</p>
                <p>粉丝</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { getInfo } from '@/network/sundries';
import { changeAvatar } from '@/network/profile';
import { compress, dataURLtoFile } from '@/common/utils';
export default {
    name: 'NameCard',
    components: {
        
    },
    data () {
        return {
            avatarUrl: '',
            username: '',
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
        onChange (e) {
            let _this = this;
            const file = e.target.files[0];
            // 防止用户放弃改换图片而导致获取文件为空
            if (file != null) {
                if (file.size > 30*1024*1024) {
                    // alert('文件过大，请选择大小低于30M的图片！');
                    this.$tinyToast({content: 'The file is too big, please upload a picture smaller than 30M!', duration: 2000});
                    return ;
                }
                // 开始显示加载视图
                this.$store.commit('setIsLoading', true);
                let n = 1;
                let avatar = file;
                if (avatar.size <= 100*1024) {
                    n = 2;
                } else if (avatar.size > 100*1024 && avatar.size <= 1*1024*1024) {
                    n = 3.5;
                } else if (avatar.size > 1*1024*1024 && avatar.size <= 3*1024*1024) {
                    n = 4;
                } else if (avatar.size > 3*1024*1024 && avatar.size <= 5*1024*1024) {
                    n = 4.5;
                } else if (avatar.size > 5*1024*1024 && avatar.size <= 7*1024*1024) {
                    n = 5;
                } else if (avatar.size > 7*1024*1024 && avatar.size <= 9*1024*1024) {
                    n = 5.5;
                } else if (avatar.size > 9*1024*1024 && avatar.size <= 11*1024*1024) {
                    n = 6;
                } else if (avatar.size > 11*1024*1024 && avatar.size <= 13*1024*1024) {
                    n = 6.5;
                } else if (avatar.size > 13*1024*1024 && avatar.size <= 15*1024*1024) {
                    n = 7;
                } else if (avatar.size > 15*1024*1024 && avatar.size <= 17*1024*1024) {
                    n = 7.5;
                } else if (avatar.size > 17*1024*1024 && avatar.size <= 19*1024*1024) {
                    n = 8;
                } else if (avatar.size > 19*1024*1024 && avatar.size <= 21*1024*1024) {
                    n = 8.5;
                } else {
                    n = 10;
                }
                compress(avatar, n).then(res => {
                    avatar = dataURLtoFile(res, _this.$store.state.userInfo._id + '.png');
                    console.log('Size of Img: ', avatar.size);
                    // 调用同一实例内的methods方法需要加上this.$options.methods前缀（其中this指向实例）
                    _this.$options.methods.uploadImg.bind(_this)(avatar); // 为uploadImg函数绑定this指向vm实例
                });
            }
        },
        uploadImg (fileObj) {
            let _this = this;
            let formData = new FormData();
            formData.append('_id', this.$store.state.userInfo._id);
            formData.append('avatar', fileObj);
            changeAvatar(formData).then(res => {
                // 添加时间戳使每次路径请求不同而防止从缓存获取
                let newUserInfo = _this.$store.state.userInfo;
                newUserInfo.avatarUrl = res + '?timestamp=' + (new Date().getTime());
                _this.$store.commit('setUserInfo', newUserInfo);
                _this.avatarUrl = _this.$store.state.userInfo.avatarUrl;
                // 完成后关闭加载视图
                _this.$store.commit('setIsLoading', false);
                this.$tinyToast({content: 'Upload successfully.', duration: 2000});
                console.log('Upload successfully: ', _this.avatarUrl);
            });
        },
        showList (path) {
            this.$router.push(path);
        }
    },
    computed: {
        
    },
    watch: {
    
    },
    created () {
        let _this = this;
        this.$store.commit('setIsLoading', true);
        // 先拿第一次获取的userInfo进行预加载
        this.username = this.$store.state.userInfo.username;
        this.avatarUrl = this.$store.state.userInfo.avatarUrl;
        this.level = this.$store.state.userInfo.level;
        this.issueNum = this.$store.state.userInfo.issueNum;
        this.followNum = this.$store.state.userInfo.followNum;
        this.collectNum = this.$store.state.userInfo.collectNum;
        this.fanNum = this.$store.state.userInfo.fanNum;
        // 每次打开NameCard都进行信息更新
        getInfo(this.$store.state.userInfo.username).then(res => {
            _this.$store.commit('setIsLoading', false);
            _this.$store.commit('setUserInfo', res);
            _this.username = _this.$store.state.userInfo.username;
            _this.avatarUrl = _this.$store.state.userInfo.avatarUrl;
            _this.level = _this.$store.state.userInfo.level;
            _this.issueNum = _this.$store.state.userInfo.issueNum;
            _this.followNum = _this.$store.state.userInfo.followNum;
            _this.collectNum = _this.$store.state.userInfo.collectNum;
            _this.fanNum = _this.$store.state.userInfo.fanNum;
        });
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