import Vue from "vue";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import App from "./App.vue";

import Login from "./components/Login.vue";
import Products from "./components/Products.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: "/login" },
        { path: "/login", component: Login },
        { path: "/products", component: Products },
        { path: "/:notFound(.*)", component: NotFound },
    ],
});

Vue.use(Vuelidate);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
