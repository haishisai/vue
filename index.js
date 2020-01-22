window.onload = function () {
    new Vue({
        el: '#app',
        data () {
            return {
                items: [
                    { msg: '工作1', check: true },
                    { msg: '工作2', check: true },
                    { msg: '工作3', check: false },
                    { msg: '工作4', check: true }
                ],
                input: '',
                test1: true,
                abc:[1,2],
                newItems:[],
                cur:1,
                arrId:[]
            }  
        },
        methods: {
            addId () {
                for(var i=0;i<this.items.length;i++){
                    this.items[i].id = i;
                    this.arrId.push(i);
                }
            },
            add () {
                if(!this.input){
                    return
                }
                this.items.unshift({
                    msg:this.input,
                    check:false,
                    id: this.maxId()
                });
                this.input = '';
                this.arrId.push(this.maxId());
                console.log(this.newItems)
                this.filterItem(this.cur);
            },
            del (aaa) {
                // 和下面 获取index 效果一样
                // for(var i=0;i<this.items.length;i++){
                //     if(this.items[i].id == aaa.id){
                //         var index = i;
                //     }
                // }
                var index = this.items.findIndex(v => v.id == aaa.id)
                console.log(index)
                this.items.splice(index,1)
                this.filterItem(this.cur);
            },
            filterItem(n){
                this.cur = n;
                console.log(1212)
                switch (n) {
                    // case 1 :
                    //     this.newItems = this.items;
                    // break;
                    case 2 :
                        this.newItems = this.items.filter(v => v.check==true);
                    break;
                    case 3 :
                        this.newItems = this.items.filter(v => v.check==false);
                    break;
                    default:
                        this.newItems = this.items;
                }
            },
            maxId () {
               return Math.max(...this.arrId)+1;
            }
        },
        computed: {
            completed () {
                // return this.items.filter(function(v){ return v.check == true}).length  和下面一样
                return this.items.filter(v => v.check ).length;
            },
            reItems () {
                var items = [];
                items = this.getMsg;
            }
        },
        mounted () {
           this.filterItem(this.cur);
           this.addId();
           //倒序数组
           this.items.reverse();
        }
    })
}
