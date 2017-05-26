<template>
	<div class="goPayMoney">
		<div class="left">
			<div>
				<router-link to="/home">首页</router-link>	
			</div>
			<div :class="{ 'on' : tag }" @click="toggleClass()">
				
			</div>
			<div>
				<router-link to="/cart">购物车</router-link>	
			</div>
		</div>
		<div class="right">
			<span>加入购物车</span>
			<span class="rightAway">立即购买</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "payMoney",
		data (){
			return {
				tag: false
			}
		},
		methods: {
			toggleClass(){
				return this.tag = !this.tag
			}
		}
	}
</script>

<style lang="less" scoped>
	.goPayMoney{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .4rem;
		background: #fff;
		display: flex;
		.left{
			width: 40%;
			display: flex;
			div{
				flex: 1;
				background-repeat: no-repeat;
				background-size: 65% auto;
				background-position: center center;
				background-image: url(../assets/img/home.png);
				>a{
					font-size: 0;
					width: 100%;
					height: 100%;
					display: block;
				}
				&:nth-child(2){
					background-image: url(../assets/img/soucang.png);
					&.on{
						background-image: url(../assets/img/soucang_on.png);
					}
				}
				&:nth-child(3){
					background-image: url(../assets/img/cart.png);
				}
			}
		}
		.right{
			width: 65%;
			display: flex;
			text-align: center;
			align-items: center;
			line-height: .4rem;
			>span{
				flex: 1;
				font-size: 12px;
				&.rightAway{
					color: #fff;
					background-color: #801a2a;
				}
			}
		}
	}
</style>