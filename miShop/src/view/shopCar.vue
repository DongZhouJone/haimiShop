<template>
	<div class="cart">
		<div class="cart-MoreProducts" v-if="dataAll != null">
			<hm-cart-top :shopList="dataAll.data"></hm-cart-top>
			<header class="cart-title">大家都在买的宝贝</header>
			<nav class="hm-home-nav">

				<a href="javascript:;" v-for="item in dataAll.extra.Suggest">
					<router-link :to="{name: 'detalis', params: { id : item.ProductID }}">
						<div :style="{backgroundImage:`url(${ item.PicturesWebp}% )`}"></div> 
						<span v-text="item.Subject" class="other-Subject"></span>
						<span class="other-FinalPrice">{{item.FinalPrice | addFormat￥ }}</span>
					</router-link>
				</a>
			</nav>
		</div>
		<hm-footer></hm-footer>
	</div>
</template>

<script>
import hmCartTop from "@/components/hmCartTop"
import hmFooter from "@/components/hmFooter"

export default {
	name: "cart",
	data (){
		return {
			dataAll: null
		}
	},
	components: {
		hmFooter,
		hmCartTop
	},
	mounted (){
		this.$nextTick(function(){
	      this.getCartAllData();
	    })
	},
	methods: {
		getCartAllData (){
			 let that = this;
			 //https://m.haimi.com/api/cart/info?clearInvalidProducts=Y&platform=WAP
	     	 this.$http.jsonp('https://m.haimi.com/api/cart/info?clearInvalidProducts=Y',
		       {
		          Params:{
		            platform:"WAP"
		        },
		        jsonp :"_callback"
		      }).then(res => {
		      	
		     	return this.dataAll = res.body;
		      })
		}
	}

}
</script>

<style lang="less" scoped>
.cart{
	background: #F7F7F7;
	.cart-title{
		line-height: .37rem;
	    text-align: center;
	    background-color: #fff;
	    border-bottom: 1px solid #eee;
	}
	.hm-home-nav{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		>a{
			width: 48%; 
			text-align: center;
			font-size: 12px;
			padding-bottom: .08rem;
			background: #fff;
			margin-bottom: .08rem;
			/*img{
				width: 100%;
			}*/
			div{
				padding-top: 100%;
				background-size: cover;
			}
			span{
				display: block;
				overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    padding: 0 .1rem;
			    box-sizing:border-box;
			   
			    font-size: 12px;
			    &.other-Subject{
			    	color: #242424;
			    	text-align: left;
			    }
			    &.other-FinalPrice{
			    	color: #242424;
			    	text-align: left;
			    	padding: .08rem .1rem;
			    }
			}
		}
	}
}	

</style>