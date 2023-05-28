<script>


export default {
    name: 'AppAbout',
    props: {
        data: Object
    },

    data() {
      return {
       
      }
    },

   
}
</script>

<template>
   <h1>questa e' AppAbout</h1>
   <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-3"  v-for="project in data">
                    <div class="card">
                        <img class="card-img-top" alt="..." v-if="project.image">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.description.substring(0,200) + '..' }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
   
</style>