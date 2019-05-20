<template>
    <div class="category">
        <div class="pattern pattern-cat-header">
            <div class="cat-header overlay" style="background-image: url('img/blog/electronics/_test.jpg');">
                <div class="cat-header-block">
                                <h1>
                                    Категория
                                </h1>
                                <p>описание</p>
                            </div>
            </div>
        </div>
        <h1>Назва категории</h1>
        <div class="post-wrapper">
            <post-item
                    v-for="(post, index) in posts" :key="index"
                    :post="post"
            ></post-item>
        </div>
    </div>
</template>

<script>
    import PostItem from '@/components/PostItem'

    import posts from "../data/posts"
    export default {
        name: "Category",
        data() {
            return {
                posts
            }
        },
        components: {
            'post-item': PostItem
        }
    }

</script>

<style scoped lang="sass" src="./../styles/sass/_category.sass">

</style>