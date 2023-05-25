<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import AppFooter from './AppFooter.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
}
</script>

<template>
    <div>
        <AppHeader/>
        <AppMain/>
        <AppFooter/>
    </div>
</template>

<style lang="scss" scoped>
   
</style>