// 总入口文件
import App from './app.js';
import router from './router.js';

let template = `    
        <App></App>
`
new Vue({
    el:'#app',
    template,
    components:{
        App
    },
    router  // 将路由嵌入vue
})


  