<template>
    <div id="bottom1">
        <p id="name">
          <span>推荐专题</span>
          <span>查看全部</span>
        </p>
        <div class="con1" v-for="data in listdata1" :key="data.id">
          <img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445`">
          <div class="zhe">
          <p class="zhao">{{data.title}}</p>
          <p class="cen">查看专题</p>
          </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
export default {
  name: 'bottom',
  data(){
     return{
      listdata1:[]
     }

  },
  mounted(){
      axios.get("/api/v1/topics?limit=999&offset=0&sort=recommended_at&include_total=false&recommended=1").then(res=>{
        this.listdata1 =res.data.list;

      })
    }

}
</script>

<style scoped lang="scss">
  #bottom1{
    margin-left:10px;
    margin-right:10px;
    #name{
      height:30px;
      line-height:30px;
      border-bottom:1px solid #ccc;
      span:first-of-type{
        display:block;
        float:left;
        height:30px;
        border-bottom:1px solid #7f7c7d;
        font-weight:bold;
      }
      span:last-of-type{
        float:right;
        color:#b6b6b6;
      }
    }
    .con1{
      margin-top:12px;
      position:relative;
      height:210px;
      img{
        width:100%;
        height:100%;
      }
      .zhe{
        width:100%;
        height:210px;
        background:rgba(0,0,0,.5);
        position:absolute;
        top:0;
        left:0;

      .zhao{
        color:#fff;
        font-size:16px;
        text-align:center;
        margin-top:60px;
        font-size:18px;
        margin-bottom:30px；
      }
      .cen{
        color:#fff;
        width:79px;
        border:1px solid #fff;
        border-radius:20px;
        line-height:20px;
        height:25px;
        text-align:center;
        margin:40px auto;
        font-size:13px;
        }
      }
     }
  }
</style>