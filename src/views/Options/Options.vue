<template>
    <div id="options">
        <router-view></router-view>
    </div>
</template>

<script>
import IndividualSpace from '@/views/Options/IndividualSpace/IndividualSpace';
import EssentialInfo from '@/views/Options/EssentialInfo/EssentialInfo';
import AccountSecurity from '@/views/Options/AccountSecurity/AccountSecurity';
import Settings from '@/views/Options/Settings/Settings';
import About from '@/views/Options/About/About';
import Sponsor from '@/views/Options/Sponsor/Sponsor';
export default {
    name: 'Options',
    components: {
        IndividualSpace,
        EssentialInfo,
        AccountSecurity,
        Settings,
        About,
        Sponsor
    }
}
</script>

<style scoped>

</style>