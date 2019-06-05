<template>
    <form class="form" @submit.prevent="onSubmit">
        <div class="input-group">
            <img  class="image" v-if="image" :src="image">
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
            <label for="category">Категорія</label>
            <select v-model="category" class="input" name="category" id="category" required>
                <option value="">Виберіть категорію</option>
                <option value="Авто">Авто</option>
                <option value="Пейзажі">Пейзажі</option>
                <option value="Тварини">Тварини</option>
            </select>
        </div>
        <div class="input-group">
            <label for="description">Опис</label>
            <textarea
                    v-model="caption"
                    class="input"
                    id="description"
                    required
                    placeholder="Добавте опис фото"
                    name="description">
            </textarea>
        </div>

        <button class="button" type="submit" :disabled="validateImage">Опублікувати</button>
    </form>
</template>

<script>
    import posts from "../data/posts"
    export default {
        name: "NewPost",
        data() {
            return {
                posts,
                image: null,
                category: '',
                caption: ''
            }
        },
        methods: {
            onSubmit() {
                const newPost = {
                    id: this.generateId,
                    username: "Admin",
                    postImage: this.image,
                    likes: 0,
                    category: this.category,
                    hasBeenLiked: false,
                    caption: this.caption,
                }
                this.posts.push(newPost)
                this.$router.push('/')
            },
            triggerUpload() {
                this.$refs.fileInput.click()
            },
            onFileChange(event) {
                const file = event.target.files[0]

                const reader = new FileReader()
                reader.onload = () => {
                    this.image = reader.result

                }
                reader.readAsDataURL(file)
            }
        },
        computed: {
            generateId() {
                return Math.random().toString(36).substr(2, 16);
            },

            validateImage() {
                if (this.image === null || this.image === 'undefined') {
                    return true
                }
                    return false

            }
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/form.sass">

</style>