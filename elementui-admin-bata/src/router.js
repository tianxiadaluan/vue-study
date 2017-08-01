import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index'], resolve)
    },
    {
      path: '/index2',
      name: 'index2',
      component: resolve => require(['@/components/index2'], resolve)
    }
  ]
});

export default router;
