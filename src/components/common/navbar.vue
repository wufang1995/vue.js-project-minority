<template>
  <div>
    <div class="navbar">
        <router-link to="/" tag="h1"><img src="../../assets/logo.png" height="38"></router-link>
        <div>
            <i class="iconfont"  @click="isshow">&#xe65f;</i>
            <router-link to="/login" tag="p">登录</router-link>
        </div>
    </div>
    <navv v-if="msg" @changeshow="changeshow"></navv>
  </div>
</template>

<script>
import navv from "./navv";
export default {
  name: 'navbar',
  data () {
    return {
      msg: false,
    }
  },
  components:{
    navv
  },
  methods:{
    changeshow:function(val){
        this.msg = val
    },
    isshow(){
        this.msg = !this.msg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .navbar{
        position: fixed;
        top:0;
        width: 100%;
        z-index: 20;
        transition: all .3s;
        background-color: #292525;
        height: 60px;
        border-bottom: 1px solid #292525;
        color:#fff;
        display:flex;
        justify-content:space-between;
        h1{
            margin: 11px 0;
            margin-left: 10px;
        }
        div{
            display:flex;
            font-size:16px;
            height:100%;
            line-height:60px;
            i{
                padding:0 20px;
                font-size:30px;
                color:#615f5f;
            }
            p{
                padding-right: 20px;
            }
        }
    }
</style>
