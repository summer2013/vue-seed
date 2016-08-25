// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.

import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Logo from "./components/views/logo.vue"
import Menus from "./components/views/menus.vue"
import Menu from "./components/views/menu.vue"
//import RegisterComponent from './components/register'

Vue.use(VueRouter);
//RegisterComponent.registerAllGlobalComponents();


const router = new VueRouter()

router.map({
  '/logo': {
    component: Logo
  },
  '/menus': {
    component: Menus,
    subRoutes: {
      '/menu': {
        component: Menu
      }
    },
  },
  '*': {
    component: Logo
  }
})

router.start(App, '#app')
