/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');
//  window.Vue = require('vue');
 import Vue from 'vue';
 import App from './App.vue';
 import VueAxios from 'vue-axios';
 import Vuex from 'vuex';
 import VueRouter from 'vue-router';
 import axios from 'axios';
 import { routes } from './routes';
 import StoreData from './store';


 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */

 Vue.use(VueRouter);
 Vue.use(VueAxios, axios);
 Vue.use(Vuex);



 const store = new Vuex.Store(StoreData);

 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });



 router.beforeEach((to,from,next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);


    const currentUser = store.state.currentUser;
    console.log('requiresAuth',currentUser);

    if(requiresAuth && !currentUser){
       next('/login');
    }else if(to.path == '/login' && currentUser){
        next('/');
    }else{
        next();

    }

 });

 const app = new Vue({
     el: '#app',
     router: router,
     store,
     render: h => h(App),
 });

