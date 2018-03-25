<template>
    <div id="all">
        <router-link to="/" tag="div" id="header">
            <img src="../assets/logo2.png"  width="98"/>
        </router-link>
        <div id="con">
            <tel v-if="issShow" @getcode="getcode" @getissShow="getissShow"></tel>
            <div class="ja">
            <span  @click="gai" >+ {{code}}</span>
            <i class="iconfont" v-if="!issShow" key="1" >&#xe60e;</i>
            <i class="iconfont" v-else="issShow" key="2">&#xe60f;</i>
            <input type="text"  placeholder="手机号码" v-model="phone">
            </div>
              <input type="text" placeholder="昵称(2-10个字符,中英文)" v-model="name">
              <input type="text" placeholder="密码(不少于6位)" v-model="password">
              <input type="text" placeholder="再次输入密码">
              <div class="l1">
              <input type="text" placeholder="输入验证码">
              <span>发送验证码</span>
              </div>
              <div class="l2">
              <input type="checkbox">
              <p>我已阅读并同意《<span>少数派用户协议</span>》</p>
              </div>
        </div>
        <button @click="tanchuang">注册</button>
        <tanchuang v-if="block" @isshow="isshow"></tanchuang>
    </div>

</template>
<script>
import axios from "axios";
import tel from "./tel"
import tanchuang from "./tanchuang"
export default {
  name: 'enter',
  data(){
        return{
            issShow:false,
            code:86,
            block:false,
            phone:null,
            name:null,
            password:null,
        }
  },
  components:{
      tel,
      tanchuang
  },
  methods:{
    gai(){
       this.issShow=!this.issShow;

    },
    getcode(vall){
            this.code=vall;
    },
    getissShow(nll){
            this.issShow=nll;
    },
    tanchuang(){
        var val = this.phone;
        var re = /^1[3,4,5,7,8]\d{9}$/;
        if(re.test(val)){
          this.block=false;
          axios.post('/api/user', {
              name:this.name,
              phone:this.phone,
              password:this.password
          })
          .then(function (res) {
              if (res.data=='1') {
                window.location.href="http://localhost:8080/#/login"
              }else{

              }
          })
        }
        else{
          this.block= true
         }
       },
    isshow(val){
        this.block = val;
      }
    }
  }

</script>

<style scoped lang="scss">
@font-face {
  font-family: 'iconfont';
  src: url('../../static/font/iconfont.eot');
  src: url('../../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../static/font/iconfont.woff') format('woff'),
  url('../../static/font/iconfont.ttf') format('truetype'),
  url('../../static/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:20px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
  #all{
    margin-right:17px;
    margin-left:17px;
    #header{
      height:60px;
      width:100%;
      overflow:hidden;
      margin-bottom:5px;
      img{
          margin-top:16px;
      }
    }
    #con{
         position:relative;
    .ja{
        position:relative;
        input{
             text-indent:5em;
        }
        span{
          position:absolute;
          top:15px;
          left:11px;
        }
        i{
          position:absolute;
          top:14px;
          left:47px;
          transition:1s;
        }
    }
      input{
        height:50px;
        width:95%;
        margin-bottom:20px;
        border:1px solid #000;
        text-indent:1.5em;
        color:#666;
        font-size:16px;
        }
      input::-webkit-input-placeholder{
            color:#efefef;

      }
      .l2{
        input:last-of-type{
        width:14px;
        height:14px;
        float:left;
        margin-top:3px;
      }
      p{
        margin-left:5px;
        float:left;
      span{
        color:#295396;

        }
      }
      }
      .l1{
        position:relative;
       span{
          position:absolute;
          right:35px;
          top:15px;
          color:#295396;

       }
        }
      }
      button{
        width:95%;
        height:55px;
        margin-top:14px;
        color:#fff;
        background:#000;
        border:0;
        margin-left:-13px
      }
    }


</style>