import axios from "axios";
import { getLocalUser } from "./helpers/auth";

const user =  getLocalUser();

export default{
    state:{
        welcome:'Hello',
        currentUser:user,
        isLoggedIn:!!user,
        loading:false,
        auth_error:null,
        customers:[]
    },
    mutations:{
        login(state){
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state,payload){
            state.auth_error = null;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.currentUser = Object.assign({},payload.user,{token:payload.access_token});

            localStorage.setItem('user',JSON.stringify(state.currentUser));
        },
        loginFailed(state,payload){
            console.log(payload);
            state.loading = false;
            state.auth_error = payload;
        },
        logout(state){
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;

        },
        updateCustomers(state,payload){
            state.customers = payload;
            console.log(state);

        }

    },
    getters:{
        isLoading(state){
            return state.loading;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        currentUser(state){
            return state.currentUser;
        },
        authError(state){
            return state.auth_error;
        },
        customers(state){
            return state.customers;
        },
        welcome(state){
            return state.welcome;
        }
    },
    actions:{
        login(context){
            context.commit('login');

        },
        getCustomers(context){
            axios.get('/api/customers',{
                headers:{
                    "Authorization" :  `Bearer ${context.state.currentUser.token}`
                }
            })
            .then((response)=>{
                console.log( response.data);

                context.commit('updateCustomers', response.data.customers )
            });
        }
    }
}
