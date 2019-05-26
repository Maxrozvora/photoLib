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
    data () {
      return {
        links:[
          {title: 'Головна', url: '/'},
          {title: 'Картинки', url: '/',
            sublinks: [
              {title: 'Пейзажі', url: '/category/Пейзажі'},
              {title: 'Авто', url: '/category/Авто'},
              {title: 'Тварини', url: '/category/Тварини'}
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
