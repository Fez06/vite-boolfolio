
<script>
export default {
   name: 'AppHeader'
}
</script>

<template>
    <header>
        <h1>Header</h1>
        <div>
            <ul class="">
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'blog' }" class="nav-link">
                        Blog
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{ name: 'project' }" class="nav-link">
                        Project
                    </router-link>
                </li> -->
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
   
</style>