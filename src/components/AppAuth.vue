<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="hiddenClass">
        <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div
                class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="py-4 text-left px-6">
                    <div class="flex justify-between items-center pb-4">
                        <p class="text-2xl font-bold">Your Account</p>
                        <div
                            class="modal-close cursor-pointer z-50"
                            @click="modalVisibility = false"
                        >
                            <i class="fas fa-times"></i>
                        </div>
                    </div>

                    <ul class="flex flex-wrap mb-4">
                        <li class="flex-auto text-center">
                            <a
                                class="block rounded py-3 px-4 transition"
                                href="#"
                                :class="{
                                    'hover:text-white text-white bg-blue-600': tab === 'login',
                                    'hover:text-blue-600': tab === 'register',
                                }"
                                @click.prevent="tab = 'login'"
                            >
                                Login
                            </a>
                        </li>
                        <li class="flex-auto text-center">
                            <a
                                class="block rounded py-3 px-4 transition"
                                href="#"
                                @click.prevent="tab = 'register'"
                                :class="{
                                    'hover:text-white text-white bg-blue-600': tab === 'register',
                                    'hover:text-blue-600': tab === 'login',
                                }"
                            >
                                Register
                            </a>
                        </li>
                    </ul>

                    <login-form v-if="tab === 'login'" />

                    <register-form v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Pinia
import useModalStore from "../stores/modal";
import { mapState, mapWritableState } from "pinia";

// Components
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
    name: "AppAuth",
    components: {
        LoginForm,
        RegisterForm,
    },
    data() {
        return {
            tab: "login",
            schema: {
                name: "required|min:3|max:100|alpha_spaces",
                email: "required|min:3|max:100|email",
                age: "required|min_value:18|max_value:100",
                password: "required|min:9|max:100|excluded:password",
                confirm_password: "password_mismatch:@password",
                country: "required|country_excluded:Antarctica",
                tos: "tos",
            },
            loginSchema: {
                email: "required|min:3|max:100|email",
                password: "required|min:9|max:100|excluded:password",
            },
            userData: {
                country: "USA",
            },
            reg_in_submission: false,
            reg_show_alert: false,
            reg_alert_variant: "bg-blue-500",
            reg_alert_message: "Please wait! Your account is being created.",
        };
    },
    computed: {
        ...mapState(useModalStore, ["hiddenClass"]),
        ...mapWritableState(useModalStore, {
            modalVisibility: "isOpen",
        }),
    },
    methods: {
        register(values) {
            this.reg_in_submission = true;
            this.reg_show_alert = true;
            this.reg_alert_variant = "bg-blue-500";
            this.reg_alert_message = "Please wait! Your account is being created.";

            this.reg_alert_variant = "bg-green-500";
            this.reg_alert_message = "Success! Your account has been created.";
            console.log(values);
        },
        login(values) {
            console.log(values);
        },
    },
};
</script>
