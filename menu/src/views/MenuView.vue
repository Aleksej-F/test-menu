<template>
  <main>
    меню
    <div
      v-if="dish.getIsMenuList"
    >
      <MenuItems
        v-for="(item) in dish.menuList" 
        :key="item.id"
        :dish="item"
        :editView="false"
      ></MenuItems>
    </div>
    <div
      v-else
    >
      В меню нет блюд.
    </div>
  </main>
</template>

<script setup >
  import { useMenuDishStore  } from '../stores/MenuDishStore'
  import MenuItems from "../components/items/MenuItems.vue"
  
  const dish = useMenuDishStore()

  async function getCondition() {
    await dish.getMenuListDB()
  }

  getCondition()
  
</script>

