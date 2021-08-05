<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-bottom:20px;">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <h2 style="color:#fff;">{{welcome}}</h2>
                    <router-link to="/" class="nav-item nav-link">Products List</router-link>
                    <router-link to="/create" class="nav-item nav-link">Create Product</router-link>

                </div>
            </div>
        </nav>
</template>

<script>
    export default {
        name: 'navbar',
        computed:{
            welcome(){
                return  this.$store.getters.welcome
            }
        }
    }
</script>
