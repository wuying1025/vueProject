import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/Movie'
import Music from '@/components/Music'
import Book from '@/components/Book'
import Photo from '@/components/Photo'
import MovieTop250 from '@/components/movie/Movie-Top250'
import MovieHot from '@/components/movie/Movie-hot'
import MovieComing from '@/components/movie/Movie-coming'

Vue.use(Router)

export default new Router({
  routes: [
   	{
   		path: '/',
   		redirect: '/movie/top250'
   	},
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie,
      children: [
            { path: "/movie/top250", component: MovieTop250 },
            { path: "/movie/hot", component: MovieHot },
            { path: "/movie/coming", component: MovieComing }
        ]

    }
  ]
})
