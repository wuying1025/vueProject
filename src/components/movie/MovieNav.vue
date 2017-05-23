<template>
	<div class='movie-nav' :style="{background:$store.state.bgcolor}">
		<ul>
			<li><router-link to="/movie/top250">top250</router-link></li>
			<li><router-link to="/movie/hot">正在热映</router-link></li>
			<li><router-link to="/movie/coming">即将上映</router-link></li>
		</ul>
	</div>
</template>
<script>

</script>
<style>
@import '../../assets/css/reset.css';

	.movie-nav{
		height: 48px;
		color:#ccc;
		position: fixed;
	    top:64px;
	    width: 100%;
	}
	.movie-nav ul{
		height: 100%;
		display: flex;
	}
	.movie-nav ul li{
		flex:1;
		text-align: center;
		line-height: 48px;
	}
	.movie-nav ul li a{
		color: #ccc;
		outline: none;
	}

	.movie-nav ul li a.router-link-active{
		color: #fff;
	}


</style>
