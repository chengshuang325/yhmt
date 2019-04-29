<template>
<div class="search-box">
  <div class="search">
    <input class="search-input" type="text"/>
    <a class="search-btn">搜索</a>
  </div>
  <div class="search-text">
    <a>香奈儿</a>
    <span>|</span>
    <a>奶粉</a>
    <span>|</span>
    <a>UGG</a>
    <span>|</span>
    <a>家居</a>
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped >
  @import "~static/css/common.less";
  @media (max-width: 748px) {
    .search-box{
      max-width: 100%;
      text-align: left;
    }
    .search{
      border-radius: 5px ;
      overflow: hidden;
    }
  }
  .search-box{
    width: 428px;
    line-height: normal;
    vertical-align: middle;
    display: inline-block;
  }
  .search{
    width: 100%;
    height: 42px;
    border: 2px solid @redLightColor;
    position: relative;
  }
  .search-input{
    width: 100%;
    height: 100%;
    line-height: 38px;
    border: 0;
    padding-left: 30px;
    color: #aaa;
    font-size: 14px;
    background: url("../image/icon-search.png")no-repeat 8px center;
  }
  .search-input:focus{
    outline: none;
  }
  .search-btn{
    width: 78px;
    height: 38px;
    display: inline-block;
    background: @redLightColor;
    text-align: center;
    line-height: 38px;
    font-size: 16px;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
  }
  .search-text{
    margin-top: 10px;
    color: #333;
  }
</style>
