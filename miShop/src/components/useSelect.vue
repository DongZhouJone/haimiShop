<template>
	<div class="useSelect">
		
		<div class="select">
			<a href="javascript:;" @click="SelectTo()">请选择：
			<span >{{ text }}</span></a>
		</div>
		<transition name="slide-fade">
			<div class="eclipse" v-show="show" @click="dis()"></div>
		</transition>

		<div class="loginBox" ref="loginBox">
			<div> 
				<div class="info cle" > 
					
					<img  :src="picturesData | getDatas( id ) "> 
					<div class="info-fr"> 
						<p class="f16 c_red">{{ thismoney }}</p> 
						<p class="c_999 f10 stock">(库存<span>{{ infoData | getStock(id) }}</span>件)</p>
						<p class="c_666 f14">已选择：<span>{{ text }}</span></p>
					</div>
				</div>  
				<div> 
					<div class="sku" v-for="(sel,index) in useSelectData">
						<h3 v-text="sel.AttrName"></h3> 
						<!--  -->
						<div class="list" ref="wrap" @click="contGet( index ,$event)">
							<span 
								v-for="i in  sel.AttrValues.split(',')" 
								v-text="i"
								ref="list"
								
							></span>
						</div>
					</div>
				</div> 
				<div class="nums cle"> 
					<span class="fl f14">购买数量</span> 
					<div class="fr"> 
						<button @click="changeCount(-1)">－</button> 
						<input type="text" value="num" v-model="num">
						<button @click="changeCount(1)">＋</button> 
					</div> 
				</div> 
				<div class="submit">确定</div>  
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "useSelect",
	data (){
		return {
			num : 1,
			id : 0,
			text: "",
			show: false,
			data: [],
			thismoney: "",
			fag1: false,
			fag2: false
		}
	},
	props: {
		useSelectData: {
			type: Array,
			default: null
		},
		infoData: {
			type: Array,
			default: null
		},
		picturesData: {
			type: Array,
			default: null
		},
		money: {
			type: String
		},
		plaseSelMenu: {
			type: String
		}

	},
	mounted (){
		this.$nextTick(function(){
	      this.initCss(); 
	      this.thismoney = this.money;	
	    })
	},
	methods: {
		SelectTo(){
			this.$refs.loginBox.style.marginBottom = 0+"px";
			return this.show = true;
		},
		changeCount( way ){
			 if(way>0){
                this.num++;
                if(this.num>=6) {console.log("别瞎买") ; this.num=6;}
            }else{
                this.num--;
                if(this.num<=0)  {console.log("又尼玛不买了？") ; this.num=1;}
            }
		},
		contGet( index , e ){
			var that = this;
			var thisEl = e.target;
			var thisInd= 0;
			var spans = this.$refs.wrap[index].querySelectorAll("span");

			//取消点击其他默认行为
			if( thisEl.nodeName == "DIV"){
                return false;
            }
			
			thisEl.className =  thisEl.className ? "" : "on"; 	
			spans.forEach(function(item,i){
                if( item == thisEl ){
                    thisInd = i;
                    return;
                }
                item.className = "";
            });
			
			var thisCont = thisEl.innerHTML;

			this.data=[];
			this.infoData.forEach( function( val, index) {
				if( val.SkuName.match( thisCont ) ){
					that.data.push(val);
				}
			});
			
			if( thisEl.parentNode == this.$refs.wrap[0] && this.picturesData != []){
            	for( var i = 0;i<thisEl.parentNode.children.length;i++){
            		thisEl.parentNode.children[i].setAttribute("data-id",this.picturesData[i].ValueID);
            		thisEl.parentNode.children[i].setAttribute("data-value",this.picturesData[i].ValueName);
            	}

            	for( let i = 0; i < this.$refs.wrap[1].children.length;i++){
            		this.$refs.wrap[1].children[i].setAttribute("data-id",that.data[i].SkuKey);
            	}
            	that.id = thisEl.getAttribute("data-id");
            	that.text =	 thisEl.getAttribute("data-value");
            	
            }
            if( thisEl.parentNode != this.$refs.wrap[0] ){
            	for( var i = 0;i<thisEl.parentNode.children.length;i++){
            		thisEl.parentNode.children[i].setAttribute("data-id",that.data[i].SkuKey);
            	}

            	for( let i = 0; i < this.$refs.wrap[0].children.length;i++){
            		this.$refs.wrap[0].children[i].setAttribute("data-id",this.picturesData[i].ValueID);
            	}

         		 console.log(thisEl.getAttribute("data-id"))
            }
         
		},
		getMoney( data,type ){
		
				var arr = [],	
					min = 0,
					max = 0;
				for(var i = 0; i < data.length ; i++){
					arr.push( data[i].Price );
				}	
				min = arr.sort()[0]
				max = arr.sort()[arr.length-1]
				if( min == max ){
					this.thismoney = "￥"+min;
				}else{
					this.thismoney = "￥"+min+"-"+"￥"+max;
				}

		},
		initCss(){
			var box = this.$refs.loginBox;
			//this.text 	
			
			this.text = this.plaseSelMenu;
			//初始化弹出框位置
			box.style.marginBottom = - box.offsetHeight + "px";
			//该页购物车弹出框数据渲染
			/*第一层循环*/
			this.data = this.picturesData;


			
		},
		dis (){
			//销毁
			this.show = false;
			this.$refs.loginBox.style.marginBottom = - this.$refs.loginBox.offsetHeight + "px";
		}
	}
}
</script>

