require('dotenv').config();
const URL_API = process.env.URL_API;
import axios from 'axios';
import { useModalStore  } from '../stores/ModalStore'
import { useUserStore } from '../stores/UserStore'

export default async function setUseAsyncFetch ({
  config, token = null, loading = true, 
}){
  const modal = useModalStore()
  const user = useUserStore() 
  if (token) {
    config.headers.Authorization = `Bearer ${user.getToken}`
  }
  try{
    await axios(config)
      .then(({data})=>{
        console.log(data)
        return data;
      })
  } catch (e) { 
    modal.setMessageError(e)
  }
}