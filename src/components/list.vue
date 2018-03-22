<template>
  <div class="list">
      <div class="listbox" v-for="item in listdata" :key="item.id" @click="godetail(item.id)">
        <dl>
          <dt><img  style="width: 40px; height: 40px;" :src="`https://cdn.sspai.com/${item.author.avatar}?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80`"></dt>
          <dd>
            <p>{{item.author.nickname}}</p>
            <p><i class="iconfont">&#xe6a1;</i> {{dateDiff(item.released_at)}} 推荐</p>
          </dd>
          <dd>
            <i class="iconfont">&#xe610;</i>
          </dd>
        </dl>
        <img :src="`https://cdn.sspai.com/${item.banner}?imageMogr2/quality/95/thumbnail/!1440x480r/gravity/Center/crop/1440x480`">
        <section>
          <h2 class="title">
            {{item.title}}
          </h2>
          <summary class="desc">{{item.promote_intro}}</summary>
        </section>
        <div>
            <span>
              <i class="iconfont">&#xe6b3;</i>
              {{item.likes_count}}
            </span>
            <span>
              <i class="iconfont">&#xe747;</i> {{item.all_comments_count}}
            </span>
        </div>
      </div>
      <div class="loadmore">
        <p @click="loadmore">{{more}}</p>
        <h5><span> 寻求合作 </span> | <span> 支持我们 </span></h5>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listdata:[],
      more:"加载更多",
      page:0
    }
  },
  mounted(){
      axios.get("/api/v1/articles?offset=0&limit=10&type=recommend_to_home&sort=recommend_to_home_at&include_total=false").then(res=>{
        this.listdata =res.data.list;
        //console.log(this.listdata);
      })
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
    loadmore(){
      this.page++;
      axios.get(`/api/v1/articles?offset=${10*this.page}&limit=10&type=recommend_to_home&sort=recommend_to_home_at&include_total=false`).then(res=>{
        if (res.data.list.length<10 && res.data.list.length>0) {
            this.more = '没有更多了';
            this.listdata =this.listdata.concat(res.data.list)
        }else if(res.data.list.length==0){
            this.more = '没有更多了';
        }
        else{
          this.listdata =this.listdata.concat(res.data.list)
        }
        /*console.log(this.listdata);*/
      })
    },
    godetail(id){
      router.push(`/detail/${id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list{
    .listbox{
      border-bottom:1px solid #ccc;
      border-top:1px solid #ccc;
      margin-top:15px;
      background-color:#fff;
      dl{
        overflow:hidden;
        padding:20px;
        dt{
          img{
            width:40px;
            height:40px;
            border-radius:50%;
          }
          float:left;
        }
        dd:nth-of-type(1){
          float:left;
          margin-left:10px;
          p:nth-child(2){
            color:#9b9b9b;
          }
        }
        dd:nth-of-type(2){
          float:right;
          color:#9b9b9b;
          i{
            font-size:22px;
          }
        }
      }
      >img{
        width:100%;
      }
      section{
        padding:20px;
        padding-bottom: 0px;
        summary{
          margin-top: 10px;
          line-height: 26px;
        }
      }
      div{
        padding:20px;
        display:flex;
        justify-content:flex-end;
        span{
           color:#999;
           font-size:18px;
           margin-left:15px;
        }
        i{
          color:#9b9b9b;
          font-size:20px;
        }
      }
    }
  }
  .loadmore{
    width:100%;
    p,h5{
      width:96%;
      margin:0 auto;
      text-align:center;
      height:48px;
      line-height:48px;
      border:1px solid #ccc;
      margin-top:19px;
      font-size:14px;
      font-weight:normal;
      background-color:#fff;
    }
  }
</style>
