<template>
	<div id="bottom">
		<ul class='common-bottom' :style="{background:$store.state.bgcolor}">
			<li @click="setTitle('movie','#2196f3')"><router-link to="/movie/top250">电影</router-link></li>
			<li @click="setTitle('music','#009688')"><router-link to="/music">音乐</router-link></li>
			<li @click="setTitle('book','#795548')"><router-link to="/book">书籍</router-link></li>
			<li @click="setTitle('photo','#3f51b5')"><router-link to="/photo">图片</router-link></li>
      <!--<li @click="getMovie">电影</li>-->
      <!--<li @click="getMusic">音乐</li>-->
      <!--<li>书籍</li>-->
      <!--<li>图片</li>-->
		</ul>
	</div>
</template>

<script>
//	import {mapGetters,mapActions} from 'vuex'
	export default {
      methods:{
          setTitle:function(val,color){
            this.$store.dispatch('changeTitle', val);
            this.$store.dispatch('changeBgColor', color);
          }
      }
	}
</script>
<style>
@import '../../assets/css/reset.css';
.common-bottom{
	display: flex;
	height: 56px;
	width: 100%;
	position: fixed;
	align-items:center;
	bottom: 0;
	color: #fff;
}
.common-bottom li{
	flex:1;
	text-align: center;
}
.common-bottom li a{
  color: #ccc;
  outline: none;
}
.common-bottom li a.router-link-active{
  color: #fff;
}


</style>
