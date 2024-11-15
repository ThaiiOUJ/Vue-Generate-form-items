// main.js

import "./assets/main.css"; // 引入全局 CSS 文件
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// GitHub 全屏轮播图
// import "vue-fullpage.js/dist/style.css";
// import Vuefullpage from "vue-fullpage.js";
// app.use(Vuefullpage);

const app = createApp(App);
app.use(router);
app.mount("#app");
