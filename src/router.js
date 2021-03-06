import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/routes/Home.vue'
import Histoire from './components/routes/Histoire.vue'
import Entrevue from './components/routes/Entrevue.vue'
import Plat_verso from './components/routes/Plat_verso.vue'
import Extraits from './components/routes/Extraits.vue'
import Actualites from './components/routes/Actualites.vue'
import Auteurs from './components/routes/Auteurs.vue'
import Bonus from './components/routes/Bonus.vue'
import Dispo from './components/routes/Dispo.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/histoire',
            name: 'histoire',
            component: Histoire
        },
        {
            path: '/entrevue',
            name: 'entrevue',
            component: Entrevue
        },
        {
            path: '/plat_verso',
            name: 'plat_verso',
            component: Plat_verso
        },
        {
            path: '/extraits',
            name: 'extraits',
            component: Extraits
        },
        {
            path: '/actualites',
            name: 'actualites',
            component: Actualites
        },
        {
            path: '/auteurs',
            name: 'auteurs',
            component: Auteurs
        },
        {
            path: '/bonus',
            name: 'bonus',
            component: Bonus
        },
        {
            path: '/disponibilites',
            name: 'disponibilites',
            component: Dispo
        }
    ],
    // scroll to top @{doc} /> https://router.vuejs.org/guide/advanced/scroll-behavior.html
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
})

/* PageNotFound redirection */

router.beforeEach((to, from, next) => {

    if (!to.matched.length) {
        next('/')
    } else {
        next()
    }
})

export default router