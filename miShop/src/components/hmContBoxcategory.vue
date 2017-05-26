<template>
	<div class="hmContBoxCategory">
		<div v-for="item in datas" class="MoreProducts">
			<header class="other-title" v-text="item.Title"></header>
			<nav class="hm-home-nav">
				<a v-for="navs in item.Products">
					<router-link :to="{name: 'detalis', params: { id : navs.ProductID }}">
						<div :style="{backgroundImage:`url(${ navs.Pictures}% )`}"></div> 
						<span v-text="navs.Subject" class="other-Subject"></span>
						<span class="other-FinalPrice">{{navs.FinalPrice | addFormat￥ }}</span>
					</router-link>
				</a>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: "hmContBoxCategory",
	props: {
		datas: {
			type: Array,
			default: null
		}
	}
}	
</script>

<style lang='less' scoped>
.MoreProducts{
	.other-title{
		line-height: .41rem;
	    position: relative;
	    text-align: center;
	    padding: 0 .64rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-size: .12rem;
	}
	.hm-home-nav{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
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