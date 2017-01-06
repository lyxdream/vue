
require('./styles/usage/app.scss');
var common=require('./scripts/utils/util.common.js');
var html=require('./scripts/tlps/layout.string');
//var html=require('./scripts/tlps/detail.string');
//common.render(html);
common.render(html);
// require('./scripts/views/index.js');
//
 //console.log(VueRouter);
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
import detail from "./scripts/components/detail.vue";
console.log(home);

const routes = [{
    path: '/',
    component: index,
    children: [
        {
          path: '/',
          component: home
        }
      ]
},
{
	path:'/detail/:id',
	component:detail
}];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

const app = new Vue({
    router
}).$mount('#app')


