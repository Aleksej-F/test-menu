<template>
   <div class="item__card-row" >
      <div class="item__card-header"> 
        <div class="item__card-block">
          <img :src="dish.image" alt="" class="item__card__img"
            v-if="dish.image"
          >
          <div class="item__card-title">
            {{ props.dish.id }} - {{ props.dish.title }}
          </div>
          <div class="item__card-title">
            {{ props.dish.discription }} ...  {{ props.dish.mass }}г.
          </div>
          <div class="item__card-title">
            {{ props.dish.price }}р
          </div>
        </div>
        <div class="block-button"
          v-if="user.getIsAutchUser && props.editView"
        >
          <div class="button-group">
            <div class="button-item"
              title="Редактировать"
              @click.stop="editDish"
            >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2407 6.75552L17.2857 5.71353C16.9165 5.31072 16.2924 5.27879 15.884 5.64183L14.3216 7.03088L16.6198 9.56793L18.1714 8.17538C18.5854 7.80377 18.6166 7.16567 18.2407 6.75552ZM5.5 14.8737L13.2006 8.02756L15.5035 10.5699L7.90674 17.388H5.5V14.8737ZM19.3465 5.74204L18.3915 4.70005C17.4686 3.69303 15.9083 3.61321 14.8874 4.5208L4.33557 13.9019C4.12212 14.0916 4 14.3636 4 14.6492V17.888C4 18.4403 4.44772 18.888 5 18.888H8.09822C8.34478 18.888 8.58266 18.7969 8.76616 18.6322L19.1733 9.29171C20.2084 8.36268 20.2863 6.76743 19.3465 5.74204ZM20 20.3847H4V21.8847H20V20.3847Z" fill="#269EB7"/>
              </svg>
            </div>
            <div class="button-item" 
              title="Удалить"
              @click.stop="deleteDish"
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.19118 5.73956C8.39757 4.39802 9.55188 3.40771 10.9092 3.40771H13.4775C14.8348 3.40771 15.9892 4.39802 16.1955 5.73956L16.2983 6.40767H17.6888H19.1934L19.1934 6.40771H20.1934V7.90771H19.0767L18.2419 18.6403C18.1205 20.2022 16.8176 21.4077 15.251 21.4077H9.13575C7.56912 21.4077 6.26627 20.2022 6.14479 18.6403L5.31003 7.90771H4.19336V6.40771H5.19336L5.19336 6.40767H6.69789H8.08839L8.19118 5.73956ZM14.7807 6.40767H9.60604L9.67373 5.96764C9.76755 5.35785 10.2922 4.90771 10.9092 4.90771H13.4775C14.0945 4.90771 14.6192 5.35785 14.713 5.96764L14.7807 6.40767ZM6.81456 7.90771L7.64027 18.524C7.70101 19.3049 8.35244 19.9077 9.13575 19.9077H15.251C16.0343 19.9077 16.6857 19.3049 16.7464 18.524L17.5722 7.90771L6.81456 7.90771Z" fill="#FF3F3F"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { useMenuDishStore  } from '../../stores/MenuDishStore'
  import { useUserStore  } from '../../stores/UserStore'
  const user = useUserStore()

  const router = useRouter()
  const route = useRoute()
  const dish = useMenuDishStore()
  const props = defineProps({
    dish: Object,
    editView: Boolean
  })

  
 
  function toLinkDish(){
    
  }

  function editDish(){
    dish.menuItem = props.dish
    router.push({ path: `/dish/edit/${props.dish.id}`})
  }

  function deleteDish(){

  }



</script>
<style lang="scss" scoped>
  .item{
    &__block{
      margin: 26px 0;
      position: relative;
    }
    
  }
  .item__card{
    min-height: 155px;
    padding: 20px 43px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px #E3EBFC, 0px 24px 48px rgba(230, 235, 245, 0.4);
    border-radius: 6px;
    position: relative;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #0B1F33;
    &:hover{
      cursor: pointer;
      outline: 1px solid #1a96a1;
    }
    &-header{
      flex: 10;
      
    }
    &-title{
      min-height: 40px;
    }
    &-info{
      margin-top: 37px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      &-item{
        flex: 1;
        min-width: 150px;
      }
    }
    &-row{
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 0;
      word-wrap: break-word;
      flex-wrap: wrap;
    }
    &__img{
      height: 100px;
      width: 150px;
      margin-right: 15px;
    }
    &__child{
      height: 100px;
      background-color: rgb(219 216 227);
    }
    &__parend{
      height: 50px;
      background-color: rgb(213, 204, 238);
    }
    &-block{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      border-bottom: 1px solid #E4E9F0;;
    }
  }
  .block-button{
    display: flex;
    justify-content:flex-end;
    padding: 0 10px 10px 10px;
  }
  .button{
  &-group{
  
  display:flex;
  justify-content: space-between;
  align-items: center;
  }

  &-item{
    margin-left: 24px;
    cursor: pointer;
    &:hover{
      transform: scale(1.15);
      
    }
  }
}

</style>