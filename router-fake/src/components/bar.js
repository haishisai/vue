let template = `
  <div class="bar" >
    <span @click="$emit('routerChange',1)">home</span>
    <span @click="$emit('routerChange',2)">list</span>
    <span @click="$emit('routerChange',3)">user</span>
  </div>
`



export default {
  data(){
    return {
      routerKey:1 
    }
  },
  template
}