import { getCookie } from '../utils/cookieAuth.js'

export default function(router){
  router.map({
    '/auth/login': {
      component: ( resolve ) => require(['../components/pages/auth.vue'], resolve),
      auth: true
    },
    '/auth/register': {
      component: (resolve) => require(['../components/pages/auth.vue'], resolve)
    },
    '/admin': {
      component: (resolve) =>  require(['../components/pages/admin.vue'], resolve),
      subRoutes: {
        '/dashboard': {
          component: (resolve) => require(['../components/pages/dashboard/index.vue'], resolve),
        },
        '/charts': {
          component: (resolve) => require(['../components/pages/charts/index.vue'], resolve),
          subRoutes: {
            '/c': {
              component: (resolve) => require(['../components/pages/charts/page-child-c/index.vue'], resolve)
            },
            '/d': {
              component: (resolve) => require(['../components/pages/charts/page-child-d/index.vue'], resolve)
            },
          }
        },
        '/service': {
          component: (resolve) => require(['../components/pages/service/index.vue'], resolve)
        }
      }
    },
  })
  // set the default router-view
  router.redirect({
    '/': '/admin',
  })

  router.beforeEach(function({to, next, redirect}){
    if(to.auth || getCookie('user')) {
      next()
    } else {
      // redirect, status 401 or 403 ...
      redirect('/auth/login')
    }
  })
}
