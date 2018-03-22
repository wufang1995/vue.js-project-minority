<template>
  <div class="detail" v-if="articlesdata" :key="articlesdata.id">
    <div class="detailbox">
        <p class="imgbox" >
        <img :src="`https://cdn.sspai.com/${articlesdata.banner}?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233`">
        </p>
    </div>
    <div class="conbox">
        <h2 class="title">{{articlesdata.title}}</h2>
        <ul class="conheader">
            <li><img style="width: 30px; height: 30px;" :src="`https://cdn.sspai.com/${articlesdata.author.avatar}?imageMogr2/quality/95/thumbnail/!60x60r/gravity/Center/crop/60x60`"></li>
            <li>{{articlesdata.author.nickname}}</li>
            <li>{{dateDiff(articlesdata.released_at)}}</li>
            <li><i class="iconfont">&#xe6b3; </i>{{articlesdata.likes_count}}</li>
            <li><i class="iconfont">&#xe747; </i> {{articlesdata.all_comments_count}}</li>
        </ul>
        <div v-html="articlesdata.body" class="articlesbody"></div>
        <ol>
            <li v-for="item in articlesdata.tags" :key="item.id">#{{item.title}}</li>
        </ol>
        <h6>
          © 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。
        </h6>
    </div>
    <ul class="articlelike">
        <li><i class="iconfont">&#xe6b3;</i>&nbsp;&nbsp;{{articlesdata.likes_count}}</li>
        <li><i class="iconfont">&#xe606;</i></li>
        <li><i class="iconfont">&#xe7c5;</i></li>
    </ul>
    <div class="author">
        <section>
            <img :src="`https://cdn.sspai.com/${articlesdata.author.avatar}?imageMogr2/quality/95/thumbnail/!160x160r/gravity/Center/crop/160x160`" style="width: 80px; height: 80px;">
        </section>
        <section>
            <p>{{articlesdata.author.nickname}}</p>
            <p>{{articlesdata.author.bio}}</p>
            <p>关注</p>
        </section>

    </div>
    <div class="comment">
        <textarea></textarea>
        <p>发送</p>
    </div>
    <comment :data="articlesdata.id" :commentcount="articlesdata.
all_comments_count"></comment>

    <similar :id="articlesdata.id" @getid="getid"></similar>
  </div>
</template>

