<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="px-6 py-3">ID</th>
                    <th scope="col" class="px-6 py-3">TITLE</th>
                    <th scope="col" class="px-6 py-3">CONTENT</th>
                    <th scope="col" class="px-6 py-3">CREATE AT</th>
                    <th scope="col" class="px-6 py-3">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="post in posts"
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {{ post.id }}
                    </th>
                    <td class="px-6 py-4">{{ post.title }}</td>
                    <td class="px-6 py-4">
                        {{ post.content }}
                    </td>
                    <td class="px-6 py-4">{{ post.created_at }}</td>
                    <td class="px-6 py-4">
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr>
                <!-- <tr
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        2
                    </th>
                    <td class="px-6 py-4">B</td>
                    <td class="px-6 py-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, omnis, laudantium quos doloremque tempore
                        quibusdam eaque at exercitationem enim inventore atque
                        minima beatae odio. Aspernatur excepturi sit ipsum
                        tenetur provident?
                    </td>
                    <td class="px-6 py-4">2023-10-10 13:34:01</td>
                    <td class="px-6 py-4">
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr>
                <tr
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        3
                    </th>
                    <td class="px-6 py-4">C</td>
                    <td class="px-6 py-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, omnis, laudantium quos doloremque tempore
                        quibusdam eaque at exercitationem enim inventore atque
                        minima beatae odio. Aspernatur excepturi sit ipsum
                        tenetur provident?
                    </td>
                    <td class="px-6 py-4">2023-10-10 13:34:01</td>
                    <td class="px-6 py-4">
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr>
                <tr
                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        4
                    </th>
                    <td class="px-6 py-4">D</td>
                    <td class="px-6 py-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, omnis, laudantium quos doloremque tempore
                        quibusdam eaque at exercitationem enim inventore atque
                        minima beatae odio. Aspernatur excepturi sit ipsum
                        tenetur provident?
                    </td>
                    <td class="px-6 py-4">2023-10-10 13:34:01</td>
                    <td class="px-6 py-4">
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
    data() {
        return {
            posts: [],
        };
    },

    mounted() {
        this.allPosts();
    },

    methods: {
        allPosts() {
            axios
                .get("api/posts")
                .then((response) => (this.posts = response.data));
            //   .catch(error = console.log(error))
        },
    },
};
</script>
