import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import Detail from '../components/detail'
import Login from '../components/login'
import Enter from '../components/enter'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
        name:"detail",
        path:"/detail/:id",
        component:Detail
    },
    {
        name:"login",
        path:"/login",
        component:Login
    },
    {
        name:"enter",
        path:"/enter",
        component:Enter
    }
  ]
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});


export default router;
