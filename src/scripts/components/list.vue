<template>
	<section>
			<header>
	    		<div class="search">
	    			请输入关键字
	    		</div>
	    	</header>
	    	<nav>
	    		<ul>
	    			<li>
	    				<span>
	    					销量&ensp;
	    					<i class="yo-ico">
	    						&#xe6af;
	    					</i>
	    				</span>
	    			</li>
	    			<li>
	    				<span>
	    				 	人气&ensp;
					 		<i class="yo-ico">
					 			&#xe6af;
					 		</i>
	    				</span>	
	    			</li>
	    			<li>
	    				<span>
	    					价格&ensp;
	    					<i class="yo-ico">
	    						&#xe6af;
	    					</i>
	    				</span>
	    			</li>
	    			<li>
	    				<span>
		    				分类&ensp;	
		    				<i class="yo-ico">
		    					&#xe617;
		    				</i>
	    				</span>
	    			</li>
	    		</ul>
	    	</nav>
	    	<section>
	    		<div id="scroll-container">
	    		 	<div class="scroll-container">
	    		 	<div class="head hide">
		                <img src="/images/arrow.png" width="40" height="40"/>
		                <span>下拉刷新...</span>
		            </div>
	      			 <ul>
		    			<li v-for="item in list">
		    				<div>
		    					<img :src="item.img"/>
		    				</div>
							<p>{{item.details}}</p>
							<div>
								<strong>¥&ensp;
									<span>{{item.nowPrice}}&ensp;</span>
								</strong>
								<s>¥{{item.last}}</s>
							</div>
		    			</li>
		    		</ul>
		    		 <div class="foot hide">
		                <img src="/images/arrow.png" width="40" height="40"/>
		                <span>上拉加载更多...</span>
		             </div>
   				 </div>
	    		</div>
	    	</section>
	</section>
</template>

<script>
	var common = require('../utils/util.common.js');
	module.exports = {
		data:function(){
			return {
				list:[]
			}
		},
		mounted: function () {
			fetch('/api/list').then(response => response.json())
			.then(res => {
				var that = this;
				that.list = res;
				 common.isAllLoaded('#scroll-container ul', function () {
		         common.scroll(that);
		       })
			}).catch(e => console.log("Oops, error", e));
		}
	}
</script>