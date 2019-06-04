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
        <nav class="breadcrumbs">
            <ul class="breadcrumbs-list">
                <li class="breadcrumbs-list__item">
                    <router-link :to="'/'" class="breadcrumbs-list__link">Головна</router-link> <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
                <li class="breadcrumbs-list__item">
                    <span class="breadcrumbs-list__link breadcrumbs-list__link--current">{{getHeaderImage.category}}</span>
                </li>
            </ul>
        </nav>
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
                return this.getCategoryPost[0]
            }
        },
        components: {
            'post-item': PostItem
        }
    }

</script>

<style scoped lang="sass" src="./../styles/sass/_category.sass">

</style>