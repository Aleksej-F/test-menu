import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore  } from '../stores/UserStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/review',
      name: 'review',
      meta: {loyout: 'page', autch: false},
      component:  () => import('../views/MenuView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {loyout: 'empty', autch: false},
      component:  () => import('../views/LoginView.vue')
    },
    {
      path: '/redact',
      name: 'redact',
      meta: {loyout: 'page', autch: true},
      component: () => import('../views/MenuEditView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {loyout: 'empty', autch: false},
      component: () => import('../views/Signup.vue'),
      props: true,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  const requireAuth = to.meta.autch
  const requireRole = to.meta.admin
  const userAutch = user.getIsAutchUser
  const role = user.getUserRole
  
 
  if (requireAuth && !userAutch) {
    next('/login')
  } else {
      // if (requireRole ){
      //   if (role === "ROLE_SUPER_ADMIN") {
      //     next()
      //   } else {alert( "у вас нет прав доступа.")
      //   next('/')}
      // } else {
        next()
      // }
      
  }
})

export default router
