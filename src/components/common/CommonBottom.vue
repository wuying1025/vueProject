<template>
	<div id="bottom">
		<ul class='common-bottom'>
			<li>电影</li>
			<li>音乐</li>
			<li>书籍</li>
			<li>图片</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {

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
	background: #2196f3;
	color: #fff;
}
.common-bottom li{
	flex:1;
	text-align: center;
}
	
</style>