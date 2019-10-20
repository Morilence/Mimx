<template>
    <div id="tinyToast" v-show="isShow">
        <span>{{ content }}</span>
    </div>
</template>

<script>
export default {
    name: 'TinyToast',
    props: {
    },
    data () {
        return {
            isShow: false,
            content: '',
            duration: 3000
        }
    },
    methods: {

    }
}
</script>

<style scoped>
#tinyToast {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    /* 顺序：上右下左 */
    padding: 5px 10px 5px 10px;
    border: 1px solid rgba(255, 255, 255, 1);;
    border-radius: 6px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 126, 103, 0.95);
    font-size: 14px !important;
    text-align: center !important;
    color: #fafafa !important;
}
</style>