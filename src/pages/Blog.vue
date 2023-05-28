<script>
import axios from 'axios';

export default {
  name: 'AppBlog',
  
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.apiUrls.projects)
        .then((response) => {
          console.log(response);
          this.projects = response.data.results;
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
  <h1>questa e' AppBlog</h1>
  <div class="container">
    <div class="row my-4 gy-4">
      <div class="col col-md-3" v-for="project in projects">
        <div class="card">
          <img class="card-img-top" alt="..." v-if="project.image">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description.substring(0, 200) + '..' }}</p>
            <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">
              leggi!
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>