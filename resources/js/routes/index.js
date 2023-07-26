import { createRouter, createWebHistory } from 'vue-router';
 import AuthenticatedLayout from '../layouts/Authenticated.vue';
 import GuestLayout from '../layouts/Guest.vue';


import PostsIndex from '@/components/Posts/Index.vue';
import PostsCreate from '@/components/Posts/Create.vue';
import PostsEdit from '@/components/Posts/Edit.vue';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

function auth(to, from, next) {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }

    next('/login')
}

const routes = [

       {
              component: AuthenticatedLayout,
              beforeEnter: auth,
              children: [
                     {
                      path: '/posts', 
                      name:'posts.index',  
                      component: PostsIndex,
                       meta: { title: 'Posts'} 
                      },
                      { 
                      path: '/posts/create', 
                      name:'posts.create',  
                      component: PostsCreate, 
                      meta: { title: 'Add New Posts'} 
                     },
                  
                     { 
                      path: '/posts/edit/:id', 
                      name:'posts.edit',  
                      component: PostsEdit, 
                      meta: { title: 'Edit Posts'} 
                     },
              ]
           },
      {
       path: '/',
       redirect: { name: 'login' },
       component: GuestLayout,
       children: [
           {
               path: '/login',
               name: 'login',
               component: Login
           },

           {
            path: '/register',
            name: 'register',
            component: Register
         },
       ]
      }
    
    
]

export default createRouter({
     
    history: createWebHistory(),
    routes
});
