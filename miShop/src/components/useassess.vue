<template>
	<div class="useassess">
		<div v-for="item in useAsData">
			<header class="title">
				<img :src="item.Buyer.Avatar" alt="">
				<span v-text="item.Buyer.NickName"></span>
				<time class="fr">{{ item.CreateTime | timeFormat}}</time>
			</header>
			<article v-text="item.BuyerNote" class="useNote"></article>
			<div class="picWrap" v-if="item.BuyerPicturesThumbWebp != '' ">
				<img v-for="src in (item.BuyerPicturesThumbWebp).split(',')" :src="src" alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "useassess",
	props: {
		useAsData: {
			type: Array,
			default: null
		}
	}
}
</script>

<style lang="less" scoped>
.useassess{
	.title{
		height: .2rem;
		padding: .1rem 0;
		img{
			width: .2rem;
			height: .2rem;
		}
		span{
			font-size: 12px;
			color:#999;
		}
		time{
			color: #ccc;
			font-size: 12px;
			line-height: .2rem;
		}
	}
	.useNote{
		padding: .1rem;
		box-sizing: border-box;
		font-size: 12px;
	}
	.picWrap{
		margin-bottom: .12rem;
		img{
			width: .42rem;
			height: .42rem;
			margin-right: .05rem;
		}
	}
}	
</style>