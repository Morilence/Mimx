<template>
    <div id="chat">
        <div id="noticePanel">
            <div></div>
            <img src="@/assets/img/chat/room.svg" alt="">
        </div>
        <div id="searchPanel">
            <img src="@/assets/img/chat/friends.svg" alt="">
            <input type="search" name="" id="">
            <img src="@/assets/img/common/search_c.svg" alt="">
        </div>
        <div id="messagePanel">
            <message-item v-for="(item) in list" :key="item">
                
            </message-item>
        </div>
        <float-bar></float-bar>
		<tab-bar></tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/content/TabBar/TabBar';
import FloatBar from '@/components/content/FloatBar/FloatBar';
import MessageItem from './MessageItem';
export default {
    name: 'Chat',
    components: {
        MessageItem,
        TabBar,
		FloatBar
    },
    data () {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    created () {

    },
}
</script>

<style scoped>
#chat {
    padding-top: 55px;
    width: 100%;
}

#noticePanel {
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    height: 50px;
    /* border: 1px solid red; */
}

#noticePanel div {
    flex: 1;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 50px;
    border-radius: 5px;
    background-color: rgba(255, 126, 103, 1);

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#noticePanel img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 50px;
    height: 50px;
    padding: 2px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: rgba(255, 126, 103, 1);

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#searchPanel {
    display: flex;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    height: 50px;
    margin-top: 10px;
}

#searchPanel img:nth-child(1) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    background-color: rgba(255, 126, 103, 1);
    width: 35px;
    height: 35px;
    padding: 1px;
    border-radius: 5px;

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#searchPanel img:nth-child(3) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    background-color: #fafafa;
    width: 35px;
    height: 35px;
    padding: 1px;
    margin-left: 10px;
    border: 1px solid rgba(255, 126, 103, 1);
    border-radius: 2px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#searchPanel input {
    flex: 1;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 35px;
    border: none;
    outline: none;
    border: 1px solid rgba(255, 126, 103, 1);
    border-left: 5px solid rgba(255, 126, 103, 1);
    border-top-right-radius: 2px;
    border-top-right-radius: 2px;
    
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#messagePanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>