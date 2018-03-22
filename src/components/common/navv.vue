<template>
    <div id="nav">
        <p>
          <i class="iconfont">&#xe62b;</i>
          <input  type="text" placeholder="搜索">
        </p>

        <ul @click="foo">
          <li>专题广场</li>
          <li>Matris</li>
          <li>付费专栏</li>
          <li>效率工具</li>
          <li>手机摄影</li>
          <li>生活方式</li>
          <li>游戏</li>
          <li>硬件</li>
        </ul>
        <p>寻求合作/支持我们</p>

    </div>
</template>
<script>
  export default {
  name: 'tanchuang',
  data(){
    return{
      baz:true
    }
  },
  methods:{
      foo(){
          this.$emit('changeshow',false)
      }
   }
}
</script>
<style scoped lang="scss">
@font-face {
  font-family: 'iconfont';
  src: url('../../../static/font/iconfont.eot');
  src: url('../../../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../../static/font/iconfont.woff') format('woff'),
  url('../../../static/font/iconfont.ttf') format('truetype'),
  url('../../../static/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#nav{
  padding-left:15px;
  padding-right:10px;
  position:fixed;
  top:60px;
  height: 100%;
  width:100%;
  background-color:#fff;

  p{
    width:95%;
    height:34px;
    i{
      line-height:34px;
      color:#adadad;
      font-size:16px;
      font-weight:bold;
    }
    input{
      border:0;
    }
    input::-webkit-input-placeholder{
            color:#adadad;
            font-size:16px;
      }
  }
  ul{
    margin-top:67px;
    overflow:hidden;
    margin-left:40px;
    width:95%;
    li{
      width:155px;
      text-align:center;
      float:left;
      height:40px;
      line-height:40px;
      font-size:16px;
    }
  }
  p:nth-of-type(2){
    margin-top:228px;
    text-align:center;
  }
}
</style>