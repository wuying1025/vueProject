<template>
   <div class='music'>
      <common-top></common-top>
      <ul>
          <li v-for="album in albums">
              <img :src="album.bg" alt=""/>
          </li>
      </ul>
      <common-bottom></common-bottom>
   </div>
</template>

<script>
import CommonTop from './common/CommonTop.vue'
import CommonBottom from './common/CommonBottom.vue'
export default {
   data() {
        return {
          albums:[
            {
              name: "飙升榜",
              id:19723756,
              bg: require("../assets/img/soar_music.jpg")
            },
            {
              name: "新歌榜",
              id:3779629,
              bg:require("../assets/img/new_music.jpg")
            },
            {
              name: "原创榜",
              id:2884035,
              bg:require("../assets/img/original_music.jpg")
            },
            {
              name: "KTV麦榜",
              id:21845217,
              bg:require("../assets/img/ktv_music.jpg")
            },
            {
              name: "华语金曲榜",
              id:4395559,
              bg:require("../assets/img/chinese_music.jpg")
            },
            {
              name: "我的专辑",
              id:98833242,
              bg:require("../assets/img/my_music.jpg")
            },
          ]
        };
    },
    components:{
      CommonTop,
      CommonBottom
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../assets/css/reset.css';
  .music{
    margin-top: 64px;
    margin-bottom: 56px;
  }
  .music li{
    width: 50%;
    height: 33.3333%;
    float: left;
  }
  .music li img{
    width: 100%;
    height: 100%;
  }
</style>
