<template>
    <div class="home">
        <hooper>
            <slide v-for="(slide, index) in getSliderItem" :key="index">
                <div class="slide-item">
                    <div class="slide-item__description">
                        <h1 class="slide-item__title">Найкраще фото з категорії: {{slide.category}}</h1>
                        <div class="slide-item__text">Опис:  {{slide.caption}}</div>
                        <div class="slide-item__text">Лайки: {{slide.likes}} <i class="fa fa-heart"></i></div>
                    </div>
                    <div class="slide-item__image-wrap">
                        <img :src="slide.postImage" :alt="slide.category" class="slide-item__img">
                    </div>
                </div>

            </slide>


        </hooper>
        <div class="container">
            <h1 class="page-title">Найкраші фото</h1>
            <div class="post-wrapper">
                <post-item
                        v-for="(post, index) in posts" :key="index"
                        :post="post"
                ></post-item>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PostItem from '@/components/PostItem'
    // import Slider from '@/components/Slider'
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    import posts from "../data/posts"
    import filters from "../data/filters"

    export default {
        name: 'home',
        data() {
            return {
                posts,
                filters,
            }
        },
        computed: {
            getSliderItem () {
                return this.posts
            }
        },
        components: {
            'post-item': PostItem,
            Hooper,
            Slide
        }
    }
</script>
<style lang="sass" src="./../styles/sass/slider.sass">

</style>