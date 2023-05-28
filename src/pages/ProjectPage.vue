<script>
import axios from 'axios';

export default {
    name: 'ProjectPage',

    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    method: {
        getProject() {
            axios.get(this.apiBaseUrl = this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                })
              .catch((error) => {
                console.log(error);
                    this.isError = true;
                    this.errorMessage = error.message;
              })  
        }
    },
    created() {
        this.getProject();
    }
}

</script>

<template>
    <h1> project </h1>
    <h1></h1>

    <p></p>
</template>

<style lang="scss" scoped></style>