<script>
import axios from "axios";
import comment from "./comment";
import similar from "./similar";
export default {
  name: 'detail',
  data () {
    return {
      articlesdata:null,
      articleid:null
    }
  },
  mounted(){
            //接受动态路由的传参
          //console.log(this.articleid);
            //ajax
           this.articleid = this.$route.params.id
           axios.get(`/api/v1/articles/${this.articleid}`).then(res=>{
                /*console.log(res.data);*/
                this.articlesdata = res.data;
            });
           /*https://sspai.com/api/v1/articles/43740*/
    },
    methods:{
        dateDiff:function(timestamp){
        // 补全为13位
        var arrTimestamp = (timestamp + '').split('');
        for (var start = 0; start < 13; start++) {
            if (!arrTimestamp[start]) {
                arrTimestamp[start] = '0';
            }
        }
        timestamp = arrTimestamp.join('') * 1;

        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - timestamp;

        // 如果本地时间反而小于变量时间
        if (diffValue < 0) {
            return '不久前';
        }

        // 计算差异时间的量级
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;

        // 数值补0方法
        var zero = function (value) {
            if (value < 10) {
                return '0' + value;
            }
            return value;
        };

        // 使用
        if (monthC > 12) {
            // 超过1年，直接显示年月日
            return (function () {
                var date = new Date(timestamp);
                return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
            })();
        } else if (monthC >= 1) {
            return parseInt(monthC) + "月前";
        } else if (weekC >= 1) {
            return parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
            return parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
            return parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
            return parseInt(minC) + "分钟前";
        }
        return '刚刚';
        },
        getid(id){
            //console.log(id);
            this.articleid = id;
            window.scrollTo(0, 0);
            /*console.log(this.articleid);*/
        }
    },
    updated(){
        var conbox = document.getElementsByClassName('articlesbody')[0];
        var img  = conbox.getElementsByTagName('img');
        var figcaption  = conbox.getElementsByTagName('figcaption');
        for (var i = 0; i < img.length; i++) {
            img[i].style.width = '100%';
            img[i].style.marginTop = '10px';
        };
        for (var i = 0; i < figcaption.length; i++) {
            figcaption[i].style.margin = '10px 0px'
            figcaption[i].style.textAlign = 'center'
        };

        axios.get(`/api/v1/articles/${this.articleid}`).then(res=>{
                /*console.log(res.data);*/
                this.articlesdata = res.data;
        });
        /*window.scrollTo(0, 0);*/
    },
    components:{
        comment,
        similar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .detail{
        margin-top:60px;
        overflow: hidden;
        .detailbox{
            display:flex;
            margin-top:30px;
            margin-bottom:20px;
            justify-content:center;
            .imgbox{
                width:90%;
                img{
                    width: 100%;
                }
            }
        }
        .conbox{
            width:90%;
            margin-left:5%;
            margin-right:5%;
            h2{
                line-height:40px;
            }
            .conheader{
                margin-top:15px;
                display: flex;
                align-items:center;
                margin-bottom:20px;
                li{
                    float:left;
                    margin-right:10px;
                    color:#9b9b9b;
                }
                li:nth-of-type(1){
                    img{
                         border-radius:50%;
                    }
                }
                li:nth-of-type(2){
                    color:#000;
                }
            }
            div{
                line-height:30px;
                width:100%;
                img{
                    width:100%;
                }
            }
            ol{
                overflow:hidden;
                li{
                float:left;
                background-color: #e6e6e6;
                color: #9b9b9b;
                font-size: 12px;
                line-height: 16px;
                padding: 5px 12px 6px 11px;
                margin:20px 10px 10px 0px;
                }
            }
            h6{
                text-align:center;
                margin-top:50px;
                font-weight:normal;
            }
        }
        .articlelike{
            border-top:1px solid #ccc;
            height: 70px;
            margin-top: 20px;
            margin-bottom:20px;
            padding:0 5%;
            li{
                float:right;
                margin-top:30px;
                i{
                    font-size:30px;
                    color:#292525;;
                }
            }
            li:nth-of-type(1){
                float:left;
                color:red;
                width:100px;
                height: 40px;
                font-size:20px;
                border:1px solid red;
                line-height:40px;
                text-align:center;
                border-radius:20px;
                margin-top:25px;
                i{
                    font-size:20px;
                    color:red;
                }
            }
            li:nth-of-type(3){
                margin-right:30px;
            }

        }
        .author{
            overflow:hidden;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
            section{
                float:left;
                padding:30px 0;
                img{
                    border-radius:50%;
                }
            }
            section:nth-of-type(1){
                width:25%;
                margin-left:5%;
            }
            section:nth-of-type(2){
                width:65%;
                margin-right:5%;
                p:nth-of-type(1){
                    font-size:18px;
                    font-weight:bold;
                }
                p:nth-of-type(2){
                    margin-top:10px;
                    font-size:14px;
                }
                p:nth-of-type(3){
                    width:80px;
                    height: 30px;
                    font-size:16px;
                    border:1px solid #000;
                    line-height:30px;
                    text-align:center;
                    border-radius:20px;
                    margin-top:20px;
                }
            }

        }
        .comment{
            width:90%;
            margin-left:5%;
            margin-right:5%;
            margin-top:20px;
            overflow:hidden;
            textarea{
                width:100%;
                border:1px solid #ccc;
                height: 130px;
                resize:none;
            }
            p{
                width:80px;
                height: 30px;
                font-size:16px;
                line-height:30px;
                text-align:center;
                border-radius:20px;
                margin-top:20px;
                background-color:#000;
                color:#fff;
                float:right;
            }
        }
    }
</style>
