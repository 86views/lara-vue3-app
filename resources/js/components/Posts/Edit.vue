<template>
    <form @submit.prevent="updatePost(post)">
        <div>
            <label
                for="post-title"
                class="block font-medium text-sm text-gray-700"
            >
                Title
            </label>
            <input
                v-model="post.title"
                id="post-title"
                type="text"
                class="block mt-1 w-full rounded-md shadow-sm border-t-gray-400"
            />
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.title">
                    {{ message }}
                </div>
            </div>
        </div>

        <div class="mt-4">
            <label
                for="post-content"
                class="block font-medium text-sm text-gray-700"
            >
                Content
            </label>
            <textarea
                v-model="post.content"
                area="post-content"
                class="block mt-1 w-full rounded-md shadow-sm border-t-gray-400"
            />
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.content">
                    {{ message }}
                </div>
            </div>
        </div>


        <div class="mt-4">
            <label
                for="post-title"
                class="block font-medium text-sm text-gray-700"
            >
                Category
            </label>
            <select id="post-category" v-model="post.category_id">
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" > >
                <option value="" selected>-- Choose Category --</option>
                <option v-for="category in categories" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.category_id">
                    {{ message }}
                </div>
            </div>
        </div>

        <div class="mt-4">
          
            <button
                :disabled="isLoading"
                class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded disable:opacity-75 disabled:cursor-not-allowed"
            >
                <div
                    v-show="isLoading"
                    class="inline-block animate-spin w-4 h-4 mr-2 border-t-2 border-r-white border-b-2 border-l-2 border-l-blue-600 rounded-full"
                ></div>
                <span v-if="isLoading"> Processing...</span>
                <span v-else>Save</span>
            </button>
        </div>
    </form>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import useCategories from "../../composables/categories";
import usePosts from "../../composables/posts";

export default {
    setup() {
        const { categories, getCategories } = useCategories();
        const { post, getPost, updatePost, validationErrors, isLoading } = usePosts();
        const route = useRoute();
        onMounted(() => {
            getPost(route.params.id);
            getCategories();
        });

        return { categories, post, validationErrors, isLoading, updatePost, };
    },
};
</script>
