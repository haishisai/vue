import MovieList from "./MovieList.js";
import movieService from './movieService.js';


export default {
    name: 'MovieContainer',
    template: `
    <div>
        <MovieList :moviesData="movies" ></MovieList>
    </div>
    `,
    components:{
        MovieList
    },
    data(){
        return {
            moviesData:[
                {
                    "_id": "5c25ddba5a1651132655113e", 
                    "name": "来电狂响", 
                    "ename": "Kill Mobile", 
                    "type": "恐怖,惊悚,战争", 
                    "area": "中国大陆", 
                    "time": "103", 
                    "poster": "https://p1.meituan.net/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg@464w_644h_1e_1c", 
                    "upDate": "2019-01-10", 
                    "score": 8.9, 
                    "count": "21亿", 
                    "intro": "七位好友在聚会中玩了一个游戏，将手机交出，分享所有来电、短信、微信、甚至广告弹窗，掀开了一场啼笑皆非的情感风暴。", 
                    "createTime": "2018-12-28T08:24:26.974Z", 
                    "updateTime": "2019-03-15T05:55:23.292Z", 
                    "isHot": false, 
                    "isComing": false, 
                    "isClassic": true
                },
                {
                    "_id": "5c25ddba5a165111132655113e", 
                    "name": "来电狂响", 
                    "ename": "Kill Mobile", 
                    "type": "恐怖,惊悚,战争", 
                    "area": "中国大陆", 
                    "time": "103", 
                    "poster": "https://p1.meituan.net/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg@464w_644h_1e_1c", 
                    "upDate": "2019-01-10", 
                    "score": 8.9, 
                    "count": "21亿", 
                    "intro": "七位好友在聚会中玩了一个游戏，将手机交出，分享所有来电、短信、微信、甚至广告弹窗，掀开了一场啼笑皆非的情感风暴。", 
                    "createTime": "2018-12-28T08:24:26.974Z", 
                    "updateTime": "2019-03-15T05:55:23.292Z", 
                    "isHot": false, 
                    "isComing": false, 
                    "isClassic": true
                }
            ],
            movies:[]
        }
    },
    async created(){
        let resp = await movieService.getMovies(1,10);
        this.movies = resp.data        
    }
}