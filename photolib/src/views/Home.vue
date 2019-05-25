<template>
    <div class="home">
        <slider :posts="posts"></slider>
        <div class="container">
            <h1 class="page-title">Найкраші фото</h1>
            <div class="input-group">
                <label>Пошук</label>
                <input type="text" class="input" v-model="searchVal">
            </div>
            <div class="post-wrapper">
                <post-item
                        v-for="(post, index) in searchPicture" :key="index"
                        :post="post"
                ></post-item>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PostItem from '@/components/PostItem'
    import Slider from '@/components/Slider'

    import posts from "../data/posts"
    import filters from "../data/filters"

    export default {
        name: 'home',
        data() {
            return {
                posts,
                filters,
                searchVal: ''
            }
        },
        computed: {
            getSliderItem () {
                return this.posts
            },
            searchPicture () {
                const request = this.searchVal.toLowerCase()
                return this.posts.filter(elem => {
                    if (elem === '') return true
                    else return elem.caption.toLowerCase().includes(request) || elem.category.toLowerCase().includes(request)
                })
            }
        },
        components: {
            'post-item': PostItem,
            'slider': Slider
        }
    }
</script>
<style lang="sass" src="./../styles/sass/home.sass">

</style>