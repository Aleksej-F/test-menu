import { defineStore } from 'pinia'
import { useModalStore  } from './ModalStore'

export const useMenuDishStore = defineStore('menu', {
  state: () => ({
    menuList: null,
    munuItem: null,
  }),
  getters: {
    
  },
  actions: {
    async getmenuListDB(){
      const config = {
        method: 'get',
        url: `/api/category?limit=1000`,
        headers: { 
          Accept: 'application/json', 
        }
      };
      
    
     
    }
  }
})