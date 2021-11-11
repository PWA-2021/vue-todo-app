import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from '../views/Todos.vue'
import AddTodo from '../views/AddTodo.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos,
    children: [
      {
        path: '/add',
        name: 'AddTodo',
        component: AddTodo
      }
    ]
  },
  {
    path: '/o-nama',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
