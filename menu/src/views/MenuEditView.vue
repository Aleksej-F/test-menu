<template>
  <main>
    
    <div class="title">
        <h2>меню</h2>
        <div class="button-cont">
          <div class="button"
            title="Добавить новое блюдо"
            @click.stop="createDish"
          >
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4023 18.8252C30.4023 25.9054 24.6627 31.645 17.5825 31.645C10.5023 31.645 4.7627 25.9054 4.7627 18.8252C4.7627 11.745 10.5023 6.00537 17.5825 6.00537C24.6627 6.00537 30.4023 11.745 30.4023 18.8252ZM31.9023 18.8252C31.9023 26.7338 25.4911 33.145 17.5825 33.145C9.6739 33.145 3.2627 26.7338 3.2627 18.8252C3.2627 10.9166 9.6739 4.50537 17.5825 4.50537C25.4911 4.50537 31.9023 10.9166 31.9023 18.8252ZM24.7419 19.899H10.4221V17.751H24.7419V19.899Z" fill="#269EB7"/>
              <path d="M16.5088 11.6646L16.5088 25.9844L18.6567 25.9844L18.6567 11.6646L16.5088 11.6646Z" fill="#269EB7"/>
            </svg>
          </div>
        </div>
      </div>
    <div
      v-if="dish.getIsMenuList"
    >
      <MenuItems
        v-for="(item) in dish.menuList" 
        :key="item.id"
        :dish="item"
        :editView="true"
      ></MenuItems>
    </div>
    <div
      v-else
    >
      В меню нет блюд. Вы можете их добавить.
    </div>
  </main>
</template>

<script setup >
  import { useRoute, useRouter } from 'vue-router'
  import { useMenuDishStore  } from '../stores/MenuDishStore'
  import MenuItems from "../components/items/MenuItems.vue"
  const router = useRouter()
  const route = useRoute()
  const dish = useMenuDishStore()
  function createDish(){
    
    router.push({ path: '/dish/create'})
  }

  async function getCondition() {
    await dish.getMenuListDB()
  }

  getCondition()
  
</script>
<style lang="scss" scoped>
  .title{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    padding: 64px 0 8px 0;
    & h2 {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 40px;
      color: var(--color-blue);
    }
  }
  .create{
    display: flex;
    align-items: center;
    &-plus{
      transform: scaleY(1.3);
    }
  }

  .button{
    margin-right: 20px;
    &-cont{
      display: flex;
      justify-content: flex-end;
    }
    
    transition: all 0.1s ease-out;
    &:hover{
      cursor: pointer;
      transform: scale(1.15);
    }
  }
  .create_test{
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .btn-center{
    height: 40px;
    width: 40px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #269EB7;
    &:hover{
      transform: scale(1.25);
      cursor: pointer;
    }
  }  
 @media (min-width: 1024px) {
  
 }
</style>