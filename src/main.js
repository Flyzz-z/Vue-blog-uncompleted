import Vue from 'vue'
import App from './App.vue'
import {row,col} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Vuex from 'vuex'
import animated from 'animate.css'


require('./mock');

Vue.config.productionTip = false;
Vue.use(row);
Vue.use(col);
Vue.use(Vuex);
Vue.use(animated);

const store = new Vuex.Store({
  state: {
    pageTitle: "Flyzz的博客",
    showColor: ""
  },
  mutations: {
    changePageTitle(state,PageTitle) {
      state.pageTitle = PageTitle;
    },
    changeColor(state,color){
      state.showColor = color;
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


