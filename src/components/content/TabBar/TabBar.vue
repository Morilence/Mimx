<template>
    <div id="tabBar">
        <tab-bar-container>
            <tab-bar-item path="/main/chat">
                <img slot="item-icon" src="@/assets/img/TabBar/chat.svg" alt="">
                <img slot="item-icon-active" src="@/assets/img/TabBar/chat_active.svg" alt="">
                <p slot="item-text">Chat</p>
            </tab-bar-item>
            <div class="tabBarBtn">
                <img :src="fireImgUrl" alt="" @click="switchGloveBox">
            </div>
            <tab-bar-item path="/main/explore">
                <img slot="item-icon" src="@/assets/img/TabBar/explore.svg" alt="">
                <img slot="item-icon-active" src="@/assets/img/TabBar/explore_active.svg" alt="">
                <p slot="item-text">Explore</p>
            </tab-bar-item>
        </tab-bar-container>
    </div>
</template>

<script>
import TabBarContainer from '@/components/content/TabBar/TabBarContainer';
import TabBarItem from '@/components/content/TabBar/TabBarItem';

export default {
    name: 'TabBar',
    components: {
        TabBarContainer,
        TabBarItem
    },
    data () {
        return {
            fireImgUrl: require('@/assets/img/TabBar/create.svg')
        }
    },
    // 监听GloveBox的显示情况来决定火焰图标的显示
    computed: {
        isGloveBoxDisplay () {
            return this.$store.state.isGloveBoxDisplay;
        }
    },
    watch: {
        isGloveBoxDisplay (newVal) {
            if (newVal) {
                this.fireImgUrl = require('@/assets/img/TabBar/create_active.svg');
            } else {
                this.fireImgUrl = require('@/assets/img/TabBar/create.svg');
            }
        }
    },
    methods: {
        switchGloveBox () {
            if (this.$store.state.isGloveBoxDisplay) {
                this.$store.commit('setIsGloveBoxDisplay', false);
            } else {
                this.$store.commit('setIsGloveBoxDisplay', true);
            }
        }
    },
    created () {
        if (this.$store.state.isGloveBoxDisplay) {
            this.fireImgUrl = require('@/assets/img/TabBar/create_active.svg');
        } else {
            this.fireImgUrl = require('@/assets/img/TabBar/create.svg');
        }
    }
}
</script>

<style scoped>
.tabBarBtn {
    /* flex: 1; */
    position: relative;
    bottom: 20px;

    height: 75px;
    width: 75px;
    border: none;
    border-radius: 75px;
    background-color: #fafafa;

    color: rgba(96, 98, 102, 1);
    font-size: 12px;
    text-align: center;
}
.tabBarBtn img {
    margin-top: 4px;
    width: 65px;
    height: 65px;
    vertical-align: middle;
}
</style>