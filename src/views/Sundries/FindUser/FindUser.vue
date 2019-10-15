<template>
    <div id="findUser">
        <title-bar :backImgPath="require('@/assets/img/common/left_c.svg')" :menuImgPath="require('@/assets/img/common/menu_c.svg')" title="查找用户" titleColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
        <div id="findPanel">
            <div id="searchPanel">
                <input type="search" name="" id="" v-model="searchKey">
                <img src="@/assets/img/common/search_c.svg" alt="">
            </div>
        </div>
        <div id="recommendPanel">
            <label>推荐用户</label>
            <hr>
            <li v-for="(user) in recommendList" :key="user.username">
                <img :src="user.avatarUrl" alt="">
                <p>{{ user.username }}</p>
            </li>
        </div>
    </div>
</template>

<script>
import { getRecommendUsers } from '@/network/sundries';
import TitleBar from '@/components/common/TitleBar';
import { log } from 'util';
export default {
    name: '',
    components: {
        TitleBar
    },
    data () {
        return {
            searchKey: '',
            findList: [
                {
                    avatarUrl: require('@/assets/img/common/visitor.svg'),
                    username: 'Morilence',
                }
            ],
            recommendList: [],
        }
    },
    methods: {

    },
    created () {
        let _this = this;
        getRecommendUsers(5).then(res => {
            let targetNum = 5;
            let resAfterFiltration = [];
            if (res.length < targetNum) {
                targetNum = res.length;
            }
            // console.log(targetNum);
            // console.log(res);
            let flag = false;
            for (let i=0; i<targetNum; i++) {
                if (res[i].username != _this.$store.state.userInfo.username) {
                    res[i].avatarUrl = require('@/assets/img/common/visitor.svg');
                    resAfterFiltration.push(res[i]);
                } else {
                    flag = true;
                }
            }
            // 确保推荐的人数相同，若出现自己则删除直接返回，若未出现则删除最后一个以达目的
            if (flag) {
                this.recommendList = resAfterFiltration;
            } else {
                resAfterFiltration.pop();
                this.recommendList = resAfterFiltration;
            }
        });
    }
}
</script>

<style scoped>
#findUser {
    margin-top: 65px;
}

#searchPanel {
    display: flex;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    height: 35px;
}

#searchPanel input {
    flex: 1;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 35px;
    background-color: #fafafa;
    border: none;
    outline: none;
    /* border: 1px solid rgba(255, 126, 103, 1); */
    border-bottom: 1px solid rgba(255, 126, 103, 1);
    /* border-radius: 4px; */
    
    
    padding-left: 10px;
    padding-right: 10px;

    /* box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1); */
}

#searchPanel img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    /* background-color: #ffff; */
    width: 35px;
    height: 35px;
    padding: 1px;
    margin-left: 10px;
    /* border: 1px solid rgba(255, 126, 103, 1); */
    border-radius: 5px;

    /* box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1); */
}

#findPanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    /* height: 300px; */
    margin-top: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

li {
    display: flex;

    padding-left: 5px;
    padding-right: 5px;
}

li img {
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 1px solid rgba(255, 126, 103, 1);
    border-radius: 5px;
}

li p {
    margin: 0;
    padding: 15px;
    padding-left: 15px;

    color: #606266;
    /* color: rgba(255, 126, 103, 1);s */
    font-weight: bold;
}

#recommendPanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    /* height: 150px; */
    margin-top: 20px;
    padding-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#recommendPanel label {
    margin: 0;
    padding: 10px;
    padding-left: 15px;

    color: #606266;
    /* color: rgba(255, 126, 103, 1); */
    font-weight: bold;
}

hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    margin: 0;
    margin-bottom: 10px;
}
</style>