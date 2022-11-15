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
                title: 'CXC',
                ENtitle: 'CXC'

            }
        },
        {
            path: '/success',
            name: 'Success',
            component: () => import('@/views/index/success'),
            meta: {
                title: 'CXC',
                ENtitle: 'CXC'

            }
        },
        {
            path: '/verification',
            name: 'verification',
            component: () => import('@/views/index/verification'),
            meta: {
                title: 'CXC',
                ENtitle: 'CXC'

            }
        }

    ],
    base: process.env.BASE_URL,

});
