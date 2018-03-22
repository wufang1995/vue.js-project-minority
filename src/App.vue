<template>
  <div id="app">
    <navbar v-if="$route.path!=='/login'?$route.path!=='/enter':$route.path!=='/login'"></navbar>
    <router-view/>
    <footerbar v-if="$route.path!=='/login'?$route.path!=='/enter':$route.path!=='/login'"></footerbar>
  </div>
</template>

<script>
import navbar from './components/common/navbar.vue';
import footerbar from './components/common/footerbar.vue';
export default {
  name: 'App',
  data(){
    return{
      isshow:true
    }
  },
  components:{
    navbar,
    footerbar
  }
}
</script>

<style>
/*===================样式重置===================*/
body,h1,h2,h3,h4,h5,h6,p,a,img,input,ul,li,ol,dl,dt,dd,figcaption, figure{ padding:0; margin:0;}
img{ display:block; border:0;}
input{ outline:none;}
ul,ol{ list-style:none;}

body{ font-size:14px; color:#292525; font-family:"微软雅黑";}

a{ text-decoration:none; color:#292525;}

article, aside, canvas, details, figcaption, figure,footer, header,nav, section, summary
        {
            display: block;
        }
*{
    box-sizing:border-box;
    }

/*========================公共样式===============*/
html,body{
    height:100%;
    }
@font-face {
  font-family: 'iconfont';
  src: url('../static/iconfont/iconfont.eot');
  src: url('../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../static/iconfont/iconfont.woff') format('woff'),
  url('../static/iconfont/iconfont.ttf') format('truetype'),
  url('../static/iconfont/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
