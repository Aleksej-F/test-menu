<template>
    
  <div class="app-main-layout" >
    <Loader/>
    
    <Sidebar v-model="isOpen" />
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <RouterView/>
      </div>
    </main>
  </div>
</template>
<script>
  import { RouterView } from 'vue-router'
  import Loader from '../components/ui/Loader.vue';
  export default {
    data: () => ({
      isOpen: true,
      loading: false
    }),
    components: {
      Loader, 
    },
    computed:{ 
      
    },
  } 
</script>
<style lang="scss">
.app{
  &-page{
    overflow: auto ;
    padding: 0 ;
    background-color: var(--color-fon);
    height: 91%;
    z-index: 15;
  };
  &-content{
    overflow: hidden ;
    
    padding-left:250px;
    transition:padding-left .3s;
    position:relative;
    z-index: 15;
    @media (max-width: 768px) {
      padding-left:60px;
    }
  };
  &-main-layout{
    position:relative;
    height:100vh;
    overflow:hidden;
  };

}

</style>