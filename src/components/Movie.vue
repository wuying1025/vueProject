<template>
   <div class='hello'>
      <common-top></common-top>
      <movie-nav></movie-nav>
      <router-view></router-view>
      <common-bottom></common-bottom>
   </div>
</template>

<script>
import CommonTop from './common/CommonTop.vue'
import MovieNav from './movie/MovieNav.vue'
import CommonBottom from './common/CommonBottom.vue'
export default {
    components:{
      CommonTop,
      MovieNav,
      CommonBottom
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
