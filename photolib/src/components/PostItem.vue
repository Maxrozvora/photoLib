<template>
    <div class="post">
        <router-link :to="'/post-page/' + post.id">
            <div class="post__image" :style='"background-image: url(" + post.postImage + ")"' :title="post.caption">
            </div>
        </router-link>
            <div class="post__content">
                <div class="post__heart">
                    <i class="fa"
                       :class="[this.post.hasBeenLiked ? 'fa-heart' : 'fa-heart-o']"
                    @click="like"
></i>
                    <span class="post__likes">{{post.likes}} подобається</span>
                </div>
                <div class="post__author">
                    <span class="post__author-name"><b>Автор:</b> {{post.username}}</span>
                </div>
                <div class="post__category"><b>Категорія:</b> <span class="post__category-link"> {{post.category}}</span></div>
                <span class="post__author-name">{{post.username}}:</span>
                <span class="post__caption">{{post.caption}}</span>
            </div>
        </div>
</template>

<script>
    export default {
        name: "PostItem",
        props: {
            post: Object
        },
        methods: {
            like () {
                this.post.hasBeenLiked
                ? this.post.likes--
                : this.post.likes++;
                this.post.hasBeenLiked = !this.post.hasBeenLiked;
            }
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/item.sass">

</style>