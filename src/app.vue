<template>
 <div>
 <TopNav/>
 <Search/>
 <MainNav/>
 <Index/>
 </div>
</template>
<script>
import TopNav from 'public/TopNav'
import Search from 'public/Search'
import MainNav from 'public/MainNav'
import Index from '@/Index/index.vue'
export default {
  components: {
    TopNav,
    Search,
    MainNav,
    Index
  }
}
</script>
<style>
.holle{
  color: aqua;

}
</style>
