<template>
    <div id="explore">
        <div id="searchPanel">
            <input type="search" name="" id="">
            <img src="@/assets/img/common/search_c.svg" alt="">
        </div>
        <nav-bar></nav-bar>
        <div id="postsPanel">
            <posts-item v-for="(item) in list" :key="item"></posts-item>
        </div>
        <float-bar></float-bar>
		<tab-bar></tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/content/TabBar/TabBar';
import FloatBar from '@/components/content/FloatBar/FloatBar';
import NavBar from './NavBar';
import PostsItem from './PostsItem';
export default {
    name: 'Explore',
    components: {
        NavBar,
        PostsItem,
        TabBar,
		FloatBar
    },
    data () {
        return {
            list: [1, 2, 3, 4, 5]
        }
    },
    created () {

    },
}
</script>

<style scoped>
#explore {
    width: 100%;
    padding-top: 55px;
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
    border: 1px solid rgba(255, 126, 103, 1);
    /* border-left: 5px solid rgba(255, 126, 103, 1); */
    border-radius: 4px;
    
    
    padding-left: 10px;
    padding-right: 10px;

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#searchPanel img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    background-color: #fafafa;
    width: 35px;
    height: 35px;
    padding: 1px;
    margin-left: 10px;
    border: 1px solid rgba(255, 126, 103, 1);
    border-radius: 5px;

    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
}

#postsPanel {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 95%;
    margin-top: 5px;
    margin-bottom: 10px;
}
</style>