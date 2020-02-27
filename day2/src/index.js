// 总入口文件
import App from './app.js';


let template = `    
        <App></App>    
`

new Vue({
    el:'#app',
    template,
    components:{
        App
    }
})


  