<style lang="less" scoped>
.useSelect{
	margin-left: -10px;
    margin-right: -10px;
   
	.select{
		a{
			font-size: 12px;
			color: #242424;
			display: block;
			padding-right: .16rem;
			height: .37rem;
			line-height: .37rem;
			border-top: .08rem solid;
			border-bottom: .08rem solid;
			border-color: #f7f7f7;
			padding-left: 10px;
			position: relative;
			span{
				font-size: 12px;
			}
			&:after{
				content:"";
				display: block;
				width: 10px;
				background: url(../assets/img/xiangqing.png) no-repeat center/50%;
			    height: .37rem;
			    position: absolute;
			    top: 0;
			    right: .1rem;
			    background-size: 100%;
			}
		}
	}

	.eclipse{   
	    position: fixed;
	    top: 0px;
	    left: 0px;
	    right: 0px;
	    bottom: 0px;
	    z-index: 10;
	    transition: background-color 0.3s linear;
	    background-color: rgba(0, 0, 0, 0.5);
	    will-change: background-color;
	    filter: blur(10px);
	 }   
	 .slide-fade-enter-active {
	    transition: all .3s ease;
	  }
	  .slide-fade-leave-active {
	    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	  }
	  .slide-fade-enter, .slide-fade-leave-active {
	    opacity: 0;
	  }  
			
	 .loginBox{
	 	position:fixed;
	 	bottom:0;left:0;right:0;
	 	margin:auto;
	 	width: 100%;
	 	background:#fff;
	 	z-index: 999;
	 	-webkit-transition: all .3s ease;
   		transition: all .3s ease;
	 	.info{
	 		padding: .13rem .1rem;
	 		display: flex;
	 		border-bottom: 1px solid #e0e0e0;
	 		img{
				width: .51rem;
				height: .51rem;
				display: block;
	 		}
	 		.info-fr{
	 			flex: 1;
	 			padding-left: .10rem;
	 		}
	 		.c_red{
	 			    color: #991f33;
	 		}
	 	}
	 	.sku{
	 		margin: 0 .1rem;
		    border-bottom: 1px solid #e6e6e6;
		    padding: .1rem 0 .06rem;
		    h3{
		    	margin-bottom: 8px;
		    }
		    .list{
		    	font-size: 12px; 
		    	overflow: hidden;
		    	span{
		    		display: inline-block;
				    margin-right: .1rem;
				    margin-bottom: .06rem;
				    line-height: .23rem;
				    padding: 0 .09rem;
				    white-space: nowrap;
				    border: 1px solid #000;
				    float: left;
				    font-size: 12px;
				    &.on,&.active{
				    	border: 1px solid #801a2a;
   						color: #801a2a;
				    }
		    	}
		    	
		    }
		   
	 	}
	 	 .nums{
		    	padding: .11rem .1rem;
			    height: .24rem;
			    line-height: .24rem;
			    display: flex;
			    justify-content: space-between;
			    .fr{
			    	width: 100px;
			    	display: flex;
			    	button{
			    		display: block;
					    height: .24rem;
					    text-align: center;
					    
					    background: #fff;
					    border: 1px solid #e6e6e6;
					    outline: none 0;
			    	}
			    	input{
			    		border: 0;
						width: 48px;
			    		border-top: 1px solid #e6e6e6;
    					border-bottom: 1px solid #e6e6e6;
    					text-align: center;
    					outline: 0 none;
			    	}
			    }
		}
		.submit{
			    line-height: .37rem;
			    text-align: center;
			    background: #801a2a;
			    color: #fff;
			    font-size: 13px;
		}
	 	
	 }
}
</style>