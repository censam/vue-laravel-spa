import Login from './components/auth/Login.vue';
import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';

import CustomermersMain from './components/customers/Main';
import Customer from './components/customers/View';
import CustomerList from './components/customers/List';
import NewCustomer from './components/customers/New';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct,
        meta:{
            requiresAuth: true
        }
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'customers',
        path: '/customers',
        component: CustomermersMain,
        meta:{
            requiresAuth: true
        },
        children:[
            {
                path:'/',
                component:CustomerList
            },
            {
                path:'new',
                componenet:NewCustomer
            },
            {
                path:':id',
                component:Customer
            }
        ]
    },
];
