<template>
    <div id="tel" v-if="isbar">
        <div class="tel">
            <p v-for="data,index in listdata3" :key="data.id" :class="cc==index?'active':''" @click="bb(index,data.code)">{{data.name_zh}} ({{data.code}})</p>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
export default {
  name: 'tel',
  data(){
      return{
      listdata3:[],
      cc:0,
      isbar:true
     // ee:null
     }

  },
  mounted(){
      axios.get("/api/v1/user/national/code/page/get?limit=99&offset=0").then(res=>{
        this.listdata3 =res.data.data;
      })
  },
  methods:{
    bb:function(index1,code){
        this.cc=index1;
        this.isbar=false;
        this.$emit('getcode',code);
        this.$emit('getissShow',this.isbar)
    }

  }
}
</script>

<style scoped lang="scss">
 
 #tel{
    position:absolute;
    top:67px;
    left:-2px;
    z-index:5;
    .tel{
        width:200px;
        height:250px;
        border:2px solid #918f8f;
        overflow:auto;
        background:#fff;
      .active{
            height:34px;
            background:#292525;
           
            line-height:34px;
            color:#fff;
        }
        p:nth-of-type(1){
             margin-top:10px;
        }
        p{  
            color:#747474;
            padding-left:11px;
            height:34px;
            line-height:34px
        }
    }
}
</style>