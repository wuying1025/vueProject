<template>
	<div id="header">
		<button>a</button>
		<h2>{{$store.state.title}}</h2>
		<button>b</button>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {

	}
</script>
<style>
@import '../../assets/css/reset.css';
	#header{
		height: 64px;
		display:flex;
		align-items:center;
		background: #2196f3;
		color: #fff;
	    width: 100%;
	    position: fixed;
	    top:0;
	}
	#header h2{
		text-align: center;
		flex:1;
	}
	#header button{
		width: 40px;
		height: 40px;
		color: #fff;
	}
	
</style>