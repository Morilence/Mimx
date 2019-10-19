<template>
    <div id="options">
        <router-view></router-view>
        <ball-spin-fade-loader v-show="this.$store.state.isLoading"/>
    </div>
</template>

<script>
import BallSpinFadeLoader from '@/components/common/Loaders/BallSpinFadeLoader';
import IndividualSpace from '@/views/Options/IndividualSpace/IndividualSpace';
import EssentialInfo from '@/views/Options/EssentialInfo/EssentialInfo';
import AccountSecurity from '@/views/Options/AccountSecurity/AccountSecurity';
import Settings from '@/views/Options/Settings/Settings';
import About from '@/views/Options/About/About';
import Sponsor from '@/views/Options/Sponsor/Sponsor';
export default {
    name: 'Options',
    components: {
        BallSpinFadeLoader,
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