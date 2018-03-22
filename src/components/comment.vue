<template>
    <div class="commentlist" v-if="commentcount">
        <h3>评论 ( {{commentcount}} )</h3>
        <div v-for="item in commentdata" :key="item.id">
            <img  style="width: 50px; height: 50px;" :src="`https://cdn.sspai.com/${item.author.avatar}?imageMogr2/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100`">
            <section>
                <p>{{item.author.nickname}}</p>
                <p v-html="item.comment"></p>
                <ul>
                    <li>11分钟前</li>
                    <li><i class="iconfont">&#xe6b3;</i></li>
                    <li>回复</li>
                    <li>举报</li>
                </ul>
                <dl v-for="senitem in item.comments" :key="senitem.id">
                    <dt>
                         <img  style="width: 50px; height: 50px;" :src="`https://cdn.sspai.com/${senitem.author.avatar}?imageMogr2/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100`">
                    </dt>
                    <dd>
                        <p>{{senitem.author.nickname}}</p>
                        <p v-html="senitem.comment"></p>
                        <ul>
                            <li>11分钟前</li>
                            <li><i class="iconfont">&#xe6b3;</i></li>
                            <li>回复</li>
                            <li>举报</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
      name: 'comment',
      props:['data','commentcount'],
      data () {
        return {
          commentdata: null
        }
      },
      mounted(){
            //接受动态路由的传参
          /*  console.log(this.$route.params);*/
            //ajax
           axios.get(`/api/v1/comments?article_id=${this.data}&offset=0&limit=10`).then(res=>{
                this.commentdata = res.data.list;
               /* console.log(this.commentdata)
*/
            });
    }
    }
</script>

<style scoped lang="scss">
    .commentlist{
        width:90%;
        margin-left:5%;
        margin-right:5%;
        margin-top:30px;
        div{
            margin-top:40px;
            overflow:hidden;
            img{
                border-radius:50%;
                float:left;
            }
            >section{
                float:right;
                width:83%;
                p:nth-of-type(1){
                  font-weight:bold;
                  font-size:16px;
                  margin-bottom:5px;
                }
                ul{
                    margin-top:10px;
                    overflow:hidden;
                    li{
                        float:right;
                        font-size:12px;
                        color:#9b9b9b;
                        margin-right:12px;
                    }
                    li:nth-of-type(1){
                        float:left;
                    }
                    li:nth-of-type(2){
                        margin-right:0;
                    }
                }
                dl{
                    margin-top:30px;
                    overflow:hidden;
                    dt{
                        float:left;
                    }
                    dd{
                        width:80%;
                        float:right
                    }
                }
            }
        }
    }
</style>