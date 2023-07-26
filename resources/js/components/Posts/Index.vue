<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="mb-4">
            <select
                v-model="selectCategory"
                class="block mt-1 w-full sm:w-1/4 rounded-md"
            >
                <option value="" selected>-- Filter By Category --</option>
                <option v-for="category in categories" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
        </div>
        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="px-6 py-3">ID</th>
                    <th scope="col" class="px-6 py-3">TITLE</th>
                    <th scope="col" class="px-6 py-3">CATEGORY</th>
                    <th scope="col" class="px-6 py-3">CONTENT</th>
                    <th scope="col" class="px-6 py-3">CREATE AT</th>
                    <th scope="col" class="px-6 py-3">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="post in posts.data"
                    :key="post.id"
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {{ post.id }}
                    </th>
                    <td class="px-6 py-4">{{ post.title }}</td>
                    <td class="px-6 py-4">{{ post.category }}</td>
                    <td class="px-6 py-4">
                        {{ post.content }}
                    </td>
                    <td class="px-6 py-4">{{ post.created_at }}</td>
                    <td class="px-6 py-4">
                        <!-- <router-link
                            :to="{
                                name: 'posts.edit',
                                params: { id: post.id },
                            }"
                            >Edit</router-link
                        >
                        <a
                            href="#"
                            @click.prevent="deletePost(post.id)"
                            class="ml-2"
                            >Delete</a
                        > -->

                        <router-link
                            v-if="can('posts.update')"
                            :to="{
                                name: 'posts.edit',
                                params: { id: post.id },
                            }"
                            >Edit</router-link
                        >
                        <a
                            href="#"
                            v-if="can('posts.delete')"
                            @click.prevent="deletePost(post.id)"
                            class="ml-2"
                            >Delete</a
                        >
                    </td>
                </tr>
            </tbody>
        </table>
        <TailwindPagination :data="posts" @pagination-change-page="getPosts" />
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

import usePosts from "../../composables/posts";
import useCategories from "../../composables/categories";
import { useAbility } from "@casl/vue";

export default {
    setup() {
        const selectCategory = ref("");
        const { posts, getPosts, deletePost } = usePosts();

        const { categories, getCategories } = useCategories();
        const { can } = useAbility();
        onMounted(() => {
            getPosts();
            getCategories();
        });

        return {
            posts,
            getPosts,
            deletePost,
            categories,
            getCategories,
            selectCategory,
            can,
        };
    },
};
</script>

<!-- <script setup> -->
// import usePosts from "@/composables/posts"; // // import useCategories from
"@/composables/categories"; // import { onMounted } from "vue"; // import {
TailwindPagination } from "laravel-vue-pagination"; //const { posts, getPosts }
= usePosts(); // const { categories, getCategories } = useCategories(); //
onMounted( () => { // getPosts // //getCategories // });

<!-- </script> -->
