<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
        recommendList: [
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/29/2916ae570302fe94a3.water.jpg_200x200_cf0dff74.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'}        

        ]
    }
  }
}
</script>

<style scoped>
.recommend-title{
    margin-top:20px;
    line-height: 35px;
    background: #eee;
    text-indent: 12px;
}
.item{
    display: flex;
    height: 94px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}
.item-img{
    width: 80px;
    height: 80px;
    padding:7px;
}
.item-info{
    flex: 1;
    padding:7px;
}
.item-title{
    line-height:36px;
    font-size: 18px;
}
.item-desc{
    color: #ccc;
    font-size: 12px;
    line-height: 0;
}
.item-button{
    background: #ff9300;
    padding:0 10px;
    border-radius: 4px;
    margin-top:20px;
    color:#fff;
    outline: none;
    border: 0;
}
</style>
