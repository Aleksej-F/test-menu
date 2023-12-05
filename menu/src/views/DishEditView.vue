<template>
  <div>
    <div class="block">
      <div class="title">
        <h2>Форма редактирования блюда</h2>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <form @submit.prevent="onSubmit">
          <input type="hidden" 
            name="companyId" 
            :value="dishId"
            v-if="dishId"
          >
          <label class="label"><b>Название:</b> </label>
          <div class="custom-radio img_block">  
            <input  
              v-model="title"
              class="input_alias" 
            >
            <i class="bi bi-eraser custom-close" title="Очистить поле"
              @click="title = ''"
              v-if="title !== ''"
            ></i>
          </div>
          <p class="label"><b>Описание: </b></p>
          <div class="custom-radio img_block">
            <textarea rows="2" required
              name="discription"
              v-model= "discription"
              class="textarea_input" 
              
            ></textarea> 
            <i class="bi bi-eraser custom-close" title="Очистить поле"
              @click="discription = ''"
              v-if="discription !== ''"
            ></i>
          </div>
          <label class="label"><b>Цена:</b> </label>
          <div class="custom-radio img_block">  
            <input  
              name="tin"
              v-model= "price"
              class="input_alias"
            />
            <i class="bi bi-eraser custom-close" title="Очистить поле"
              @click="price = ''"
              v-if="price !== ''"
            ></i>
          </div>
          <label class="label"><b>Масса:</b> </label>
          <div class="custom-radio img_block">  
            <input  
              name="mass"
              v-model= "mass"
              class="input_alias" 
            >
            <i class="bi bi-eraser custom-close" title="Очистить поле"
              @click="mass = ''"
              v-if="mass !== ''"
            ></i>
          </div>
          
          
          
        
          <br> 
            
          <button type="submit" class="button">Добавить</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup >
  import { useRoute, useRouter } from 'vue-router'
  import { useMenuDishStore } from '../stores/MenuDishStore'
  import { ref, computed } from 'vue'
  const router = useRouter()
  const route = useRoute()
  const dish = useMenuDishStore()

  
  const dishId = ref(null)
  const title = ref('')
  const discription = ref('')
  const price = ref('')
  const img   = ref('')
  const mass = ref('')
  const groups = ref('')
  
  async function onSubmit(e){
    let body = {
      // id :  dishId.value,
      "title": title.value,     
      "discription":  discription.value,
      "price":+price.value,
      // img: img.value,
      "mass": +mass.value,
      // groups: groups.value,
 
    }

    await dish.setCreateDishDB(body)
  }
  
</script>
<style lang="scss" scoped>
  .button{
    padding: 5px 10px;
    transition: all 0.1s ease-out;
    &:hover{
      background-color: rgb(156, 156, 154);
    }
  }
  .label{
    display:block;
    margin: 0 10px;
  }
  .textarea_input{
    max-width: 50%;
    padding: 0;
    padding-left: 10px;
    margin: 5px;
  }
  .input_alias{
    width: 22%;
    border-color: rgb(243 243 238);
    margin: 5px;
  }
  .img_block{
    display: flex;
    align-items: flex-start;
    & i {
      margin: 10px;
      transition: all 0.5s ease-out;
      &:hover{
        color: rgb(185, 48, 14);
        transform: scale(1.25);
        cursor: pointer;
      }
    }
  }
 @media (min-width: 1024px) {
  
 }
</style>