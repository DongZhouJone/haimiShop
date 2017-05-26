<template>
	<section class="container">
		 <swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for="slide in data" :key="slide.SlideID">
          <img :src="slide.PictureWebp" alt="">  
        </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
		  </swiper>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: "swiper-box",
  props: {
    data: {
      type: Array,
      default: null
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
          autoplay: 1500,
          loop: true,
          pagination : '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
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
	.container{
    .swiper-wrapper{
      .swiper-slide{
        >img{
            display: block;
            width: 100%;
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
    .swiper-button-prev{
      background-image: url(../assets/img/homeBanPrev.png); 
      left: -7px;
    }
    .swiper-button-next{
      background-image: url(../assets/img/homeBanNext.png); 
      right: -7px;
    }
    .swiper-button-next,.swiper-button-prev{
      transform: scale(.5,.5);
    }

    
  }

</style>

