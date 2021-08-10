<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-bottom:20px;">
        <div class="collapse navbar-collapse">
            <div class="navbar-nav">
              <h2 style="color:#fff;">{{welcome}}</h2>

            <template v-if="current_user">
            <router-link to="/" class="nav-item nav-link">Products List</router-link>
            <router-link to="/create" class="nav-item nav-link">Create Product</router-link>
            <router-link to="/users" class="nav-item nav-link">Users</router-link>
            <router-link to="/customers" class="nav-item nav-link">Customers</router-link>
            <a id="logoutnav" href="#" role="button" class="nav-link">{{current_user.name}} <span class="caret"></span> </a>
            <a href="#!" @click.prevent="logout"  class="nav-link">Log Out</a>
            </template>
            <template v-else>
            <router-link to="/login" style="float:right;" class="nav-item nav-link pull-right">Login</router-link>
            <router-link to="/register" style="float:right;" class="nav-item nav-link pull-right">Rgister</router-link>
            </template>
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
            },
            current_user(){
                return this.$store.getters.currentUser;
            }
        },
        methods:{
            logout(){
                this.$store.commit('logout');
                this.$router.push('/login');

            }
        }
    }
</script>
