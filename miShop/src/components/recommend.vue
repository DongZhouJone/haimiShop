<template>
	<div class="recommend">
		<header class="cart-title">推荐商品</header>
		<nav class="hm-home-nav">
			<a href="javascript:;" v-for="item in recData">
				<router-link :to="{name: 'detalis', params: { id : item.ProductID }}">
					<div :style="{backgroundImage:`url(${ item.PicturesWebp}% )`}"></div> 
					<span v-text="item.Subject" class="other-Subject"></span>
					<span class="other-FinalPrice">{{item.FinalPrice | addFormat￥ }}</span>
				</router-link>
			</a>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "recommend",
		props: {
			recData: {
				type: Array,
				default: null
			}
		}
	}
</script>

<style lang="less" scoped>
	.recommend{
		.cart-title{
			line-height: .37rem;
		    text-align: center;
		    background-color: #f7f7f7;
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