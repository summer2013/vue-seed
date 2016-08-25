import Vue from "vue";
import Loading from "./partials/loadding.vue"


export default {
  registerAllGlobalComponents () {
    Vue.component('loading', Loading)
  }
}
