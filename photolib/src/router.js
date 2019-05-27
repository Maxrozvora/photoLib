import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category'
import About from './views/About'
import PostPage from './views/PostPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Головна сторінка - PhotoLib'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'Про сайт - PhotoLib'
      }
    },
    {
      path: '/new-post',
      name: 'new-post',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/new-post/NewPost.vue'),
      meta: {
        title: 'Добавити фото'
      }
    },
    {
      path: '/category/:id',
      component: Category,
      meta: {
        title: 'Розділ категорії - PhotoLib'
      }
    },
    {
      path: '/post-page/:id',
      component: PostPage,
      meta: {
        title: 'Перегляд фотографії - PhotoLib'
      }
    }
  ],
})


