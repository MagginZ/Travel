<template>
    <div>
        <div class="recommend-title">周末去那儿</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class="item-img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
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
            {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '002', imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '003', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '004', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'},
            {id: '005', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b8/e6206794272459.jpg_r_640x214_a002ded9.jpg', title: '成都松鼠部落森林假日公园', desc: '这里最近很火哦，好多人都在点评它呢！'}
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
.item-img-wrapper{
  height: 0;
  overflow: hidden;
  padding-bottom:  33.9%;
}

.item-img{
    width: 100%;
}
.item-info{
    padding:2px 2px 16px;
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

</style>
