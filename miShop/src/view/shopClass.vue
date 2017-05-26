<template>
	<div class="category">
		<header class="category-header">
			<nav class="category-nav">
				<a href="javascript:;" v-for="(nav,index) in categoryDate" @click="getData( nav.option,index )"><span v-text="nav.name"></span></a>	
			</nav>
		</header>
		<hm-cont-box 
			v-for="cont in categoryAllData" 
			:Channel="cont.Channel" 
			:Products="cont.Products"
			:Records="cont.Records"
			:type = "cont.Channel.Type"
			:key="cont.Products"
			:marginTop="cont.Channel.MarginTop"
			:Name = "cont.Channel.Name"
		></hm-cont-box>
		<hm-footer></hm-footer>
	</div>
</template>

<script>
import hmFooter from "@/components/hmFooter"
import hmContBox from "@/components/hmContBox"

export default {
	name: "category",
	data (){
		return {
			categoryDate:[
				{
					name: "分类",
					option: "yanxuan-cat-list"	
				},{
					name: "品牌",
					option: "yanxuan-brand-list"
				}
			],
			categoryAllData: []
		}
		
	},
	mounted (){
		this.$nextTick(function(){
	      this.getData("yanxuan-cat-list",0); 
	     
	    })
	},
	methods: {
		getData ( opt,index ){
		  let that = this;
		  //http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list&platform=WAP yanxuan-brand-list
	      this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias='+opt,
		       {
		          Params:{
		            platform:"WAP"
		        },
		        jsonp :"_callback"
		      }).then(res => {
		      	//console.log(res.body.data)
		      	return this.categoryAllData = res.body.data;
		  });
		  //分类tab    
		  var nav = document.querySelector(".category-nav");    
		  setTimeout(function(){
			var navs= nav.querySelectorAll("a");
	     	//console.log(index,navs)
	     	for(var i = 0;i<navs.length;i++){
	     		navs[i].classList.remove("active");
	     	}
	     	navs[index].classList.add("active");

		 },150)    

		}
	},
	components: {
		hmFooter,
		hmContBox
	}
}
</script>

<style lang="less" scoped>
.category{
	.category-header{
		text-align: center;
   	    background-color: #fff;
   		border-bottom: 1px solid #e6e6e6;
		.category-nav{
			width: 100%;
			height: .37rem;
			text-align: center;
			>a{
				display: inline-block;
			    height: .239rem;
			    padding-top: .128rem;
			    color: #666;
			    cursor: pointer;

			    span{
			    	margin-right: .2rem;
			    	padding: 0 .04rem .05rem;
			    }
			    &.active{
			    	span{
			    		border-bottom: 2px solid #242424;
   						color: #242424;
			    	}
					
			    }
			}
		}
	}
}


</style>