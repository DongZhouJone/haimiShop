<template>
	<div class="hm-product-list" :style="{marginTop: ( (marginTop)*(.32/12)/(100/32)/2 )+'rem'}">
		<header class="title" v-if="Name != '' " v-text="Name"></header>
		<!-- {{flag}} -->
		<!-- swiper list -->
		<div class="cont" v-if="type == 'Slides' " >
			<swiper-box	:data="Records"></swiper-box>
		</div>
		<!-- home导航 -->
		<div class="cont" v-if="type == 'Col4ImageWithTitleNoDesc' " >
			<nav class="hm-home-nav">
				<a href="javascript:;" v-for="navs in Records">
					<img :src="navs.Picture" alt="">
					<span v-text="navs.SlideName"></span>
				</a>
			</nav>
		</div>
		<!-- 大全图 -->
		<div class="cont cont-full " v-if="type == 'Col1ImageOnly' " >
			<nav class="hm-home-nav">
				<a href="javascript:;" v-for="navs in Records">
					<img :src="navs.Picture" alt="">
				</a>
			</nav>
		</div>

		<!-- 分区图 左2有一-->
		<div class="cont cont-allot" v-if="type == 'Col2LeftTop1LeftBottom1Right1' "  >
			<nav class="hm-home-nav">
				<a href="javascript:;" v-for="navs in Records">
					<img :src="navs.Picture" alt="">
				</a>
			</nav>
		</div>
		
		<!-- 左右平分分区 -->
		<div class="cont cont-average" v-if="type == 'Col2ImageOnly' "  >
			<nav class="hm-home-nav">
				<a href="javascript:;" v-for="navs in Records">
					<router-link :to="{name: 'detalis', params: { id : navs.CastID }}">
						<img :src="navs.Picture" alt="">
					</router-link>
				</a>
			</nav>
		</div>	

		<!-- window swiper -->
		<div class="cont cont-swiper" v-if="type == 'Col3AndHalfWithTitleAndDesc' " >
			<nav class="hm-home-nav">
				<div v-for="navs in Records">
					<router-link :to="{name: 'detalis', params: { id : navs.CastID }}">
						<div :style="{backgroundImage:`url(${ navs.Picture}% )`}"></div> 
						<span v-text="navs.SlideName" class="name"></span>
						<span v-text="navs.Description" class="price"></span>
					</router-link>
				</div>
			</nav>
		</div>
		<!-- category ColNWithTitleAndBorder 分类首页-->
		<div class="cont cont-products" v-if="type == 'ColNWithTitleAndBorder' "  >
			<nav class="hm-home-nav">
				<a v-for="navs in Records" v-text="navs.SlideName" :href="navs.wapURL">
					
				</a>
			</nav>
		</div>
		<!-- category Col3ImageWithTitleAndDesc 分类产品页-->
		<div class="cont cont-brand" v-if="type == 'Col3ImageWithTitleAndDesc' "  >
			<nav class="hm-home-nav">
				<a v-for="navs in Records">
					<router-link :to="{name: 'detalis', params: { id : navs.ProductID }}">
						<div :style="{backgroundImage:`url(${ navs.Picture}% )`}"></div> 
						<span v-text="navs.SlideName" class="brand-title"></span>
						<span v-text="navs.Description" class="brand-description"></span>
					</router-link>
				</a>
			</nav>
		</div>	
		
	</div>
</template>

<script>
import swiperBox from "@/components/swiperBox"


export default {
	name: "hmContBox",
	props:{
		contData:{
			type: Array,
			default: null
		},
		Channel: {
			type: Object,
			default: null
		},
		Products: {
			type: Array,
			default: null
		},
		Records: {
			type: Array,
			default: null
		},
		type: {
			type: String,
			default: ""
		},
		marginTop: {
			type: String,
			default: ""
		},
		Name: {
			type: String,
			default: ""
		}
	},
	components: {
		swiperBox
	}
}
	
</script>

<style lang="less" scoped>
.title{
	line-height: .41rem;
    border-bottom: 1px solid #eee;
    position: relative;
    text-align: center;
    padding: 0 .64rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #fff;
    font-size: .12rem;
}
.cont{
	.hm-home-nav{
		display: flex;
		>a{
			flex: 1;
			text-align:center;
			background: #fff;
			img{
				width: .8rem;
				display: block;
				margin: 0 auto;
			}
			span{
				display: block;
				font-size: .12rem;
				padding: .08rem 0;
			}
		}
	}
	&.cont-full{
		a{
			div{
				padding-top: 50%;
				background-size: cover; 
			}
			img{
				width: 100%;
			}
		}
	}
	&.cont-allot{
		overflow: hidden;
		.hm-home-nav{
			display: block;
			position: relative;
			height: 208px;
			>a{
				position: absolute;
				height: 100%;
				>img{
					width: 100%;
					height: 100%;
				}
				&:nth-child(1){
					left: 0;
					top: 0;
					width: 60%;
					img{
						height: 50%;
					}
				}
				&:nth-child(2){
					left: 0;
					top: 1.02rem;
					width: 60%;
					img{
						height: 50%;
					}
				}
				&:nth-child(3){
					right: 0;
					top: 0;
					width: 40%;
				}
			}
		}	
	}
	&.cont-average{
		>.hm-home-nav{
			display: flex;
			flex-wrap: wrap;
			a{
				width: 50%;
				flex: initial;
				>img{
					width: 100%;
				}
			}
		}
	}
	&.cont-swiper{
		.hm-home-nav{
			width: 100%;
			display: -webkit-box;
			overflow-x: auto;
			overflow-y: hidden; 
			padding-bottom: .1rem;
			box-sizing:border-box;
			background-color: #fff; 
			&::-webkit-scrollbar{
				width: 0;
				height: 0;
			}
			>div{
				width: .89rem;
				div{
					padding-top: 100%;
					background-size: cover;
				}
			
				.name,.price{
					display: block;
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    font-size: 12px;
				    text-align: center;
				}
				.price{
					color: #999;
					padding: .02rem 0;
				}
			}
		}
	}
	&.cont-products{
		.hm-home-nav{
			padding: .12rem 0 .02rem 0;
			display:inline-block;
			>a{
				padding: .06rem .1rem;
			    border: 1px solid #e5e5e5;
			    float: left;
			    margin: 0 0 .11rem .1rem;
			}
		}
	}
	&.cont-brand{
		.hm-home-nav{
			flex-wrap: wrap;

			>a{
				width: 33.3333%; 
				text-align: center;
				font-size: 12px;
				padding-bottom: .08rem;
				div{
					padding-top: 100%;
					background-size: cover; 
				}
			
				span{
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    padding: 0 .1rem;
				    box-sizing:border-box;
				    &.brand-title{
				    	color: #242424;
				    }
				    &.brand-description{
				    	color: #999;
				    }
				}
			}
		}	
	}
	
}
	
</style>