require('./styles/usage/app.scss');
var layout = require('./scripts/tips/layout.string');
var common = require('./scripts/utils/util.common.js');
common.render(layout);


import index from "./scripts/components/index.vue";
import list from "./scripts/components/list.vue";
import login from "./scripts/components/login.vue";
import register from "./scripts/components/register.vue";
const routes = [{
	path: '/',
	component: index,
	children:[
		{
			path: '/list',
	        component: list
		},
		{
			path:'/me',
			component:login
		}
	]
},{
	path: '/register',
	component: register,
}];

const router = new VueRouter({
routes // （缩写）相当于 routes: routes
});

const app = new Vue({
router
}).$mount('#app')
