<template>
  <header>
    <div class="wrapper">
      Меню
      <nav>
        <RouterLink to="/review">Смотреть</RouterLink>
        <RouterLink to="/redact"
          v-if="user.getIsAutchUser"
        >Редактировать</RouterLink> 
        <RouterLink 
          v-if="user.getIsAutchUser"
          to="/"
          @click="logout"
        >Выйти</RouterLink>
        <RouterLink to="/login"
        v-else
        >Авторизоваться</RouterLink> 
       </nav>
    </div>
  </header>
</template>
<script setup>
  import { useUserStore  } from '../stores/UserStore'
  const user = useUserStore()

  function logout(){
    user.token = null
  }
</script>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>