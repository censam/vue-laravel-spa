import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Login from './components/auth/Login.vue';
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
    }
];
