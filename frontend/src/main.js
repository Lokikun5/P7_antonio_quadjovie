import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import interceptor from "./helpers/interceptor";

const app = createApp(App);
app.use(store);
interceptor();
app.use(router).mount("#app");
