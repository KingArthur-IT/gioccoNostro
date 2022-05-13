import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import SignInUp from '../views/SignInUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
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
      component: SignInUp,
      meta: { auth: false }
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPassword,
      meta: { auth: false }
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword,
      meta: { auth: false }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { auth: true, title: 'Profile' }
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
