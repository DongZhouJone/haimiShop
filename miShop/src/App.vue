<template>
  <div id="app">
    
    <transition name="fade">
        <keep-alive>  
           <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>   
    </transition>
    
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div class="loading-box" v-show="loadingShow">
      <div class="loading-css3">
        <div class="loader">Loading...</div>
        <div>正在加载</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    computed : {
	   ...mapGetters([ 
        'loadingShow'
      ])
	 }
  }
</script>

<style lang="less">
  @import url(./assets/css/reset.css);

  html {
    background-color: #f7f7f7;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    -webkit-user-select:none;
   
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    color: #2c3e50;
    max-width: 640px;
    margin: 0 auto;
  }
  .fr{
    float: right;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  } 


  .loading-box {
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent
  }

  .loading-css3 {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    text-align: center;
    background: rgba(0, 0, 0, .65);
    border-radius: 5px;
    z-index: 1001;
    color: #fff;
    width: .68rem;
    height: .68rem;
    padding: .09rem;
    box-sizing:border-box;
    & :last-child{
    	white-space: nowrap;
    	margin-top: -8px;
    	margin-left: -3px;
    }
  }

  .loading-box .loader {
    -webkit-animation: loading 1.1s infinite linear;
    animation: loading 1.1s infinite linear;
    text-indent: -9999em;
    border-top: .3em solid hsla(0, 0%, 100%, .2);
    border-right: .3em solid hsla(0, 0%, 100%, .2);
    border-bottom: .3em solid hsla(0, 0%, 100%, .2);
    border-left: .3em solid #fff;

  }

  .loading-box .loader, .loading-box .loader:after {
    width: 24px;
    height: 24px;
    border-width: 3px; 
    margin: 0 auto .125rem;
    border-radius: 50%;
  }

  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }
</style>
