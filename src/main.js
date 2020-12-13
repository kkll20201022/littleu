import Vue from 'vue'
import App from './App'
import router from './router'

//引入数据库vuex
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入静态资源
import './assets/css/reset.css'

//引ui库



Vue.use(ElementUI);



// 导入仓库
import store from './store/index'

//图片添加的路径
Vue.prototype.$preImg = 'http://localhost:3000';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
