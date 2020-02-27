
import MovieContainer from './components/MovieContainer.js'

export default {
    name: 'app',
    template:`
    <div>
        app component
        <MovieContainer></MovieContainer>
    </div>
    `,
    components:{
        MovieContainer
    }
}