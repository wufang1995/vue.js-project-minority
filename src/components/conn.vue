<template>
    <div id="conn">
        <div class="topp">
          <h3>Matrix精选</h3>
        </div>
        <div class="conn"  v-for="data in listdata2" :key="data.id">
          <h3>{{data.title}}</h3>
          <p>
            <img :src="`https://cdn.sspai.com/${data.author.avatar}?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48`"/>
            <span>{{data.author.nickname}}</span>
          </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'conn',
  data(){
      return{
      listdata2:[]
     }

  },
  mounted(){
      axios.get("/api/v1/articles?limit=5&offset=0&is_matrix=1&sort=matrix_at&include_total=false").then(res=>{
        this.listdata2 =res.data.list;
      })
  },
}
</script>

<style scoped lang="scss">
  #conn{
    margin-top:20px;
    margin-left:10px;
    margin-right:10px;
    overflow:hidden;
    .topp{
      height:35px;
      border-bottom:1px solid  #f2f2f4;
      h3{
      height:35px;
      line-height:35px;
      width:89px;
      border-bottom:1px solid #a3a1a2;
     }
    }
    .conn{
      margin-bottom:30px;
      h3{
         margin-top:15px;
          margin-bottom:10px;
      }
      p{
        overflow:hidden;
        img{
          height:24px;
          width:24px;
          border-radius:20px;
          float:left;
          margin-right:10px;
        }

        span{
          float:left;
          margin-top:3px;
          color:#c4c4c5;
        }

      }
    }
  }
</style>