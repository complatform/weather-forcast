import { createRouter, createWebHistory } from 'vue-router'
import Weather from '../views/Weather/Weather'
// import TodoList from '../views/Todo/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: Weather
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
