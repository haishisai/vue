
let template = `
    <div class="pager" v-if="pageMax>1" >
        <a @click.prevent="handleClick(page-1)" >上一页</a>
        <span>{{page}}/{{pageMax}}</span>
        <a @click.prevent="handleClick(page+1)">下一页</a>
    </div>
`

export default {
    name: 'Pager',
    template,
    props:['page','pageMax'],
    methods:{
        handleClick(msg){
            if(msg<=0){
                console.log('ddd')
                return
            }
            if(msg>9){
                console.log('ddd')
                return
            }
            this.$emit('pageChange',msg)
        }
    }
}