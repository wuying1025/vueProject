<template>
	<div class='top250'>
		<div class="movielist-top250"  v-for='movie in movieLists'>
			<div class='movie-img'>
  			<img :src="movie.images.large" alt="">
  		</div>
		<div class='movie-title'>
			<span>{{movie.title}}</span>
			<p><span v-for="genre in movie.genres">{{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
		</div>
		</div>
	</div>
</template>
<script>
import Axios from 'axios'

export default {
  data() {
	return {
		isScrollDown: false,
		movieLists: [],
	};
  },
  mounted: function(){
 	Axios.get(API_PROXY+'https://api.douban.com/v2/movie/coming_soon?count=10&start=0')
 	.then((res)=>{
 		this.movieLists = res.data.subjects;
 	});
  },
}
</script>
<style>
@import '../../assets/css/reset.css';

	.top250{
		margin-top: 112px;
		margin-bottom: 56px;
	}
	.movielist-top250{
		height: 48px;
		padding: 20px;
	}
	.movielist-top250 .movie-img{
		float: left;
		width: 40px;
		height: 40px;
	}
	.movielist-top250 .movie-img img{
		width: 100%;
		height: 100%;
	}
	.movielist-top250 .movie-title{
		margin-left: 30px;
		float: left;
		width: 233px;
		border-bottom: 1px #ccc solid;
	}
</style>