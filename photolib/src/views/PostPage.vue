<template>
    <div class="post-page">
        <img :src="getPost.postImage" :alt="getPost.caption" class="post-page__img">
        <div class="post-page__text">
            <div class="post-page__likes">{{getPost.likes}}</div>
            <div class="post-page__author">{{getPost.username}}</div>
            <div class="post-page__category">{{getPost.category}}</div>
            <div class="post-page__description">{{getPost.caption}}</div>
        </div>
    </div>
</template>

<script>
    import posts from "../data/posts"
    export default {
        name: "PostPage",
        data () {
            return {
                posts
            }
        },
        computed: {
            getPost () {
                const id = this.$route.params.id
                const post = this.posts.filter(post => {
                    return post.id === id
                })
                return post[0]
            }
        },
        created() {
            console.log(this.getPost); // TODO console.log
        }
    }
</script>

<style scoped>

</style>