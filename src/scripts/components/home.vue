 <template id="">

 <div class="cute"> 
    <header>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="/images/img5.jpg"/></div>
              <div class="swiper-slide"><img src="/images/img2.jpg"/></div>
              <div class="swiper-slide"><img src="/images/img3.jpg"/></div>
              <div class="swiper-slide"><img src="/images/img4.jpg"/></div>
              <div class="swiper-slide"><img src="/images/img1.jpg"/></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </header>
    <nav>
       <div class="m-logo">
          <i><img src="/images/icon.png" alt=""></i>
          <b>女装商城</b>
       </div>
       <ul class="m-nav">
         <li>
           <i class="yo-ico">&#xe696;</i>
           <b>全部分类</b>
         </li>
         <li>
           <i class="yo-ico">&#xe606;</i>
           <b>热门推荐</b>
         </li>
         <li>
           <i class="yo-ico">&#xe6ac;</i>
           <b>搜索</b>
         </li>
         <li>
           <i class="yo-ico">&#xe611;</i>
           <b>品牌介绍</b>
         </li>
       </ul>
    </nav>
    <div class="m-notice">  
      <b class="yo-ico">&#xe6be;</b>
      <i>公告</i>
      <span>欢迎关注女装商城，定期更新最新潮流服饰！</span>
    </div>
    <ul class="m-show">
       <li><img src="/images/show1.png"></li>
       <li><img src="/images/show2.jpg"></li>
       <li><img src="/images/show3.jpg"></li>
    </ul>
   <section>
     <div class="f-sort">
       <div class="sort">
           <span class="m-cName">双面呢大衣</span>
           <div class="m-more">
             <b>更多</b>
             <i class="yo-ico">&#xe642;</i>
           </div>
       </div>
       <!-- 商品列表 -->  
         <ul class="s-lists">
          <li  v-for="item in list">
            <em>
              <router-link v-bind:to="'/detail/'+item.id">
              <img :src="item.imgSrc" alt="">
              </router-link>
            </em>
             <p>{{item.title}}</p>
            <div class="s-message">
              <span class="s-price">
                <i>￥{{item.nowp}}</i>
                <b>￥{{item.oldP}}</b>
              </span>
              <span class="s-car yo-ico">&#xe607;</span>
            </div> 
          </li>
       </ul>
     </div>
     <div class="f-sort">
       <div class="sort">
           <span class="m-cName">貂绒打底衫</span>
           <div class="m-more">
             <b>更多</b>
             <i class="yo-ico">&#xe642;</i>
           </div>
       </div>

       <!-- 商品列表 -->  
         <ul class="s-lists">
          <li v-for="item in list">
             <em>
              <router-link :to="'/detail/'+item.id">
              <img :src="item.imgSrc" alt="">
              </router-link>
             </em>
             <p>{{item.title}}</p>
            <div class="s-message">
              <span class="s-price">
                <i>￥{{item.nowp}}</i>
                <b>￥{{item.oldP}}</b>
              </span>
              <span class="s-car yo-ico">&#xe607;</span>
            </div> 
          </li>
       </ul>
     </div>
   </section> 
  </div>
 
</template>
<script>
   var common = require('../utils/util.common.js');
   module.exports={
    data:function(){
      return {
        list:[]
        // listMore:[]
      }
    },
    mounted: function(){
       fetch('/api/list').then(response => response.json())
      .then(res => {
         this.list=res;
         console.log(res)
      })
      .catch(e => console.log("Oops, error", e));

      //  fetch('/api/more').then(response => response.json())
      //  .then(res => {
      //    this.more=res;
      // })
      // .catch(e => console.log("Oops, error", e));
     }
   },
   setTimeout(function(){
   var mySwiper = new Swiper('.swiper-container',{
    pagination : '.swiper-pagination',
    autoplay : 1000,
    loop : true,
    effect : 'fade',
    fade: {
      crossFade: false,
    }
  })   
},1000)

</script>  