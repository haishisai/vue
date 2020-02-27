// template 入口
import MovieContainer from './components/Movie/MovieContainer.js'

export default {
    name: 'app',
    template:`
    <div>
        <MovieContainer></MovieContainer>
    </div>
    `,
    components:{
        MovieContainer
    }
}