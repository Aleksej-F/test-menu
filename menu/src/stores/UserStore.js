import { defineStore } from 'pinia'
import { useModalStore  } from './ModalStore'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    refresh_token: null,
    role: null,
  }),
  getters: {
    getIsAutchUser: (state) => state.token === '' || !state.token ? false: true ,
    getToken: (state) => state.token,
  },
  actions: {
    setLogInUser(user){
      console.log(user)
      this.token = "fgfg"
    }
  }
})