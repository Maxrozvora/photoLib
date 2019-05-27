<template>
    <div class="slider-wrapper">
        <button v-on:click='prevSlide' class="arrow arrow-prev">
            <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
        </button>
        <button v-on:click='nextSlide' class="arrow arrow-next">
            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </button>

        <div class='slider js-slider'>
            <div class="slider__body" v-bind:style='{left: sliderOffsetLeft + "px"}'>
                <div class="slider__slide js-slide" v-for='slide in posts' :style='"background-image: url(" + slide.postImage + ")"'>
                    <div class="slider__content">
                        <div class="slider__title">Розділ:{{slide.category}}</div>
                        <div class="slider__text">Автор:{{slide.username}}</div>
                        <div class="slider__text">Опис:{{slide.caption}}</div>
                        <div class="slider__text">Лайків:{{slide.likes}}</div>
                        <router-link class="button" :to="'/post-page/' + slide.id">Перейти</router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slider",
        props: {
            posts: Array
        },
        data () {
            return {
                // Всего слайдов
                sliderAllCount: 0,
                // Номер активного слайда
                sliderActive: 1,
                // Отступ тела со слайдами в контейнере
                sliderOffsetLeft: 0,
                // Шаг одного слайда = его длина
                sliderOffsetStep: 0
            }
        },

        methods: {
            // Иницилизация слайдера
            initSlider: function () {
                // Получаем элементы сладера и его слайдов
                let sliderBody = this.$el.querySelector('.js-slider')
                let sliderSlidies = sliderBody.querySelectorAll('.js-slide')
                // Записываем длину одного слайда для перелистывания
                this.sliderOffsetStep = sliderBody.clientWidth
                // Общее количество слайдов для стопов
                this.sliderAllCount = sliderSlidies.length
            },

            // Открыть слайд по номеру
            openSlide: function (id) {
                if (id > 0 && id <= this.sliderAllCount) {
                    this.sliderActive = id
                    // Сдвигаем элемент со слайдами
                    this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
                }
            },

            // Следующий слайд
            nextSlide: function () {
                if (this.sliderActive < this.sliderAllCount) {
                    this.sliderActive += 1
                    this.openSlide(this.sliderActive)
                }
            },

            // Предыдущий слайд
            prevSlide: function () {
                if (this.sliderActive > 1) {
                    this.sliderActive -= 1
                    this.openSlide(this.sliderActive)
                }
            }
        },

        mounted () {
            this.initSlider()

            // Перенастройка слайдера при ресайзе окна
            window.addEventListener('resize', () => {
                this.initSlider()
                this.openSlide(this.sliderActive)
            })
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/slider.sass">

</style>