<template>
  <div class="backgraund">
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    
  },
} 
</script>
<style lang="scss" scoped>
.backgraund{
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background-color: #f0eeff;
  padding-top: 1px;
  
}
</style>