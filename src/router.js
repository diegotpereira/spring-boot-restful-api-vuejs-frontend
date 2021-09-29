import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            alias: '/clientes',
            name: 'clientes',
            component: () =>
                import ('./components/ClienteLista')
        },
        {
            path: '/clientes/:id',
            name: 'editar-cliente',
            component: () =>
                import ('./components/EditarCliente')
        },
        {
            path: '/add',
            name: 'add-cliente',
            component: () =>
                import ('./components/AddCliente')
        }
    ]
})