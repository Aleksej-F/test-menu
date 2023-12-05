import { defineStore } from 'pinia'
import { useModalStore  } from './ModalStore'
import  setUseAsyncFetch   from '../utils/setUseAsyncFetch.js'

export const useMenuDishStore = defineStore('menu', {
  state: () => ({
    menuList: null,
    menuItem: null,
  }),
  getters: {
    getIsMenuList: (state) => state.menuList && state.menuList.length > 0 ? true : false,
  },
  actions: {
    async getMenuListDB(){
      const config = {
        method: 'get',
        url: `/dishs`,
        headers: { 
          Accept: 'application/json', 
        }
      };
      const res = await setUseAsyncFetch({config})
      console.log(res)
      if (res && res.data) {
        this.menuList = res.data
      }
      
     
    },
    async setCreateDishDB(body){
      const config = {
        method: 'post',
        url: `/dishs`,
        headers: { 
          'Content-Type': 'application/json' 
        },
        data: JSON.stringify(body)
      };
      console.log(config)
      const res = await setUseAsyncFetch({config})
      console.log(res)
      if (res && res.data) {
        this.menuList = res.data
      }
    }
  }
})