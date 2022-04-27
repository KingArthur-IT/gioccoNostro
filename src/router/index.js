import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import SignIn from '../views/SignIn.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartPage,
      meta: { auth: false }
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn,
      meta: { auth: false }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { auth: true }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
