<template>
  <div class="home">
    <div class="imgbox">
        <div class="banner-one">
           <img src="https://cdn.sspai.com/article/4ecf19e2-ba9e-34cc-9c4d-d5e68dbcbc50.jpg?imageMogr2/quality/95/thumbnail/!x750r/gravity/Center/crop/x750">
        </div>
    </div>
     <div class="imgbox2">
        <div class="banner-two">
            <img src="https://cdn.sspai.com/article/4a05f6a0-35ce-a976-79d2-f4b28c2aa1c1.jpg?imageMogr2/quality/95/thumbnail/!x372r/gravity/Center/crop/x372">
            <img src="https://cdn.sspai.com/article/5b71d000-ce4a-505a-b643-0ce95ddc5125.jpg?imageMogr2/quality/95/thumbnail/!x372r/gravity/Center/crop/x372">
            <img src="https://cdn.sspai.com/article/691e4b52-2c9f-f558-c0bf-2b84b516010d.jpg?imageMogr2/quality/95/thumbnail/!x372r/gravity/Center/crop/x372">
            <img src="https://cdn.sspai.com/article/fdc263ad-e27f-b527-8637-98cc3efef69d.jpg?imageMogr2/quality/95/thumbnail/!x372r/gravity/Center/crop/x372">
        </div>
     </div>
     <list></list>
     <conn></conn>
     <bottom></bottom>
  </div>
</template>

<script>
import list from "./list";
import conn from "./conn";
import bottom from "./bottom";

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    list,
    conn,
    bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home{
        margin-top:60px;
        background-color:#fafbfc;
        overflow:hidden;
        .imgbox{
           display: flex;
           justify-content:center;
           margin-top:30px;
           .banner-one{
                width:96%;
                img{
                    width:100%;
                }
            }
        }
        .imgbox2{
            display:flex;
            justify-content:center;
            margin-top:5px;
            .banner-two{
                width:96%;
                img{
                    float:left;
                    margin-bottom:3px;
                    width:49.5%;
                }
                img:nth-of-type(1){
                    margin-right:1%;
                }
                img:nth-of-type(3){
                    margin-right:1%;
                }
            }
        }
    }
</style>
