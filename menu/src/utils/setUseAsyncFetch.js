// require('dotenv').config();
// const URL_API = process.env.URL_API;
const URL_API = "http://localhost:4000"
import axios from 'axios';
import { useModalStore  } from '../stores/ModalStore'
import { useUserStore } from '../stores/UserStore'

export default async function setUseAsyncFetch ({
  config, token = null, loading = true, 
}){
  config.url = URL_API + config.url
  const modal = useModalStore()
  const user = useUserStore() 
  if (token) {
    config.headers.Authorization = `Bearer ${user.getToken}`
  }
  try{
    const res =  await axios(config)
      .then(({data})=>{
        console.log(data)
        return data
      })
    return res  
  } catch (e) { 
    console.log(e)
    modal.setMessageError(e)
  }
}