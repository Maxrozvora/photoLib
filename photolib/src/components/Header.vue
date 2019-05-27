<template>
    <header class="top-line">
        <router-link :to="'/'" tag="a" class="logo logo-litera">PhotoLib</router-link>
        <div @click="toggleMobileNav" class="mobile-menu-button"><i class="fa fa-bars"></i> Меню</div>
        <nav class="main-menu top-menu" :class="{active: toggleNav}">
            <ul class="main-menu__list" @click="hideNavBar">
                <router-link
                        v-for="link of links"
                        :key="link.title"
                        :to="link.url"
                        tag="li"
                        class="main-menu__item"
                >
                    <a class="main-menu__link">{{link.title}}</a>
                    <ul v-if="link.sublinks" class="main-menu__sub-menu">
                        <router-link
                                v-for="(sublink, index) in link.sublinks"
                                :key="index"
                                :to="sublink.url"
                                tag="li"
                                class="main-menu__item-sub">
                            <a class="main-menu__link">{{sublink.title}}</a>
                        </router-link>
                    </ul>
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            links: Array
        },
        data() {
            return {
                toggleNav: false
            }
        },
        methods: {
            toggleMobileNav () {
                this.toggleNav = !this.toggleNav
            },
            hideNavBar () {
                this.toggleNav = false
            }
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/header.sass">

</style>