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
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                })
                .catch((error) => {
                    console.log(error);

                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }

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
    <div v-if="project">
        <h1> project </h1>
        <h1>{{ project.title }}</h1>
        <h3 v-if="project.type">{{ project.type.name }}</h3>
        <ul>
            <li v-for="technology in project.technologies">
                <h5>{{ technology.name }}</h5>
            </li>
        </ul>
        <p>{{ project.description }}</p>
        <div v-if="project.image">{{ project.image }}</div>
    </div>
</template>

<style lang="scss" scoped></style>