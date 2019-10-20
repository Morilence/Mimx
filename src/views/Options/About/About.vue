<template>
    <div id="about">
        <div id="logoPanel">
            <p>MIMX</p>
        </div>
        <ul>
            <li>
                <p><span>产品名称</span><span>Mimx</span></p>
            </li>
            <hr>
            <li>
                <p><span>当前版本</span><span>0.10 Beta/Preview</span></p>
            </li>
            <hr>
            <li>
                <p><span>开发人员</span><span>Morilence</span></p>
            </li>
            <hr>
            <li>
                <p><span>赞助企业</span><span>枫华科技</span></p>
            </li>
            <hr>
            <li>
                <p>意见反馈</p>
                <div>

                </div>
            </li>
        </ul>
        <button @click.self="unfold('/options/sponsor')">无偿资助开发者</button>
        <title-bar :backImgPath="require('@/assets/img/common/left_w.svg')" :menuImgPath="require('@/assets/img/common/menu_w.svg')" title="关于" titleColor="#fafafa" bgColor="rgba(255, 126, 103, 1)" :isShadow="true"></title-bar>
    </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar';
export default {
    name: '',
    components: {
        TitleBar
    },
    data () {
        return {

        }
    },
    methods: {
        unfold (path) {
            this.$router.push(path);
        },
    }
}
</script>

<style scoped>
#about {
    margin-top: 65px;
}

#logoPanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    padding-top: 20px;
    padding-bottom: 5px;
}

#logoPanel P {
    color: rgba(255, 126, 103, 1);
    text-align: center;
    font-size: 55px;
    font-weight: 900;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
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

li p span:nth-child(2) {
    font-size: 14px;
    color: #909399;
}

li div {
    display: none;

    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    min-height: 80px;
    background-color: #fff;

    color: #909399;
    font-size: 12px;
}

hr {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin: 0;
    width: 95%;
}

button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    color: rgba(255, 126, 103, 1);
    font-weight: bold;
}

</style>