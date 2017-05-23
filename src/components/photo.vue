<template>
   <div class='photo'>
      <common-top></common-top>
      <router-view></router-view>
      <common-bottom></common-bottom>
   </div>
</template>

<script>
import CommonTop from './common/CommonTop.vue'
import CommonBottom from './common/CommonBottom.vue'
export default {
    components:{
      CommonTop,
      CommonBottom
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
