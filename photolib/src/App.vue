<template>
  <div id="app">
    <app-header :links="links"></app-header>
    <router-view></router-view>
    <app-footer :links="links"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    computed: {

      links () {
        return [
          {title: 'Головна', url: '/'},
          {title: 'Картинки', url: '/',
            sublinks: [
              {title: 'Авто', url: '/category/auto'},
              {title: 'Пейзажі', url: '/category/views'},
              {title: 'Море', url: '/category/see'},
              {title: 'Тварини', url: '/category/animals'}
            ]
          },
          {title: 'Добавити фото', url: 'new-post'},
          {title: 'Контакти', url: 'about'},
        ]
      }
    },
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="sass" src="./styles/sass/main.sass">

</style>
