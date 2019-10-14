<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import FindUser from '@/views/Sundries/FindUser';
import Write from '@/views/Sundries/Write';
export default {
    name: 'Sundries',
    components: {
        FindUser,
        Write
    }
}
</script>

<style scoped>

</style>