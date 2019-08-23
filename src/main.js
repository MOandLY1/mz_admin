import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from './axios/index.js'
// axios.defaults.baseURL = "http://127.0.0.1:10087/admin/"
Vue.prototype.$http= axios
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);
import router from './router/index.js'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
