<template>
    <div id="tabBarContainer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBarContainer'
}
</script>

<style scoped>
#tabBarContainer {
    display: flex;
    /* background-color: #fff; */
    background-color: #fafafa;

    height: 48px;
    width: 260px;
    border: none;
    border-radius: 5px;

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;

    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>