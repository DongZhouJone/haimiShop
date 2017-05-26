<template>
	<section class="containers">
		 <swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
       <!--  {{ JSON.parse(data)}} -->
		    <swiper-slide v-for="slide in JSON.parse(data)" :key="slide">
          <img :src="slide.picture" alt="">  
        </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: "swiper-box",
  props: {
    data: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default:""
    }
  },
	components: {
		swiper,
  		swiperSlide
	},
	 data() {
      return {
        swiperOption: {
          pagination : '.swiper-pagination',
          autoplayDisableOnInteraction: false
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}	
</script>

<style lang="less">
	.containers{
    .swiper-container{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 240px;
    }
    .swiper-wrapper{
      width: 100%;
      height: 100%;
      .swiper-slide{
        width: 100%!important;
         height: 100%!important;
         overflow: hidden;
        >img{
            width: 100%;
            margin-top: -10%;
        }
      }
    }
    .swiper-pagination-bullet{
          display: inline-block;
          width: .06rem;
          height: .02rem;
          margin: 0 3px;
          border-radius: inherit;
          background-color: #ccc;
          opacity: 1;
          &.swiper-pagination-bullet-active{
                background-color: #007aff;
                width: .2rem;
                transition: all .5s ease;
          }
    }
 

    
  }

</style>

