// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.

import VueRouter from "vue-router";
import Vue from "vue";
import List from "./views/list.vue";
Vue.use(VueRouter);

console.log('->', List);
var Activity = Vue.extend({
  template: '<p> 活动</p>'
})

var Detail = Vue.extend({
  template: '<p> 详情 </p>'
})

var Rule = Vue.extend({
  template: '<p> 规则</p>'
})

var History = Vue.extend({
  template: '<p> 往期回顾 </p>'
})

var SelectShop = Vue.extend({
  template: '<p> 选择参加门店 </p>'
})

var Confirm = Vue.extend({
  template: '<p> 报名信息确认 </p>'
})

var ConfirmSuccess = Vue.extend({
  template: '<p> 报名信息确认成功 </p>'
})

var My = Vue.extend({
  template: '<p> 我的活动 </p>'
})

var MyHistory = Vue.extend({
  template: '<p> 我参加过的活动 </p>'
})

var App = Vue.extend({});

/**
 * router
 */

var router = new VueRouter()

router.map({
  '/list': {  // 首页活动列表
    component: List
  },
  '/activity': { // 活动
    component: Activity,
	subRoutes: {
		'/detail': { // 活动详情
			component: Detail
		},
		'/rule': { //  参加细则
			component: Rule
		},
		'/history': { // 往期回顾
			component: History
		},
		'/select-shop': { // 选择参加门店
			component: SelectShop
		},
		'/confirm': { // 报名信息确认
			component: Confirm
		},
		'/confirm-success': { //确认成功
			component: ConfirmSuccess
		},
    },
  },
  '/my': {  // 我的活动
    component: My
  },
  '/my-history': {  // 我参加过的活动
    component: MyHistory
  },
  '*': {
    component: List
  },
})

router.start(App, '#app')
