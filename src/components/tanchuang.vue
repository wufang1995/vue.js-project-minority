<template>
    <div id="tan">
        <div class="tan">
            <p>手机号不正确</p>
            <p @click="block">确定</p>
        </div>
    </div>
</template>
<script>
  export default {
  name: 'tanchuang',
  data(){
      return{
           active:true
      }
  },
  methods:{
           block(){
                this.$emit('isshow',false);
           }
        }
}
</script>
<style scoped lang="scss">
    #tan{
        position:absolute;
        top:0;
        left:0;
        display:flex;
        height:100%;
        width:100%;
        background:rgba(0,0,0,.5);
        .tan{
            width:90%;
            height:147px;
            background:#fff;
            margin:auto;
            border-radius:5px;
            font-size:16px;
            p{
                margin-top:30px;
                margin-left:20px;
            }
            p:nth-of-type(2){
                float:right;
                height:35px;
                width:60px;
                line-height:30px;
                border:1px solid #000;
                text-align:center;
                color:#fff;
                background:#292929;
                border-radius:5px;
                margin-right:20px;
            }

        }
    }
</style>