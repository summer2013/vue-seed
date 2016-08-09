// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.
var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

var App = Vue.extend({});

/**
 * router
 */

var router = new VueRouter()

router.map({
  '/page-a': {
    component: Foo
  },
  '/page-b': {
    component: Bar
  },
  '*': {
    component: Foo
  },
})

router.start(App, '#app')
