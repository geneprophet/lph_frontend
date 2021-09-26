import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'LPH-BIG',
  routes: [
    { path: '/',
      component: '@/layouts/index' ,
      routes:[
        {
          path:'/',
          component:'@/pages/index',
          breadcrumbName: 'Home',
        },
        {
          path: '/home',
          component: '@/pages/index',
          breadcrumbName: 'Home',
        },
      ]},
  ],
  fastRefresh: {},
});
