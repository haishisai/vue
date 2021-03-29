import Bar from './components/bar.js'
import List from './pages/list.js'
import Home from './pages/home.js'
import User from './pages/user.js'

let template = `
  <div> 
    {{test}}
    <Home v-if="routerKey==1" ></Home>
    <List v-if="routerKey==2"></List>
    <User v-if="routerKey==3"></User>
    <Bar @routerChange="routerChange"></Bar>
  </div>
 
`
export default {
  template,
  data(){
    return{
      test: 'hello pd'
      routerKey: '1'
    }
  },
  components:{
    Bar,
    Home,
    List,
    User
  },
  methods: {
    routerChange(e){
      this.routerKey = e
    }
  }
}


//  冒充的路由 需要靠 事件响应拿到值   