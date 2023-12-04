<template >
  
  <Loader/>
  <HeaderBloc/>
  <RouterView />
 
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

import Loader from '../components/ui/Loader.vue'
import HeaderBloc from '../components/HeaderBlock.vue'
export default {
  components: {
    Loader,
    HeaderBloc
  },
} 
</script>
<style lang="scss">

</style>