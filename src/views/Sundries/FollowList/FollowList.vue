<template>
    <div>
        <ul id="followList">
            <li v-for="(user, index) in followList" :key="user.username" v-show="isDisplay(index)" @click="visit(user.username)">
                <img :src="user.avatarUrl" alt="">
                <p>{{ user.username }}</p>
            </li>
            <hr v-show="isFlip">
            <div id="pageSorter" v-show="isFlip">
                <img src="@/assets/img/common/left_circle_c.svg" alt="" @click="PgUp">
                <p>{{ pageNum }}</p>
                <img src="@/assets/img/common/right_circle_c.svg" alt="" @click="PgDn">
            </div>
            <P id="noExistHint" v-show="!isExist">没有关注任何用户哦(⊙ˍ⊙)</P>
        </ul>
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="require('@/assets/img/common/menu_w.svg')" title="关注" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
    </div>
</template>

<script>
import { getFollowList } from '@/network/profile';
import TitleBar from '@/components/common/TitleBar';
export default {
    name: '',
    components: {
        TitleBar
    },
    data () {
        return {
            followList: [],
            isFlip: false,
            pageNum: 1,
        }
    },
    computed: {
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
        },
        isExist: {
            get () {
                let _this = this;
                return _this.followList.length == 0 ? false : true;
            }
        }
    },
    methods: {
        visit (userame) {
            this.$router.push({
                // 在定义路由时需要指定name，否则则无法传递参数
                name: 'IndividualSpace',
                path: '/options/individualSpace',
                params: {
                    targetName: userame
                }
            });
        },
        PgUp () {
            if (this.pageNum > 1) {
                this.pageNum --;
            }
        },
        PgDn () {
            if (this.pageNum < (parseInt(this.followList.length/10)+1)) {
                this.pageNum ++;
            }
        },
    },
    created () {
        let _this = this;
        this.$store.commit('setIsLoading', true);
        getFollowList(this.$store.state.userInfo._id).then(res => {
            this.$store.commit('setIsLoading', false);
            if (res.length > 10) {
                _this.isFlip = true;
            } else {
                _this.isFlip = false;
            }
            _this.followList = res;
        });
    },
}
</script>

<style scoped>
#followList {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    /* height: 300px; */
    margin-top: 65px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    
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

hr {
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
    margin-bottom: 5px;
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
    font-weight: bold;
    color: rgba(255, 126, 103, 1);
}

#noExistHint {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #909399;
}
</style>