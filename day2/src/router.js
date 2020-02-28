
import Home from './pages/Home.js'
import MovieL from './pages/MovieL.js'
import Movie from './pages/Movie.js'




export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'list',
            path: '/list',
            component: MovieL
        },
        {
            name: 'movie-detail',
            path: '/movie/:id',
            component: Movie
        }
    ]
})