<template>
    <div id="hah">
         <router-link to="/" tag="div" id="header">
            <img src="../assets/logo2.png"  width="98"/>
        </router-link>
         <router-link to="/enter" tag="div" id="center"> + 注册</router-link>
        <div id="bottom">
          <div class="haha">
          <span>+ 86</span>
          <i class="iconfont">&#xe60e;</i>
          <input  v-model="phone" type="text" placeholder="手机号">
          </div>
          <input type="text" placeholder="密码" v-model="password">
        </div>
        <div id="footer">
          <input type="checkbox"><span>记住密码</span>
          <span>忘记密码</span>
        </div>
        <button @click="hahah">登录</button>
        <p id="oo"></p>
        <aside>
          <img src="../assets/1.jpg" alt="">
        </aside>
        <p>使用其他方式登录</p>
        <p>从即日起，少数派将默认使用手机号进行帐户注册。老用户仍然可以使用邮箱的方式登录，但根据网信办的规定，未绑定手机号的用户将无法进行评论和撰写文章。请登录后到</p>
    </div>

</template>
<script>
import axios from "axios";
export default {
  name: 'login',
  data(){
      return{
        phone:null,
        password:null
      }
  },
  methods:{
       hahah(){
        var val = this.phone;
        var re = /^1[3,4,5,7,8]\d{9}$/;
        if(re.test(val)){
          axios.post('/api/login', {
              phone:this.phone,
              password:this.password
          })
          .then(function (res) {
              if (res.data=='1') {
                 window.location.href="http://localhost:8080"
              };
          })
        }
        else{
         console.log('hah')
        }
       }
      },
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
  #hah{
        padding-left:17px;
        padding-right:17px;
    #header{
      height:55px;
      overflow:hidden;
      img{
        margin-top:17px;
      }
    }
    #center{
      text-align:right;
      height:50px;
      line-height:50px;
      color:#4a90e2;
      margin-right:5%;
      font-size:18px;
      margin-bottom:10px;
    }
    #bottom{
      input{
        height:50px;
        width:95%;
        margin-bottom:20px;
        border:1px solid #000;
        text-indent:1.5em;
        color:#cccc;
        font-size:18px;
      }
      .haha{
        position:relative;
        input{
          text-indent:4em;
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
        }
      }
    }
    #footer{
      input{
        margin-top:10px;
      }
      span:nth-of-type(1){
         margin-left:5px;
         font-size:18px;
      }
      span:nth-of-type(2){
        float:right;
        font-size:18px;
        margin-right:5%;
      }
    }
    button{
       width:95%;
        height:55px;
        margin-top:20px;
        color:#fff;
        background:#000;
        border:0;
        font-size:16px;
    }
    #oo{
      margin-top:25px;
      border:1px solid #efefef;
      margin-right:20px;
    }
    aside{
      display:flex;
      img{
        margin:10px auto;
      }
    }
    p{
      margin-top:18px;
      margin-right:20px;
      text-align:center;
      color:#9b9b9b;
      width:95%;
    }
  }
</style>