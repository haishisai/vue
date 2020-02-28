export default {
    template: `
<div class="data">
  <div class="poster">
    <img :src="moviesData.poster" alt="">
  </div> 
  <div class="words">
    <router-link :to="{name:'movie-detail',params:{id:moviesData._id}}" ><h2 class="title">{{moviesData.name}}</h2> </router-link>
    
    <div class="attach">
      <span>英文名：{{moviesData.ename}}</span> 
      <span>类型：{{moviesData.type}}</span> 
      <br> 
      <span>上映地区：{{moviesData.area}}</span> 
      <span>上映时间：{{moviesData.upDate}}</span> 
      <span>时长：{{moviesData.time}}</span>
    </div> 
    <div class="desc">
        {{moviesData.intro}}
    </div>
  </div>
</div>
    `,
    data(){
        return {
            movie:{

            }
        }
    },
    props:['moviesData']
}