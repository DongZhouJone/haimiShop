<template>
	<div class="cartShopList">
		<div class="goToShop" v-if="">
			<router-link to="/home" class="goTo">
				<img src="../assets/img/nullPros.png" height="155" width="221" alt="">
				<span class="goTo-text">去首页逛逛</span>
			</router-link>
		</div>	
	</div>
</template>

<script>
	export default {
		name: "cartTop",
		props: {
			shopList: {
				type: Array,
				default: null
			}
		}
	}
</script>

<style lang="less" scoped>
	.cartShopList{
		background: #F7F7F7;
		.goToShop{
			padding-bottom: .5rem;
			.goTo{
				display: block;
				cursor: pointer;
				img{
					display:block;
					width: 25%;
					height: 25%;
					margin-left: auto; 
					margin-right: auto; 
					margin-top: 1.12rem;
					margin-bottom: .1rem;
				}
				.goTo-text{
					display: block;
				    margin: 0 auto;
				    width: .63rem;
				    border: 1px solid #000;
				    text-align: center;
				    font-size: 12px;
				    color: #242424; 
				}
			}
		}
	}
</style>