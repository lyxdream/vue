var Vue= require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');
new Vue({
	el:'#m-index',
	data:{
     list:[]
	},
	mounted:function(){
     fetch('/api/list').then(response => response.json())
    .then(res => {
       this.list=res;
       // console.log(res);
     
    })
    .catch(e => console.log("Oops, error", e));
	}
})
var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',
	autoplay : 5000,
	loop : true,
	effect : 'fade',
	fade: {
	  crossFade: false,
	}
})
