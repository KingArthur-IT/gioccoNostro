import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import SignInUp from '../views/SignInUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Profile from '../views/Profile.vue'
import TransactionsView from '../views/TransactionsView.vue'
import MarketView from '../views/MarketView.vue'
import DashboardView from '../views/DashboardView.vue'

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
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView,
      meta: { auth: true, title: 'Transactions' }
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView,
      meta: { auth: true, title: 'Market' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { auth: true, title: 'Dashboard' }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = 'token'
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser){
    next('/sign-in')
  } else {
    next()
  }
})

export default router
