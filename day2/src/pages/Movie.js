import MovieDetail from '../components/Movie/MovieDetail.js';
import movieService from '../components/Movie/movieService.js'

let template = `
    <div>
        详情页
        <MovieDetail :movie="movie" ></MovieDetail>
    </div>
    
`


export default {
    name: 'Movie',
    template,
    data () {
        return {
            movie : []
        }
    },
    async created(){
        let movieId =  this.$route.params.id;
        let resp = await movieService.getMovie(movieId)
        this.movie = resp.data
    },
    components:{
        MovieDetail
    }
}