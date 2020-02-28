// template 入口



let template = `
<div>
    <header>
        <router-link :to="{name:'home'}">首页</router-link>
        
        <router-link :to="{name:'list'}">test</router-link>
    </header>
    <router-view></router-view>

</div>
`

export default {
    name: 'app',
    template,
    
}