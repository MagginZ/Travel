<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search{
    height: 2.1rem;
    padding: 0 10px;
    background:  #00bcd4;
}
.search-input{
    width: 100%;
    height: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    border-radius: 4px;
    border: 0;
    outline: none;
    color:#666;
    padding:0 10px;
    box-sizing: border-box;
}
</style>
