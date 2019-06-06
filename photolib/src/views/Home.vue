<template>
    <div class="home">
        <slider :posts="getTopPost"></slider>
        <div class="container">
            <h1 class="page-title">Найкраші фото</h1>
            <div class="input-group">
                <label for="searchVal">Пошук</label>
                <input id="searchVal" type="text" class="input" v-model="searchVal" @input="setPage(1)">
            </div>
            <div class="post-wrapper">
                <post-item
                        v-for="(post, index) in collected" :key="index"
                        :post="post"
                ></post-item>
            </div>
            <div class="text-center">
                <ul class="pagination">
                    <li class="pagination__item" v-for="(page, index) in pagination.pages" :key="index">
                        <a href="#" class="pagination__link" @click="setPage(page)">{{page}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PostItem from '@/components/PostItem'
    import Slider from '@/components/Slider'

    import posts from "../data/posts"

    import _ from 'lodash'

    export default {
        name: 'home',
        data() {
            return {
                posts,
                searchVal: '',
                perPage: 12,
                pagination: {}
            }
        },
        computed: {
            getTopPost() {
                const allPost = this.posts.sort((a,b) => {
                    return b.likes - a.likes
                })
                return allPost.slice(0,3)
            },
            searchPicture() {
                const request = this.searchVal.toLowerCase()
                return this.posts.filter(elem => {
                    if (elem === '') return true
                    else return elem.caption.toLowerCase().includes(request) || elem.category.toLowerCase().includes(request) || elem.username.toLowerCase().includes(request)
                })
            },
            collected() {
                // collect pages from array
                return this.paginate(this.searchPicture)
            }
        },
        methods: {
            setPage(page) {
                this.pagination = this.paginator(this.searchPicture.length, page)
            },
            paginate(data) {
                return _.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
            },
            paginator(totalItems, currentPage) {
                const startIndex = (currentPage - 1) * this.perPage
                const endIndex = Math.min(startIndex + this.perPage - 1, totalItems -1)
                return {
                    currentPage,
                    startIndex,
                    endIndex,
                    pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
                }
            }

        },
        created() {
            this.setPage(1)
        },
        components: {
            'post-item': PostItem,
            'slider': Slider
        }
    }
</script>
<style lang="sass" src="./../styles/sass/home.sass">

</style>