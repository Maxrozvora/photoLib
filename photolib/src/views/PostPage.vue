<template>
    <div class="post-page">
        <div class="post-header">
                <div class="post-header__content">
                    <div class="post-header__category"><b>Категорія:</b> <span class="post-header__category-link">
                        {{getPost.category}}</span></div>
                    <span class="post-header__author-name"><b>Автор:</b> {{getPost.username}}</span>
                    <div class="post-header__caption"><b>Опис:</b> {{getPost.caption}}</div>
                    <div class="post-header__heart">
                        <i class="fa"
                           :class="[getPost.hasBeenLiked ? 'fa-heart' : 'fa-heart-o']"
                           @click="like"
                        ></i>
                        <span class="post-header__likes">{{getPost.likes}} подобається</span>
                    </div>
                </div>
        </div>
        <nav class="breadcrumbs">
            <ul class="breadcrumbs-list">
                <li class="breadcrumbs-list__item">
                    <router-link :to="'/'" class="breadcrumbs-list__link">Головна</router-link> <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
                <li class="breadcrumbs-list__item">
                    <router-link :to="`/category/${getPost.category}`" class="breadcrumbs-list__link">{{getPost.category}}</router-link> <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
                <li class="breadcrumbs-list__item">
                    <span class="breadcrumbs-list__link breadcrumbs-list__link--current">Картинка</span>
                </li>
            </ul>
        </nav>
        <div class="post">
            <div class="post__author">
                <span class="post__author-name">Автор: {{getPost.username}}</span>
            </div>
            <img class="post__image" :src="getPost.postImage" :alt="getPost.caption" @dblclick="like">

        </div>
    </div>
</template>

<script>
    import posts from "../data/posts"

    export default {
        name: "PostPage",
        data() {
            return {
                posts
            }
        },
        computed: {
            getPost() {
                const id = this.$route.params.id
                const post = this.posts.filter(post => {
                    return post.id === id
                })
                return post[0]
            }
        },
        methods: {
            like() {
                this.getPost.hasBeenLiked
                    ? this.getPost.likes--
                    : this.getPost.likes++;
                this.getPost.hasBeenLiked = !this.getPost.hasBeenLiked;
            }
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/post-page.sass">

</style>