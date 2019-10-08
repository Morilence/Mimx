<template>
    <div id="gloveBoxContainer">
        
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
#gloveBoxContainer {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;

    width: 95%;
    height: 200px;
    border-radius: 10px;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.2);

    background-color: rgba(250, 250, 250, 0.9);
}
</style>