<template>
  <div class="home">
      <HomeFirst></HomeFirst>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeFirst from '../components/Home-first.vue'

export default {
  name: 'Home',
  components: {
    HomeFirst
  }
}
</script>
<style scoped>
.home{
  height: 100%;
  
}
</style>
