<template>
  <section class="wrapper">
   <div class="login-page">
     <CloseView/>
     <form @submit.prevent="submit">
       <div class="login-page-title">Регистрация</div>
       <div class="form"
         v-if="authorize"
       >
         <div class="authorise">
           <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M37.9873 69.2009C20.6454 69.2009 6.5373 55.0928 6.5373 37.7509C6.5373 20.409 20.6454 6.3009 37.9873 6.3009C55.3292 6.3009 69.4373 20.409 69.4373 37.7509C69.4373 55.0928 55.3292 69.2009 37.9873 69.2009ZM37.9873 0.7509C17.5541 0.7509 0.987305 17.3176 0.987305 37.7509C0.987305 58.186 17.5541 74.7509 37.9873 74.7509C58.4224 74.7509 74.9873 58.186 74.9873 37.7509C74.9873 17.3176 58.4224 0.7509 37.9873 0.7509Z" fill="#56D062"/>
             <path fill-rule="evenodd" clip-rule="evenodd" d="M50.2661 26.3862C49.8757 26.0107 49.243 26.0107 48.8527 26.3862L35.109 39.623L29.263 33.9934C28.8745 33.6179 28.24 33.6179 27.8496 33.9934L24.5511 37.1717C24.1607 37.5473 24.1607 38.1578 24.5511 38.5333L34.4023 48.022C34.5966 48.2107 34.8537 48.305 35.109 48.305C35.3643 48.305 35.6196 48.2107 35.8157 48.022L53.5646 30.9261C53.7533 30.7448 53.8569 30.5006 53.8569 30.2453C53.8569 29.99 53.7533 29.744 53.5646 29.5645L50.2661 26.3862Z" fill="#56D062"/>
           </svg>
           {{ authorizeTitle }}
         </div>
       </div>
       <div class="form"
         v-else
       >
         <div class="text-field">
           <label class="text-field__label" >Логин</label>
           <input class="text-field__input" 
             id="nik" 
             type="text" 
             placeholder="Придумайте логин"
             v-model="login"
             required
           />
         </div>
         <div class="text-field">
           <label class="text-field__label" >Email</label>
           <input class="text-field__input" 
             id="email" 
             type="email" 
             placeholder="Введите email"
             v-model="email"
             required
           />
         </div>
         <div class="text-field">
           <label class="text-field__label" >Пароль</label>
           <input class="text-field__input" 
             id="password" 
             type="password" 
             placeholder="Введите пароль"
             v-model="password"
             required
           />
         </div>
         <div class="text-field">
           <label class="text-field__label" >Повторить пароль</label>
           <input class="text-field__input" 
             id="password_repeat" 
             type="password" 
             placeholder="Повторите пароль"
             v-model="confirmPassword"
             required
           />
         </div>
                 
         <div class="text-login">
           <RouterLink :to="{ name: 'logout'}" class="routerLink"> 
              Уже есть аккаунт
           </RouterLink>
         </div>
         <input class="btn" type="submit" value="Зерегистрироваться"/> 
       </div>
     </form>
   </div>
 </section>
</template>

<script>
import MessageView from "../components/ui/MessageView.vue"
import CloseView from "../components/ui/CloseView.vue"

export default {
 components: {
   MessageView, CloseView
 },
 data() {
   return {
     count: 0,
     confirmPassword:'',
     password:'',
     email:'',
     login:'',
     authorize: false,
     authorizeTitle:'Удачная регистрация'
   }
 },
   computed:{
    
   },
   methods: {
    
     async submit(){
       const user = {
         confirmPassword: this.confirmPassword,
         email: this.email,
         login: this.login,
         password: this.password, 
       }
      
       const res = await this.setRegistrationUser(user)
       
       if (res) {
         return
       } else {
         this.clearForm()
       }
       this.authorize = true
       await  this.setLogInUser({username:user.email,password: user.password})
     
       this.$router.push({ path: this.getPageName})
     },
     clearForm() {
       this.confirmPassword = '',
       this.password='',
       this.email='',
       this.login=''
     }
   }
   // mounted(){
   // }
 
} 

</script>
<style lang="scss" scoped>


@media (min-width: 1024px) {

}

@media (min-width: 1024px) {

}
</style>