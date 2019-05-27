<template>
    <div class="post-page">
        <div class="post">
            <div class="post__author">
                <span class="post__author-name">Автор: {{getPost.username}}</span>
            </div>
            <img class="post__image" :src="getPost.postImage" :alt="getPost.caption" @dblclick="like">
            <div class="post__content">
                <div class="post__heart">
                    <i class="fa"
                       :class="[getPost.hasBeenLiked ? 'fa-heart' : 'fa-heart-o']"
                       @click="like"
                    ></i>
                    <span class="post__likes">{{getPost.likes}} подобається</span>
                </div>
                <div class="post__category"><b>Категорія:</b> <a href="" class="post__category-link">
                    {{getPost.category}}</a></div>
                <span class="post__author-name">{{getPost.username}}:</span>
                <span class="post__caption">{{getPost.caption}}</span>
            </div>
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