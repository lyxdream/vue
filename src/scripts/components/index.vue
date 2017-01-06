<template id="">
<div class="m-index" id="m-index">
    <router-view></router-view>
	<footer>
	     <ul>
        <li @click="changeNav(i)" :class="{active: i==navIndex}" v-for="(fn,i) in footerNav">
          <router-link :to="fn.router">
            <i class="yo-ico" v-html="fn.ico"></i>
            <span>{{fn.title}}</span>
          </router-link>
        </li>
      </ul>
		</footer>
</div>
</template>
<script>
   module.exports = {
    data: function () {
      return {
        navIndex: 0,
        footerNav: [
          {
            router: '/',
            ico: '&#xe701;',
            title: '首页'
          },
          {
            router: '/list',
            ico: '&#xe61c;',
            title: '产品'
          },
          {
            router: '/photo',
            ico:'<span>申请</br>分销</span>'
          },
          {
            router: '/my',
            ico: '&#xe6bd;',
            title: '购物车'
          },
          {
            router: '/exit',
            ico: '&#xe60f;',
            title: '我的'
          }
        ]
      }
    },
    methods: {
      changeNav: function (index) {
        this.navIndex = index;
      }
    }
  }
</script>

