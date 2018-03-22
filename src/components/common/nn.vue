<template>
    <div id="nn">
<!--     <slot></slot> -->
      <button @click="isShow=!isShow">出来</button>
      <navv v-if="isShow" @changeshow="changeshow"></navv>
    </div>

</template>
<script>
  import navv from "./navv"
  export default {
  name: 'nn',
  data(){
    return{
       isShow:false
    }
  },
  components:{
       navv
  },

  methods:{
    changeshow(val){
      this.isShow=val
    }
  }
}
</script>
<style scoped lang="scss">
#nn{

    button{
      height:45px;
      width:50px;
 

    }
}
</style>