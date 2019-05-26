<template>
    <div class="category">
        <div class="category-header" :style='"background-image: url(" + getHeaderImage.postImage + ")"'>
            <h1 class="category-header__heading">
                Категорія: {{getHeaderImage.category}}
            </h1>
            <div class="category-header__descr">
                Кількіть фото: {{getCategoryPost.length}}
            </div>
        </div>
        <div class="container">
            <div class="post-wrapper">
                <post-item
                        v-for="(post, index) in getCategoryPost" :key="index"
                        :post="post"
                ></post-item>
            </div>
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
        computed: {
            getCategoryPost() {
                return posts.filter(item => {
                    return item.category === this.$route.params.id
                })
            },
            getHeaderImage() {
                return this.getCategoryPost.slice(0, 1)[0]
            }
        },
        created() {
            console.log(this.getHeaderImage); // TODO console.log
        },
        components: {
            'post-item': PostItem
        }
    }

</script>

<style scoped lang="sass" src="./../styles/sass/_category.sass">

</style>