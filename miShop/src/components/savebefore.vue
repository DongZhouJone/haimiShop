<template>
		<div class="loginBox" ref="loginBox">
			<div> 
				<div class="info cle" > 
					
					<img  :src="picturesData | getDatas( id ) "> 
					<div class="info-fr"> 
						<p class="f16 c_red">{{ infoData | getPrice( id ) | addFormat￥ }}</p> 
						<p class="c_999 f10 stock">(库存<span>{{ infoData | getStock(id) }}</span>件)</p>
						<p class="c_666 f14">已选择：<span>{{ text }}</span></p>
					</div>
				</div>  
				<div> 
					<div class="sku" v-for="(sel,index) in useSelectData">
						<h3 v-text="sel.AttrName"></h3> 
						<div class="list" rel="wrap">

							<span 
								v-for="(i,index,event) in data= index == 0 ? useSelectData[0].AttrValues.split(',') : null" 
								v-text="i"
								ref="list"
								@click="changeCont( picturesData[index].ValueID,index ,picturesData[index].ValueName,$event)"
							></span>
						
							<span v-for="(i,index,event) in data = index == 1? useSelectData[1].AttrValues.split(',') :null"
								v-text="i"
								ref="lists"
								@click="changeContTwo( i, $event)"
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
</template>

<script>
	export default{
		methods: {
			changeCont ( key ,index ,name ,e ){		
			/*难点*/ 
			var thisDom = e.target;
			console.log(name)
			thisDom.className = !thisDom.className ? "on"  : "";

			this.text = name;
			
			this.$refs.list.forEach(function( item, i ){
				if( item == thisDom ) return;
				item.className = "";
			});

			/*字符还原*/ 
			var str = "";	
			if(!thisDom.className){
				for(var i in this.useSelectData){
					str += this.useSelectData[i].AttrName+","
				}
				this.text=str.slice(0,str.length-1);
			};
			/*字符还原*/ 
			/*头疼*/ 
		
			return this.id = key;
		},
		changeContTwo( name, e ){
			var that = this;
			var thisDom = e.target;
			thisDom.className = !thisDom.className ? "on"  : "";

			this.$refs.list.forEach(function( item, i ){
				console.log(item.)
				if( item.className == "on" ){
					return 	that.text =  item.innerHTML+","+ name;
				};

			})
			
			
			// 二级菜单
			this.$refs.lists.forEach(function( item, i ){
				if( item == thisDom ) return;
				item.className = "";
			});

			/*字符还原*/ 
			var str = "";	
			if(!thisDom.className){
				for(var i in this.useSelectData){
					str += this.useSelectData[i].AttrName+","
				}
				this.text=str.slice(0,str.length-1);
			};
		},
		}
	}
</script>

<style>
	
</style>