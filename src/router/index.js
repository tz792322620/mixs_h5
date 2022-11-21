import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const
// import HelloWorld from '@/components/HelloWorld.vue'
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'CXC',
            component: () => import('@/views/index/index'),
            meta: {
                title: 'MIXS Global',
                ENtitle: 'MIXS Global'

            }
        },
        {
            path: '/download',
            name: 'download',
            component: () => import('@/views/index/download'),
            meta: {
                title: 'MIXS Global',
                ENtitle: 'MIXS Global'

            }
        },
        {
            path: '/success',
            name: 'Success',
            component: () => import('@/views/index/success'),
            meta: {
                title: 'MIXS Global',
                ENtitle: 'MIXS Global'

            }
        },
        {
            path: '/verification',
            name: 'verification',
            component: () => import('@/views/index/verification'),
            meta: {
                title: 'MIXS Global',
                ENtitle: 'MIXS Global'

            }
        }

    ],
    base: process.env.BASE_URL,

});
