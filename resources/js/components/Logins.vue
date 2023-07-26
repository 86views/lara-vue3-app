<template>
    <form method="post" @submit.prevent="submitLogin">
        <div>
            <div>
                <label
                    for="post-title"
                    class="block font-medium text-sm text-gray-700"
                >
                    Email
                </label>
                <input
                    v-model="loginForm.email"
                    id="login-email"
                    type="text"
                    class="block mt-1 w-full rounded-md shadow-sm border-t-gray-400"
                />
                <div class="text-red-600 mt-1">
                    <div v-for="message in validationErrors?.email">
                        {{ message }}
                    </div>
                </div>
            </div>

            <div>
                <label
                    for="post-title"
                    class="block font-medium text-sm text-gray-700"
                >
                    Password
                </label>
                <input
                    v-model="loginForm.password"
                    id="login-password"
                    type="password"
                    class="block mt-1 w-full rounded-md shadow-sm border-t-gray-400"
                />
                <div class="text-red-600 mt-1">
                    <div v-for="message in validationErrors?.password">
                        {{ message }}
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-end mt-4">
                <button
                    class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded disable:opacity-75 disabled:cursor-not-allowed"
                >
                    Login
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import useAuth from "../composables/auth";

export default {
    setup() {
        const { loginForm, validationErrors, processing, submitLogin } =
            useAuth();

        return { loginForm, validationErrors, processing, submitLogin };
    },
};
</script>
