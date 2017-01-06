
<template>
<div class="m-detail">
  <header>
    <i class="yo-ico">
     <router-link :to="'/'">
      &#xe711;
     </router-link>
    </i>
    <p class="l-title">产品详情</p>
    <div class="l-add">
      <div class="l-car"><b class="yo-ico">&#xe667;</b><em>1</em></div>
      <span class="yo-ico">&#xe60c;</span>  
    </div>
  </header>
  <section v-for="item in list" v-if="$route.params.id==item.id">
       <ul class="l-banner">   
         <li>
          <img :src="item.imgSrc" alt="">
         </li>
       </ul>
       <p class="l-name">{{item.title}}</p>
       <div class="info-box">
         <div class="l-message">
           <p class="l-price">价格：<b>¥{{item.nowp}}</b>&ensp;<i>¥{{item.oldP}}</i></p>
           <p class="l-carriage">运费：<i>正在获取你的位置...</i></p>
         </div>
         <div class="l-collect">
           <i class="yo-ico">&#xe616;</i>
           <b>收藏</b>
         </div>
       </div>
       <ul class="l-info">
         <li>库存&ensp;<span>{{item.count}}</span></li>
         <li>销量&ensp;<span>{{item.sellNum}}</span></li>
         <li>人气&ensp;<span>{{item.popularN}}</span></li>
       </ul>
       <div class="l-goods">
         <dl class="l-color">
          <dd>颜色</dd>
          <dt>
            <span>大红</span>
            <span>蓝灰色</span>
            <span>葡萄紫</span>    
          </dt>

         </dl>
         <dl class="l-size">
          <dd>码数</dd>
          <dt>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </dt>
         </dl>
       </div>
       <div class="l-detail">
         <p>详情</p>
         <ul class="l-pic">
          <li><img src="/images/pic1.png"></li>
          <li><img src="/images/pic1.png"></li>
          <li><img src="/images/pic1.png"></li>
          <li><img src="/images/pic1.png"></li>
          <li><img src="/images/pic1.png"></li>
         </ul>
       </div>
  </section>

  <footer>
     <div class="l-buy">立即购买</div>
     <div class="l-add">加入购物车</div>
  </footer>
  
</div> 
</template>
<script type="text/javascript">

  var common = require('../utils/util.common.js');

   module.exports={
    data:function(){
      return {
        list:[]
      }
    },
    mounted: function(){
       fetch('/api/list').then(response => response.json())
      .then(res => {
         this.list=res;
      })
      .catch(e => console.log("Oops, error", e));
     }

   }
  
</script>