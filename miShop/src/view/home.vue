<template>
	<div class="home">
		<header class="header-bar">
			<input type="text" placeholder="搜索宝贝">
			<span class="sreach">搜索</span>
		</header>

		<div class="homeNav">
			<div class="home-nav">
				<div v-for="(item,index) in navData">
					<a href="javascript:;"v-text="item.Title" :data-id="item.NavID" @click="getNewData(item.NavID,index)"></a>
				</div>
			</div>
		</div>
		
		<hm-cont-box 
			v-for="cont in homeOndata" 
			:Channel="cont.Channel" 
			:Products="cont.Products"
			:Records="cont.Records"
			:type = "cont.Channel.Type"
			:key="cont.Products"
			:marginTop="cont.Channel.MarginTop"
			:Name = "cont.Channel.Name"
			:homeOtherData = "homeOtherDatas"
		></hm-cont-box>
		<hm-cont-boxcategory :datas="homeOtherDatas" ></hm-cont-boxcategory>
		<hm-footer></hm-footer>
	</div>
</template>

<script>
import hmFooter from "@/components/hmFooter"
import hmContBox from "@/components/hmContBox"
import hmContBoxcategory from "@/components/hmContBoxcategory"

export default {
	name: "home",
	props: {
		dataId: {
			type: String,
			default:""
		}
	},
	data (){
		return {
			navData : [],
			homeOndata: [],
			homeOtherDatas: []	
		}
	},
	mounted (){
		this.$nextTick(function(){
	      this.getData(); 
	      this.getNewData(2);
	    })
	},
	methods: {
		getData (){
	      let that = this;
	      this.$http.jsonp('http://m.haimi.com/api/nav/list',
		       {
		          Params:{
		            platform:"WAP"
		        },
		        jsonp :"_callback"
		      }).then(res => {

		     	return this.navData = res.body.data;
		      })
	     
	    },
	    getNewData:function( id,index ){
      	  let that = this;
	      this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+id,
	       {
	          Params:{
	            platform:"WAP"
	        },
	        jsonp :"_callback"
	      }).then(res => {
	      	//其他首页枫叶内容获取
	      	that.getOther( id );
	      	return this.homeOndata = res.body.data;
	      });
	     //tab 切换效果
	     index = index == undefined ? 0 : index;
	     var nav = document.querySelector(".home-nav");
		 setTimeout(function(){
			var navs= nav.querySelectorAll("div");
	     	//console.log(index,navs)
	     	for(var i = 0;i<navs.length;i++){
	     		navs[i].classList.remove("on");
	     	}
	     	navs[index].className="on";

		 },150);
		
	     
      	},
      	getOther( id ){
      		 //	http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP
			 this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID='+id+'&page=1&pageSize=100',
		       {
		          Params:{
		            platform:"WAP"
		        },
		        jsonp :"_callback"
		      }).then(res => {
		      	console.log(res.body.data)
		      	return this.homeOtherDatas = res.body.data;
		      });
	      	}

	},
	components: {
		hmFooter,
		hmContBox,
		hmContBoxcategory
	}
}
</script>

<style lang="less" scoped>
.home{
	background-color:#F7F7F7;
	padding-bottom: 50px;
	.header-bar{
		width: 100%;
		height: .37rem;
		padding: .06rem .08rem;
		background-color: #242424;
		box-sizing:border-box;
		display: flex;
		align-items: center;
		>input{
			flex: 1;
			height: 100%;
			padding: 0 0 0 .25rem;
			background: #1a1a1a url(../assets/img/sreach.png) no-repeat .05rem center /.15rem ;
			color: #fff;
			font-family: Arial;
			border: 0;
			outline: 0; 
			font-size: 12px;
			margin-right: .15rem;
		}
		.sreach{
			text-align: right;
			color: #fff;
			font-size: 12px;
		}
	}
	.homeNav{
		background-color: #fff;
	}
	.home-nav{
		width: 100%;
		display: -webkit-box;
		overflow-x: auto;
		overflow-y: hidden;
		-webkit-box-pack:center;
		border-bottom: 1px solid #e5e5e5;
		box-sizing:border-box;
		height: .34rem;
		&::-webkit-scrollbar{
			width: 0;
			height: 0;
		}
		>div{
			height: .34rem;
			>a{
				position: relative;
				display: block;
				color: #242424;
				font-size: 12px;
				line-height: .34rem;
				margin: 0 .06rem;
				padding: 0 .06rem;
			}
			&.on{
				>a{	
					&:after{
						content:"";
						display: block;
						width: 100%;
						height: 4px;
						position: absolute;
						left: 0;
						bottom: 0;
						background: #242424;
					};
				}
			}
			&:nth-child(1){
				padding-left: .08rem;
			}
		}
	}
	
}	

</style>