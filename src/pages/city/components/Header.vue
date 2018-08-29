<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <i class="iconfont icon-fanhui header-back"></i>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_807286_6kvddqfqgf3.css');
.header{
    height: 2.86rem;
    line-height: 2.86rem;
    overflow: hidden;
    text-align: center;
    color:#fff;
    background: #00bcd4;
    position: relative;
}
.header-back{
    width: 3rem;
    text-align: center;
    position: absolute;
    color:#fff;
    top:0;
    font-size: 1.4rem;
    left: 0;;
}
</style>
