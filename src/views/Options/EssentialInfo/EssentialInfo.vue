<template>
    <div id="essentialInfo">
        <ul>
            <li>
                <p>账号信息</p>
            </li>
            <hr>
            <li>
                <p><span>昵称</span><input type="text" v-model="username" :readonly="isEdit ? false:'readonly'" maxlength="25"></p>
            </li>
            <hr>
            <li>
                <p><span>ID</span><input type="text" v-model="id" readonly="readonly"></p>
            </li>
            <hr>
            <li>
                <p><span>等级</span><input type="text" v-model="level" readonly="readonly"></p>
            </li>
        </ul>

        <ul>
            <li>
                <p>个人信息</p>
            </li>
            <hr>
            <li>
                <p><span>性别</span><input type="text" v-model="gender" :readonly="isEdit ? false:'readonly'" maxlength=""></p>
            </li>
            <hr>
            <li>
                <p><span>年龄</span><input type="text" oninput="value=value.replace(/[^\d]/g,'')" v-model="age" :readonly="isEdit ? false:'readonly'" maxlength=""></p>
            </li>
            <hr>
            <li>
                <p><span>邮箱</span><input type="text" v-model="email" :readonly="isEdit ? false:'readonly'" maxlength=""></p>
            </li>
        </ul>
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="editImgUrl" title="基本资料" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 1)" :isShadow="true" @onReact="judgeReact"></title-bar>
    </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar';
import { changeInfo } from '@/network/profile';
export default {
    name: '',
    components: {
        TitleBar
    },
    data () {
        return {
            isEdit: false,
            username: '',
            id: '',
            level: 0,
            gender: '',
            age: '',
            email: ''
        }
    },
    computed: {
        editImgUrl: {
            get () {
                return this.isEdit ? require('@/assets/img/common/check_w.svg') : require('@/assets/img/common/edit_w.svg');
            }
        }
    },
    methods: {
        judgeReact (isReact) {
            if (isReact == true) {
                // 开始编辑
                this.isEdit = true;
            } else {
                // 编辑完成
                this.isEdit = false;
                this.$store.commit('setIsLoading', true);
                let formData = new FormData();
                formData.append('_id', this.$store.state.userInfo._id);
                formData.append('username', this.username);
                formData.append('gender', this.gender);
                formData.append('age', this.age);
                formData.append('email', this.email);
                this.$options.methods.uploadInfo.bind(this)(formData);
            }
            // console.log('EssentialInfo:', this.isEdit);
        },
        uploadInfo (formData) {
            let _this = this;
            changeInfo(formData).then(res => {
                _this.$store.commit('setIsLoading', false);
                if (res == 1) {
                    // 1表示修改成功
                    let newUserInfo = _this.$store.state.userInfo;
                    newUserInfo.username = formData.get('username');
                    newUserInfo.gender = formData.get('gender');
                    newUserInfo.age = formData.get('age');
                    newUserInfo.email = formData.get('email');
                    _this.$store.commit('setUserInfo', newUserInfo);
                    // 方便用户帮其把用户名的登陆记忆给改成新用户
                    if (localStorage.getItem('isRemUP') == 'true') {
                        localStorage.setItem('unm', newUserInfo.username);
                    }
                    this.$tinyToast({content: 'Modify successfully.', duration: 2000});
                } else {
                    if (res == -1) {
                        // alert('修改失败（用户名已存在）！');
                        this.$tinyToast({content: 'Modify failed! (username already exists)', duration: 2000});
                    } else {
                        // alert('修改失败（未知错误）！');
                        this.$tinyToast({content: 'Modify failed! (unknown error)', duration: 2000});
                    }
                    _this.username = _this.$store.state.userInfo.username;
                    _this.gender = _this.$store.state.userInfo.gender;
                    _this.age = _this.$store.state.userInfo.age;
                    _this.email = _this.$store.state.userInfo.email;
                }
            });
        }
    },
    created () {
        this.username = this.$store.state.userInfo.username;
        this.id = this.$store.state.userInfo._id;
        this.level = this.$store.state.userInfo.level;
        this.gender = this.$store.state.userInfo.gender;
        this.age = this.$store.state.userInfo.age;
        this.email = this.$store.state.userInfo.email;
    }
}
</script>

<style scoped>
#essentialInfo {
    margin-top: 65px;
}

ul {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    margin-top: 15px;
    margin-bottom: 10px;
    /* 开启BFC */
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

li {
    margin-top: 12px;
    margin-bottom: 12px;
}

li:nth-child(1) {
    font-weight: bold;
    font-size: 17px;
}

li p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;

    font-size: 16px;
    color: #606266;
}

li p span:nth-child(1) {
    white-space: nowrap;
    color: #909399;
}

li p input {
    width: 100%;
    padding-left: 15px;
    border: none;
    outline: none;

    text-align: right;
    color: #606266;
}

hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin: 0;
    width: 95%;
}
</style>