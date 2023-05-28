<script>


import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import { RouterView } from 'vue-router';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
    RouterView
  },

}
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped></style>
