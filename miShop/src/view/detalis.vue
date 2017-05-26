<template>
	<div class="details">
		<swiper-box-two	:data="detailsData.ProductPictures"></swiper-box-two>
		<div class="xiangqing">
			<div class="title" v-text="detailsData.Subject"></div>
			<!-- 售价 销售量 -->
			<div class="prices">
				<span>{{ money }}</span>
				<div>
					月销
					<span v-text="detailsData.MonthlySoldNum"></span>
					件
				</div>
			</div>
			<div class="other">
				<strong>·</strong>邮费<span v-text="detailsData.PostAbroad"></span>元
			</div>
			<!-- 商家承诺 -->
			<div class="Promises">
				<span v-for="item in detailsData.Promises" v-text="item"></span>
			</div>
			<!-- 选择 -->
			<div class="AttrInfo" v-if="detailsData.AttrInfoArray.length>=1 ">
				<user-se 
				:useSelectData="detailsData.AttrInfoArray" 
				:infoData="detailsData.SkuInfo"
				:picturesData="detailsData.SkuPictures"
				:money = "money"
				:plaseSelMenu = "plaseSel"
				></user-se>
			</div>
			<!-- 用户评论 -->
			<div class="userScore">
				<div class="product-score">
					<span>宝贝评分</span>
					<div>
						<div v-for="i in parseInt(detailsData.ProductScore)"></div>
					</div>
					<span v-text="detailsData.ProductScore"></span>分
				</div>
				<div class="cont">
					<user-as :useAsData="detailsData.TopReviews"></user-as>
				</div>
			</div>
			<!-- 海密严选 -->
			<div class="hm-select">
				<dl>
					<dt><img :src="detailsData.Mall.LogoSrc" alt=""></dt>
					<dd>
						<h3 v-text="detailsData.Mall.MallName"></h3>
						<h4 v-text="detailsData.Mall.Introduction"></h4>
					</dd>
				</dl>
			</div>
			<!-- 发现更多良心产品 -->
			<div class="find">
				<a href="javascript:;">发现更多<span v-text="detailsData.BrandName"></span>良品</a>
			</div>
			<!-- 详情 -->
			<div class="hm-details">
				<h3>产品详情</h3>
				<p>
					<img :src="detailsData.Mall.WeixinQRCode" alt="">
				</p>
				<div v-html='detailsData.Descriptioin' class="desc"></div>
			</div>
			<rec :recData="detailsData.Recommend"></rec>
	</div>
		<go-pay></go-pay>
	</div>
</template>

<script>
import goPay  from "@/components/goPayMoney"
import swiperBoxTwo from "@/components/swiperBoxTwo"
import rec 	  from "@/components/recommend"
import userAs from "@/components/useassess"
import userSe from "@/components/useSelect"

export default {
	name: "detalis",
	data (){
		return {
			detailsData: [],
			money:"",
			plaseSel: ""
		}
	},
	mounted (){
		this.$nextTick(function(){
	      this.getData(); 
	    })
	},
	methods: {
		getData (){
	      let that = this;
	      this.$http.jsonp('http://www.haimi.com/api/product/detail-cdn?ProductID='+ this.$route.params.id ,
		       {
		        Params:
			        {
			            platform:"WAP"
			        },
		       jsonp :"_callback"
		      }).then(res => {
		      	this.getMoney( res.body.data.SkuInfo);
		      	this.getPlaseSel( res.body.data.AttrInfoArray);
				return this.detailsData = res.body.data;
		      })
	    },
	    getMoney( data ){
			var arr = [],	
				min = 0,
				max = 0;
			for(var i = 0; i < data.length ; i++){
				arr.push( data[i].Price );
			}	
			min = arr.sort()[0]
			max = arr.sort()[arr.length-1]
			this.money = "￥"+min+"-"+"￥"+max;
			
		},
		getPlaseSel( data ){
			var str="" ;
			for( var i = 0; i < data.length ; i++ ){
				str += data[i].AttrName+",";
			}
			this.plaseSel = str.slice(0,str.length-1) ;
		}

	},
	watch:{
		$route : "getData"
	},
	components: {
		goPay,
		rec,
		swiperBoxTwo,
		userAs,
		userSe
	}
}	
</script>

<style lang="less">
.details{
	padding: .1rem;
	box-sizing:border-box;
	padding-bottom: .44rem;
	background-color: #fff;
	>.xiangqing{
		padding-top: 240px;
		.title{
			text-align: left;
		    line-height: .18rem;
		    max-height: .38rem;
		    -webkit-box-orient: vertical;
		    display: -webkit-box;
		    overflow: hidden;
		}
		>p{
			line-height: 2;
			>img{
				display: block;
				width: 100%;
			}
			strong{
				span{
					color: #242424;
					font-weight: bold;
				}
				
			}
			>span{
				img{
					width: 100%;
				}
			}
		}
		.prices{
			display: flex;
			justify-content: space-between;
			padding: .12rem .1rem;
			border-bottom: 1px solid #eee;
			margin-left: -10px;
			margin-right: -10px;
			>span{
				color: #991f33;
			}
		}
		.other{
			line-height: .27rem;
			color: #999;
			strong{
				color: #242424;

			}
		}
		.product-score{
			display: flex;
			height: 20px;
			padding: 11px 0;
			overflow: hidden;
			border-bottom: 1px solid #eee;
			align-items: center;
			font-size: 12px;
			span{
				font-size: 12px;
				&:last-child{
					color: #991f33;
				}
			}
			>div{
				display: flex;
				height: 20px;
				padding: 10px  8px 0;
				div{
					flex: 1;
					padding: 0;
					width: 15px;
					height: 15px;
					overflow: hidden;
					background: url(../assets/img/scroes.png) no-repeat;
					background-size: 100% 10px;
					padding-top: 100%;
				}
			}
			
		}
		.hm-select{
			dl{
				display: flex;
				padding: .1rem;
				box-sizing:border-box;
				dt{
					width: .42rem;
					height: .42rem;
					img{
						display: block;
						width: 100%;
					}
				}
				dd{
					flex: 1;
					padding-left: .1rem;
					h3{
						font-size: 13px;
						color: #242424;
						line-height: 21px;
					}
					h4{
						font-size: 12px;
						color: #666;
						line-height: 21px;
					}
				}
			}
		}
		.hm-details{
			h3{
				line-height: .41rem;
			}
			p{
				img{
					width: 100%;
				}
			}
		}
		.Promises{
			line-height: .37rem;
			font-size: 12px;
			border-top: .08rem solid #f7f7f7;
			margin-left: -10px;
   			margin-right: -10px;
   			padding-left: 10px;
			span{
				background: url(../assets/img/duigou.png) no-repeat left center;
				padding-left: .16rem;
				background-size: contain;
				font-size: 12px;
				color: #242424;
				padding-right: .1rem;

			}
		}
		.find{
			line-height: .37rem;
			a{
				font-size: 12px;
				span{
					color: #991f33;
				}
			}
		}
		
	}
}	
</style>