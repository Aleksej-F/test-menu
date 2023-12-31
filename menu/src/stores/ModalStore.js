import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    displayed: false,
    error: "",
    message: false,
  }),
  getters: {
    getMessage: (state) => state.message,
    
  },
  actions: {
    setMessage( data ) {
      let message = ''
      if (data.error) {
        message = {err: true, mes: `${data.message}!<hr>  ${(Array.isArray(data.error) ) ? data.error[0]:''}`}
      } else {
        message = {err: false, mes: data.message}
      }
      this.message = message
      setIntevalTime({ state: this.message })
    },

    setMessageError( e ) {
      console.log("error", e)
      let messag = e.message ? `<b>${e.message}</b> <hr>` : ''
            
      if (e.status == 422 ) {
        if (e.error) {
          if (Array.isArray(e.error)){
            e.error.forEach(element => messag += `${element} <hr>`)
          } else {
            messag += `${e.error}`
          }
        }
      }
      if (e.status == 422 ) {
        if (e.data) {
          if (Array.isArray(e.data.message)){
            e.data.message.forEach(element => messag += `${element} <hr>`)
          } else {
            messag += `${e.data.message}`
          }
        }
      }
      console.log("messag", messag)
      this.message = {err: true, mes: messag};
      setIntevalTime({ state: this.message } )
    },
    setMessageUser( message ) {
      this.message = message;
      setIntevalTime()
    },
    setMessageVisibleFalse() {
      this.message = false
    },
    setMessageVisibleTrue() {
      this.message = true
    },
    setMessageVisibleTooggle() {
      this.message = !this.message
    },
   
   
  }
  
})

function setIntevalTime (){
  const state = useModalStore()
  let start = new Date()
  let timerId = setInterval(() => {
    if ( !state.message ) {
      clearInterval(timerId)
    }
    let end = new Date()
    if ((end - start) > 10000) {
      state.message = false
    }
  }, 200);
}