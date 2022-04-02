import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('@/views/singer/index.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   if (to.path != '/singer') {
//     next({
//       path: '/singer'
//     })
//   } else {
//     console.log('ok')
//   }
// })

// router.beforeResolve(to => {
//   console.log(to)
// })

export default router
