<template>
    <div id="findUser">
        <div id="findPanel">
            <div id="searchPanel">
                <input type="search" name="" id="" maxlength="25" v-model="searchKey">
                <img src="@/assets/img/common/search_c.svg" alt="" @click="searchUser">
            </div>
            <li v-for="(user, index) in findList" :key="user.username" v-show="isDisplay(index)">
                <img :src="user.avatarUrl" alt="">
                <p>{{ user.username }}</p>
            </li>
            <hr v-show="isFlip">
            <div id="pageSorter" v-show="isFlip">
                <img src="@/assets/img/common/left_circle_c.svg" alt="" @click="PgUp">
                <p>{{ pageNum }}</p>
                <img src="@/assets/img/common/right_circle_c.svg" alt="" @click="PgDn">
            </div>
            <P id="noExistHint" v-show="!isExist">该用户不存在(⊙ˍ⊙)</P>
        </div>
        <div id="recommendPanel">
            <label>推荐用户</label>
            <hr>
            <li v-for="(user) in recommendList" :key="user.username">
                <img :src="user.avatarUrl" alt="">
                <p>{{ user.username }}</p>
            </li>
        </div>
        <title-bar :backImgPath="require('@/assets/img/common/left_c.svg')" :menuImgPath="require('@/assets/img/common/menu_c.svg')" title="查找用户" titleColor="rgba(255, 126, 103, 1)" bgColor="rgba(255,255,255,1)" :isShadow="true"></title-bar>
    </div>
</template>

<script>
import { getSearchResults, getRecommendUsers } from '@/network/sundries';
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
            findTempList: [],
            isExist: true,
            isFlip: false,
            pageNum: 1,
            recommendList: [],
        }
    },
    computed: {
        // 通过computed属性来实现数据的实时刷新
        findList: {
            get () {
                return this.findTempList;
            }
        },
        // 符合条件的li才会被显示出来，以达到分页的效果
        isDisplay: {
            get () {
                let _this = this;
                // 返回一个函数得以在调用时传递参数
                return function (index) {
                    let place = index+1;
                    return ( ( place/10 < _this.pageNum && place/10 > _this.pageNum-1 ) || place/10 == _this.pageNum );
                };
            }
        }
    },
    methods: {
        PgUp () {
            if (this.pageNum > 1) {
                this.pageNum --;
            }
        },
        PgDn () {
            if (this.pageNum < (parseInt(this.findList.length/10)+1)) {
                this.pageNum ++;
            }
        },
        searchUser () {
            let _this = this;
            if (this.searchKey != '') {
                getSearchResults(this.searchKey).then(res => {
                    // 如果查询无结果
                    if (res.length == 0) {
                        _this.isExist = false;
                        _this.isFlip = false;
                    } else {
                        _this.isExist = true;
                        // 大于10个则分页
                        if (res.length > 10) {
                            _this.isFlip = true;
                            _this.pageNum = 1;
                        } else {
                            _this.isFlip = false;
                        }
                    }
                    let resAfterFiltration = [];
                    for (let i=0; i<res.length; i++) {
                        res[i].avatarUrl = require('@/assets/img/common/visitor.svg');
                        resAfterFiltration.push(res[i]);
                    }
                    _this.findTempList = resAfterFiltration;
                });
            } else {
                _this.isExist = true;
                _this.isFlip = false;
                _this.findTempList = [];
            }
        }
    },
    watch: {
        // watch监听的回调函数最好不要写成箭头函数不然this无法指定vm实例
        'searchKey': function (newVal) {
            let _this = this;
            if (newVal != '') {
                getSearchResults(newVal).then(res => {
                    // 如果查询无结果
                    if (res.length == 0) {
                        _this.isExist = false;
                        _this.isFlip = false;
                    } else {
                        _this.isExist = true;
                        // 大于10个则分页
                        if (res.length > 10) {
                            _this.isFlip = true;
                            _this.pageNum = 1;
                        } else {
                            _this.isFlip = false;
                        }
                    }
                    let resAfterFiltration = [];
                    for (let i=0; i<res.length; i++) {
                        res[i].avatarUrl = require('@/assets/img/common/visitor.svg');
                        resAfterFiltration.push(res[i]);
                    }
                    _this.findTempList = resAfterFiltration;
                });
            } else {
                _this.isExist = true;
                _this.isFlip = false;
                _this.findTempList = [];
            }
        }
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

#findPanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    /* height: 300px; */
    margin-top: 25px;
    padding-top: 15px;
    padding-bottom: 10px;
    
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#searchPanel {
    display: flex;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    height: 35px;
    margin-bottom: 15px;
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

#recommendPanel hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    margin: 0;
    margin-bottom: 10px;
}

#findPanel hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    margin-top: 15px;
    margin-bottom: 0;
}

#pageSorter {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
}


#pageSorter img {
    width: 25px;
    height: 25px;
}

#pageSorter p {
    margin: 0;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    color: rgba(255, 126, 103, 1);
}

#noExistHint {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    color: #909399;
}
</style>