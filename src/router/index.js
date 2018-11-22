import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import newDetail from '../components/newDetail'
import about from '../components/about'
import service from '../components/service'
import CasePage from '../components/CasePage'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/newDetail',
            name: 'newDetail',
            component: newDetail
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/service',
            name: 'service',
            component: service
        },
        {
            path: '/CasePage',
            name: 'CasePage',
            component: CasePage
        },
    ]
})