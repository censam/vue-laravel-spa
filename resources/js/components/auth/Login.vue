<template>
<div class="login row justify-content-center">
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
                <form @submit.prevent="authenticate">
                    <div class="form-group row">
                        <label for="email">Email</label>
                        <input type="email" name="email" v-model="form.email" class="form-control" placeholder="Email Address">
                    </div>

                    <div class="form-group row">
                        <label for="password">Password</label>
                        <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Email Address">
                    </div>

                    <div class="form-group row">
                        <input type="submit"  class="form-control" value="Login">
                    </div>

                    <div class="form-group row" v-if="authError">
                       <span class="error-msg">{{authError}}</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import {login} from  '../../helpers/auth'
export default{
name:"Login",
data(){
    return{
        form:{
            email:'',
            password:''
        },
        error:null
    }
},
methods: {
    authenticate(){
        this.$store.dispatch('login'); //dispact for handle multiple function  like login success or login fail
        login(this.$data.form)
        .then((res) =>{
            this.$store.commit('loginSuccess',res);
            this.$router.push({path:'/'});
        }).catch((error)=>{
            this.$store.commit('loginFailed',error);
        });
    }
},
computed:{
    authError(){
        return this.$store.getters.authError;
    }
}
}
</script>

<style scoped>
.error-msg{
    padding: 5px;
    background-color: rgb(211, 202, 199);
    color: red;
    width: 100%;
    font-weight: 900;
}
</style>
