<template>
    <div class="post">
            <div class="post__author">
                <span class="post__author-name">{{post.username}}</span>
            </div>
            <div class="post__image">
                <img
                        :src="post.postImage"
                        :alt="post.caption"
                        :class="post.filter"
                        @dblclick="like"
                        class="post__img">
            </div>
            <div class="post__content">
                <div class="post__heart">
                    <i class="fa"
                       :class="[this.post.hasBeenLiked ? 'fa-heart' : 'fa-heart-o']"
                    @click="like"
></i>
                    <span class="post__likes">{{post.likes}} подобається</span>
                </div>
                <span class="post__author-name">{{post.username}}</span>
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