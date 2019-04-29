<template>
<div class="container">
  <div class="banner fr">
    <el-carousel
    :autoplay="false"
    >
      <el-carousel-item v-for="(item,index) in imglist" :key="index">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>
<script>
import cursorel from './images/1.jpg'
import cursorel1 from './images/2.jpg'
import cursorel2 from './images/3.jpg'
export default {
  data () {
    return {
      imglist: [cursorel, cursorel1, cursorel2]
    }
  }
}
</script>
<style lang="less" scoped>
  .banner{
    width: 780px;
    height: 307px;
  }
  .el-carousel{
    .el-carousel_item{
      img {
        width: 100%;
      }
    }
  }
</style>
