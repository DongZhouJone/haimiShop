<template>
	<div class="user">
		<section>
			  <div class="user-info">
				<span class="avatar" >
					<label>
						<input type="file" hidden class="file"/>

						<img src="../assets/img/default-avatar-square.png"/>
					</label>	
				</span>
				<span class="nickname" >海蜜_owmg4j</span>
				<i></i>
			  </div>
		      <section class="user-menus">
		        <ul >
		          <li class="line">
		          	<a >我的订单<span class="fr">查看全部订单</span></a>
		          </li>
		          <li class="column cle">
		          	<a>待付款</a><a>待发货</a><a>待收货</a><a>待评价</a><a>退款</a>
		          </li>
		          <li class="blank"></li>
		          <li class="line"><a>收藏宝贝</a></li>
		          <li class="line"><a>红包优惠券</a></li>
		          <li class="line"><a>足迹</a></li>
		          <li class="line"><a>积分商城</a></li>
		          <li class="line"><a>收货地址</a></li>
		          <li class="line"><a>绑定手机
		        	  <span class="fr c_666">15810241235</span></a>
		          </li>
		          <li class="line"><a>海蜜客服</a></li>
		        </ul>
		      </section>
			  <div class="logout">退出登陆</div>	
		</section>
		<hm-footer></hm-footer>
	</div>
</template>

<script>
import hmFooter from "@/components/hmFooter"
export default {
	name: "user",
	components: {
		hmFooter
	}
}
</script>

<style lang="less" scoped>
.user{
	background: #f7f7f7;
	padding-bottom: 100px;
	.user-info{
		padding: .1rem;
		background: #fff;
		box-sizing:border-box;
		overflow: hidden;
		.avatar{
			position: relative;
		    display: block;
		    float: left;
		    width: .42rem;
		    height: .42rem;
		    padding: 0;
		    margin-right: .1rem;
		    background: none;
		    img{
		    	width: 100%;
		    }
		}
		.nickname{
			line-height: .42rem;
		    display: block;
		    overflow: hidden;
		    max-width: .8rem;
		    height: .42rem;
		    padding-right: .1rem;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    float: left;
		}
		i{
			display: block;
		    float: left;
			width: .19rem;
		    height: .42rem;
		    background: url(../assets/img/bianji.png) no-repeat center;
		    background-size: 100%;
		}
	}
	.user-menus{
		margin-top: .08rem;
		background: #fff;
		ul{
			.line{
				border-bottom: 1px solid #eee;
			    position: relative;
			    padding-left: .3rem;
			    margin-left: .1rem;
			    font-size: 12px;
			    height: .4rem;
			    line-height: .4rem;
			    &:first-child{
			    	height: .37rem;
    				line-height: .37rem;
    				 padding-left: 0;
			    }
			    &::after{
			    	content: '';
				    display: block;
				    width: .1rem;
				    height: .37rem;
				    position: absolute;
				    top: 0;
				    right: .1rem;
				    background: url(../assets/img/xiangqing.png) no-repeat 50%;
				    background-size: 100%;
			    }
			    .fr{
			    	padding-right: .25rem;
			    }
			    &::before{
		    	    content: '';
				    display: block;
				    width: .2rem;
				    height: .4rem;
				    background-repeat: no-repeat;
				    background-position: 50%;
				    position: absolute;
				    top: 0;
				    left: .03rem;
				    background-size: 100%;
			    }
			    &:nth-child(4){
			    	&::before{
			    		background-image: url(../assets/img/pic1.png);
			  		 }
				}
				&:nth-child(5){
			    	&::before{
			    		background-image: url(../assets/img/pic2.png);
			  		 }
				}
				&:nth-child(6){
			    	&::before{
			    		background-image: url(../assets/img/pic3.png);
			  		 }
				}
				&:nth-child(7){
			    	&::before{
			    		background-image: url(../assets/img/pic4.png);
			  		 }
				}
				&:nth-child(8){
			    	&::before{
			    		background-image: url(../assets/img/pic5.png);
			  		 }
				}
				&:nth-child(9){
			    	&::before{
			    		background-image: url(../assets/img/pic6.png);
			  		 }
				}
				&:nth-child(10){
			    	&::before{
			    		background-image: url(../assets/img/pic7.png);
			  		 }
				}
			}
			.column{
				display: flex;
				padding-bottom: .05rem;
				>a{
					flex: 1;
					text-align: center;
					font-size: 12px;
					background-repeat: no-repeat;
				    background-size: .192rem;
				    background-position: center .16rem;
				    padding-top: .4rem;
					&:nth-child(1){
						background-image: url(../assets/img/fukuang.png);
					}
					&:nth-child(2){
						background-image: url(../assets/img/daifahuo.png);
					}
					&:nth-child(3){
						background-image: url(../assets/img/daishouhuo.png);
					}
					&:nth-child(4){
						background-image: url(../assets/img/daipingjia.png);
					}
					&:nth-child(5){
						background-image: url(../assets/img/tuikuan.png);
					}
				}
			}
			.blank{
				height: .1rem;
    			background-color: #f7f7f7;
			}
		}
	}
	.logout{
		margin: .08rem 0 .23rem;
	    background-color: #fff;
	    height: .34rem;
	    line-height: .34rem;
	    text-align: center;
	}
}

</style>
