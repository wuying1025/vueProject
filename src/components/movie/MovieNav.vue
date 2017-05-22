<template>
	<div class='movie-nav'>
		<ul>
			<li>top250</li>
			<li>正在热映</li>
			<li>即将上映</li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style>
@import '../../assets/css/reset.css';

	.movie-nav{
		height: 48px;
		background: #2196f3;
		color:#fff;
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
</style>