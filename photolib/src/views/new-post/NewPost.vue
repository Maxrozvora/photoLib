<template>
    <form class="form" @submit.prevent="onSubmit">
        <div class="input-group">
            <img  class="image" :src="imageSrc">
            <div @click="triggerUpload" class="button mt-2">Загрузити фото <i class="fa fa-download"></i></div>
        </div>
        <div class="input-group d-none">
            <input
                    @change="onFileChange"
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    class="input"
                    id="image"
                    placeholder="Виберіть фото"
                    name="image" required>
        </div>
        <div class="input-group">
            <label for="description">Опис</label>
            <textarea
                    v-model="description"
                    class="input"
                    id="description"
                    placeholder="Добавте опис фото"
                    name="description">
            </textarea>
        </div>

        <button class="button" type="submit"
                :disabled="$v.$invalid"
        >Опублікувати</button>
        <span class="message" :class="{'hidden': !loading}">Йде створення поста</span>
    </form>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    export default {
        name: "NewPost",
        data () {
            return {
                image: null,
                imageSrc: '../assets/nophoto.png',
                description: ''
            }
        },
        methods: {
            onSubmit () {
                const newPost = {
                    image: this.image,
                    description: this.description,
                    likes: 0
                }
                this.$store.dispatch('createPost', newPost)
                    .then(() => {
                        this.$router.push('/')
                    })
        },
            triggerUpload () {
                this.$refs.fileInput.click()
            },
            onFileChange (event) {
                const file = event.target.files[0]
                const reader = new FileReader()
                reader.onload = e => {
                    this.imageSrc = reader.result

                }
                reader.readAsDataURL(file)
                this.image = file
            }
        }
</script>

<style scoped lang="sass" src="./../../styles/sass/form.sass">

</style>