<template>
    <div class="tabBarItem" @click="itemClick">
        <div v-if="isActive"><slot name="item-icon-active"></slot></div>
        <div v-else><slot name="item-icon"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'rgba(255, 126, 103, 1)'
        }
    },
    data () {
        return {
            
        }
    },
    computed: {
        isActive () {
            // this.$route拿到当前活跃路由
            return ( this.$route.path.indexOf(this.path) !== -1 );
        },
        activeStyle () {
            return this.isActive ? { color: this.activeColor } : {};
        }
    },
    methods: {
        itemClick () {
            // 若this.$router.replace(this.path);替换前和替换后的路由一样则会报错
            if (this.isActive === true) {
                return;
            }
            this.$router.replace(this.path);
            this.$store.state.latestStay = this.path;
        }
    }
}
</script>

<style scoped>
.tabBarItem {
    flex: 1;

    height: 49px;

    color: rgba(96, 98, 102, 1);
    font-size: 12px;
    text-align: center;
}
.tabBarItem img {
    width: 26px;
    height: 26px;
    margin-top: 4px;
    vertical-align: middle;
}
</style>