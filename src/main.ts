import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./styles/root.scss";

createApp(App)
  .use(router)
  .mount("#app");
