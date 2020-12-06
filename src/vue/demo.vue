<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .listBox{
        height: 500px;
        border: 1px solid rgb(243, 208, 196);
        width: 200px;
        position: relative;
        overflow-y: auto;
        margin: 30px auto;
    }
    .list_item{
        position: absolute;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #f8f8f8;
        border-bottom: 1px solid #aaa;
    }
</style>
<template>
    <div>
        <div>vue实现方式</div>
        <div class="listBox" @scroll="scrollFn">
            <div class="nullBox" :style="{height: `${list.length*40}px`}"></div>
            <div class="contentBox">
                <div class="list_item" v-for="(item,index) in showList" :key="item.key" :style="{top: `${item.top}px`}">{{item.label}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list: new Array(2000).fill("列表项").map((n,i)=>({
                label: n+(i+1),
                key: i+1,
                top: i*40,
            })),
            len: 12,
            showList: []
        }
    },
    mounted() {
        this.setShowList();
    },
    methods: {
        scrollFn(e){
            this.setShowList(e.target.scrollTop);
        },
        setShowList(top=0){
            let index = Math.floor(top/40);
            index=index-this.len<0? 0 : index -this.len;
            this.showList = this.list.slice(index, index+this.len*3);
        }  
    },
}
</script>