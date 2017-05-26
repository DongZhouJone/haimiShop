<template>
	<div class="footer">
		<ul class="footerNav">
			<router-link v-for="item in footerNav" v-text="item.name" :to="item.path" active-class="on" tag="li" :key="item.name"></router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name:"footer",
	data (){
		return {
			footerNav: [
				{
					name: "首页",
					path: "/home"
				},
				{
					name: "分类",
					path: "/category"
				},
				{
					name: "购物车",
					path: "/cart"
				},
				{
					name: "我的",
					path: "/user"
				}
			]
		}
	}
}	
</script>

<style lang="less" scoped>
	.footer{
		width: 100%;
		height: .5rem;
		position: fixed;
		bottom:0;
		left: 0;
		background: #fff;
		z-index: 100;
		.footerNav{
			display: flex;
			align-items: center;
			height: 100%;
			li{
				flex: 1;
				height: 100%;
				box-sizing:border-box;
				background-repeat: no-repeat;
				background-position: center 5px;
				background-size: .256rem;
				overflow: hidden;
				line-height: 5;
				text-align: center;
				&:nth-child(1){
					background-image: url(../assets/img/home.png);
				}
				&:nth-child(2){
					background-image: url(../assets/img/class.png);
				}
				&:nth-child(3){
					background-image: url(../assets/img/cart.png);
				}
				&:nth-child(4){
					background-image: url(../assets/img/user.png);
				}
				&.on{	
					color: #801a2a;
					&:nth-child(1){
						background-image: url(../assets/img/home_on.png);
					}
					&:nth-child(2){
						background-image: url(../assets/img/class_on.png);
					}
					&:nth-child(3){
						background-image: url(../assets/img/cart_on.png);
					}
					&:nth-child(4){
						background-image: url(../assets/img/user_on.png);
					}
				}
			}
		}
		&::after{
			content: "";
			display: block;
			width: 200%;
			height: 1px;
			background: #ccc;
			position: absolute;
			top: 0;
			left: -50%;
			transform: scale(.5,.5);
		}
	}
</style>