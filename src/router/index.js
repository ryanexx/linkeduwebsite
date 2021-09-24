import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta) 

  const routes = [
    {
      path: '/',
      name: 'Inicio',
      redirect: '/start'
    },
    {
      path: '/start',
      name: 'Inicio',
      component: () => import(/* webpackChunkName: "start" */ '../views/Start.vue'),
      meta: { auth: false }
    },
    {
      path: '/resources',
      name: 'Recursos',
      component: () => import(/* webpackChunkName: "about" */ '../views/Resources.vue'),
      meta: { auth: false }
    },
    {
      path: '/about',
      name: 'Acerca',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: { auth: false }
    },
    {
      path: '/papers',
      name: 'Revistas',
      component: () => import(/* webpackChunkName: "papers" */ '../views/Papers.vue'),
      meta: { auth: false }
    },
    {
      path: '/proyect',
      name: 'Proyecto',
      component: () => import(/* webpackChunkName: "contact" */ '../views/Proyect.vue'),
      meta: { auth: false }
    },
    {
      path: "*",
      name: 'Inicio',
      redirect: '/start'
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.meta.auth === undefined) { return next(); }

  const authRoute = (to.meta.auth);
  if (authRoute) {
    if (!Vue.auth.isAuth()) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else next();
  } else {
    if (Vue.auth.isAuth()) {
      next({ path: '/information' })
    } else next();
  }
  next();
});


export default router
