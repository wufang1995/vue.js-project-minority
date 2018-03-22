<template>
    <div class="similar">
        <h5>关联阅读</h5>
        <div v-for="item in similardata" :key="item.id" @click="godetail(item.id)">
            <section>
                <ul>
                    <li><img style="width: 40px; height: 40px;" :src="`https://cdn.sspai.com/${item.author.avatar}?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80`"></li>
                    <li>
                        <p>{{item.author.nickname}}</p>
                        <p>{{timetrans(item.created_at)}}</p>
                    </li>
                </ul>
                <img  :src="`https://cdn.sspai.com/${item.banner}?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220`">
                <h2>{{item.title}}</h2>
                <p>{{item.promote_intro}}</p>
                <ol>
                    <li><i class="iconfont">&#xe6b3; </i>{{item.likes_count}}</li>
                    <li><i class="iconfont">&#xe747; </i>{{item.all_comments_count}}</li>
                </ol>
             </section>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import router from "../router";
    export default {
      name: 'similar',
      props:['id'],
      data () {
        return {
          similardata: null
        }
      },
      mounted(){
           axios.get(`/api/v1/articles/${this.id}/similars`).then(res=>{
                /*console.log(res.data)*/
                this.similardata = res.data;
            });
    },
    methods:{
        timetrans(date){
        var date = new Date(date*1000);//如果date为10位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        return Y+M+D
        },
        godetail(id){
             this.$emit('getid', id)
        }
    }
    }
</script>


<style scoped lang="scss">
    .similar{
        width:100%;
        background-color:#fafbfc;
        margin-top:80px;
        h5{
            width:90%;
            margin-left:5%;
            height: 50px;
            line-height:50px;
            font-size:14px;
        }
        div{
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
            background-color:#fff;
            margin-bottom:20px;
            section{
                width:90%;
                margin-right:5%;
                margin-left:5%;
            ul{
                overflow:hidden;
                margin-top:20px;
                li{
                    float:left;
                    img{
                        border-radius:50%;
                    }
                }
                li:nth-of-type(2){
                    margin-left: 10px;
                    p{
                        margin-bottom:3px;
                    }
                    p:nth-of-type(2){
                        font-size:12px;
                        color:#9b9b9b;
                    }
                }

            }
            >img{
                width:100%;
                margin-top:20px;
            }
            h2{
                margin-top:20px;
                line-height:30px;
            }
            >p{
                margin-top:10px;
                line-height:30px;
            }
            ol{
                display: flex;
                justify-content:flex-end;
                margin:20px 0;
                li{
                    font-size:16px;
                    color:#9b9b9b;
                }
                li:nth-of-type(1){
                        margin-right:30px;
                }
            }
            }
        }
    }
</style>