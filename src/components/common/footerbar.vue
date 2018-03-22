<template>
  <div>
      <div class="footerbar">
            <div>
                <h6><i class="iconfont">&#xe62d;</i></h6>
                <h6><i class="iconfont">&#xe67a;</i></h6>
                <h6><i class="iconfont">&#xe61a;</i></h6>
                <h6><i class="iconfont">&#xea3f;</i></h6>
                <h6><i class="iconfont">&#xe665;</i></h6>
            </div>
      </div>
      <p>© 2013-2018 少数派 | 粤ICP备09128966号-4 | CC BY-NC 4.0</p>
  </div>
</template>

<script>
export default {
  name: 'footerbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footerbar{
        width:100%;
        display: flex;
        justify-content:center;
        border-top:1px solid #ccc;
        margin-top:30px;
        div{
            width:86%;
            display: flex;
            justify-content:space-between;
            padding:20px 0;
            h6{
                width:40px;
                height:40px;
                border-radius:50%;
                background-color:#1c8ce9;
                line-height:40px;
                text-align:center;
                i{
                    font-size:24px;
                    color:#fff;
                    font-weight:normal;
                }
            }
            h6:nth-of-type(2){
                background-color:#e25550;
            }
             h6:nth-of-type(3){
                background-color:#42bd41;
            }
             h6:nth-of-type(4){
                background-color:#2ba3ef;
            }
             h6:nth-of-type(5){
                background-color:#fca429;
            }
        }
    }
    p{
        color:#999;
        padding:20px 0;
        width: 100%;
        text-align:center;
        font-size:12px;
    }
</style>
