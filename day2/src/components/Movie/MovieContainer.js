import MovieList from "./MovieList.js";
import movieService from './movieService.js';
import Pager from './Pager.js';
import Loading from './Loading.js'

export default {
    name: 'MovieContainer',
    template: `
    <div>
        <MovieList :moviesData="movies" ></MovieList>
        <Pager @pageChange="pageChange" :page="page" :pageMax="pageMax" ></Pager>
        <transition name="fade" >
            <Loading v-show="isLoading" ></Loading>
        </transition>
          
    </div>
    `,

    // <div @click="isLoading=!isLoading" >click</div>
    components:{
        MovieList,
        Pager,
        Loading
    },
    data(){
        return {
            movies: [],
            total: 0, // 总数据条数
            limit: 3, // 总页数
            page: 1,  //  当前页
            isLoading: false
        }
    },
    computed:{
        pageMax: function () {
           return  Math.ceil(this.total/3)  
        }
    },
    methods:{
        pageChange(e){
            this.page = e;
            this.getMoviesData(this.page,this.limit)
        },
        async getMoviesData(page,limit){
            this.isLoading = true
            let resp = await movieService.getMovies(page,limit);
            this.movies = resp.data
            this.total = parseInt(resp.count)
            this.isLoading = false
        }
    },
    async created(){
        this.getMoviesData(this.page,this.limit)
    }
}