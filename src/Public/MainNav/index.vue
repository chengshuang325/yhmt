<template>
  <div class="mian-nav">
    <div class="container">
      <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)" class="nav-classify" :class="{current: toggle}">
        <div class="nav-classify-name">
          <span class="icon icon-class"></span>
          <span class="qb">全部商品分类</span>
        </div>
        <ul class="nav-classify-lists">
          <li class="nav-classify-list">
            <span>母婴用品</span>
            <span class="icon icon-tragle"></span>
          </li>
          <li class="nav-classify-list">
            <span>美容护肤</span>
            <span class="icon icon-tragle"></span>
          </li>
          <li class="nav-classify-list">
            <span>生活家居</span>
            <span class="icon icon-tragle"></span>
          </li>
          <li class="nav-classify-list">
            <span>休闲食品</span>
            <span class="icon icon-tragle"></span>
          </li>
          <li class="nav-classify-list">
            <span>进口食品</span>
            <span class="icon icon-tragle"></span>
          </li>
          <li class="nav-classify-list">
            <span>轻奢名品</span>
            <span class="icon icon-tragle"></span>
          </li>
        </ul>
      </div>
      <div class="main-nav-lists"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isHide: false,
      toggle: false
    }
  },
  mounted () {
    if (!this.isHide) {
      this.toggle = true
    }
  },
  methods: {
    classifyToggle (status) {
      if (this.isHide) {
        this.toggle = status
      }
    }
}
}
</script>
<style lang="less">
@import "~static/css/common.less";
.mian-nav{
  height: 40px;
  line-height: 40px;
  color: @whiteColor;
  background: @redLightColor;
  .nav-classify{
    width: 200px;
    height: 40px;
    display: inline-block;
    position: relative;
    &.current {
      .nav-classify-name{
        background: @redColor;
      }
    .nav-classify-lists{
      display: block;
    }
    }
    .nav-classify-name {
      width: 100%;
      height: 100%;
      text-align: center;
      .qb{
        margin-left: 5px;
      }
      &:hover{
        background: @redColor;
      }
    }
    .nav-classify-lists{
      position: absolute;
      width: 100%;
      display: none;
      .nav-classify-list{
        height: 58px;
        line-height: 50px;
        padding: 0 20px 0 30px;
        border-bottom: 1px solid @redColor;
        background: @redLightColor;
        .icon-tragle{
          float: right;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
