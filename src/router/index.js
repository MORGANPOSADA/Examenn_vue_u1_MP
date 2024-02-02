import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path:"/",
        redirect: '/inicio'

    },
    //las rutas asociadas a los componentes
    {
        path: '/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        //los componenres que se renderizan en router-viuew
        children: [
            {
                path: '/inicio1',
                name: 'inicio',
                component: ()=> import ('../components/inicio.vue')
            },
            
            {
                path: '/sitio-principal',
                name: 'sitio-principal',
                component: ()=> import ('../components/sitio_principal.vue')
            },
            {
                path: '/formulario',
                name: 'formulario',
                component: ()=> import ('../components/formulario.vue')
            },
            {
                path: '/paginacion',
                name: 'paginacion',
                component: ()=> import ('../components/paginacion.vue')
            }
        ]
    }
]

const router = new VueRouter({routes, })
export default router;
