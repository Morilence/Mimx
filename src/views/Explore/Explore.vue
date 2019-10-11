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
        <div id="endHint">
            已经到底啦(￣▽￣)""
        </div>
        <float-bar></float-bar>
        <glove-box></glove-box>
		<tab-bar></tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/content/TabBar/TabBar';
import FloatBar from '@/components/content/FloatBar/FloatBar';
import GloveBox from '@/components/content/GloveBox/GloveBox';
import NavBar from '@/views/Explore/NavBar';
import PostsItem from '@/views/Explore/PostsItem';
export default {
    name: 'Explore',
    components: {
        NavBar,
        PostsItem,
        TabBar,
        FloatBar,
        GloveBox
    },
    data () {
        return {
            list: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        
    },
    created () {

    },
    mounted () {

    },
    activated () {

   	},
  	deactivated () {

	}
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

#endHint {
    padding-bottom: 80px;
    text-align: center;
    color: #909399;
}
</style>