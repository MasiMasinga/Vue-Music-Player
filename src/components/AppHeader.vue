<template>
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <router-link
                class="text-white font-bold uppercase text-2xl mr-4"
                exact-active-class="no-active"
                :to="{ name: 'Home' }"
            >
                Music
            </router-link>
            <div class="flex flex-grow items-center">
                <ul class="flex flex-row mt-1">
                    <li>
                        <router-link class="px-2 text-white" :to="{ name: 'About' }">
                            About
                        </router-link>
                    </li>
                    <li v-if="!userStore.userLoggedIn">
                        <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
                            >Login / Register</a
                        >
                    </li>
                    <template v-else>
                        <li>
                            <router-link class="px-2 text-white" :to="{ name: 'Manage' }"
                                >Manage</router-link
                            >
                        </li>
                        <li @click.prevent="signOut">
                            <a class="px-2 text-white" href="#">Logout</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "../stores/modal";
import useUserStore from "../stores/user";

export default {
    name: "AppHeader",
    computed: {
        ...mapStores(useModalStore, useUserStore),
    },
    methods: {
        toggleAuthModal() {
            this.modalStore.isOpen = !this.modalStore.isOpen;
            console.log(this.modalStore.isOpen);
        },
        signOut() {
            this.userStore.signOut();

            if (this.$route.meta.requiresAuth) {
                this.$router.push({ name: "home" });
            }
        },
    },
};
</script>
