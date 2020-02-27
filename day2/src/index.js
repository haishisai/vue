
import App from './app.js';


let template = `
    <div>
        hello
        <App></App>
    </div>
`



new Vue({
    el:'#app',
    template,
    components:{
        App
    }
})


  