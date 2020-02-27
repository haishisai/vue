

import MovieItem from "./MovieItem.js";

export default {
    name:'MovieList',
    template:`
    <div class="data-container">
        <MovieItem v-for="item of moviesData" :key="item._id" :moviesData="item" ></MovieItem>
    </div>
    `,
    components:{
        MovieItem
    },
    props:['moviesData']
}