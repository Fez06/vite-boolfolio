<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import { RouterView } from 'vue-router';

export default {
    name: 'App',

    data() {
      return {
        apiBaseUrl: 'http://127.0.0.1:8000/api',
        apiUrls: {
          projects: '/projects'
        },
        projects:[]
      }
    },

    components: {
    AppHeader,
    AppMain,
    AppFooter,
    RouterView
},

    methods: {
      getProjects() {
        axios.get(this.apiBaseUrl + this.apiUrls.projects)
        .then((response) => {
          this.projects = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
      }
    },

    created() {
      this.getProjects();
    }
}
</script>

<template>
    <div>
        <AppHeader/>
        <router-view></router-view>
        <AppMain :data="projects"/>
        <AppFooter/>
    </div>
</template>

<style lang="scss" scoped>
   
</style>
