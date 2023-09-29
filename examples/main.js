import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
// Vue.use(Demo)
// Vue.use(Card)
import 'cloooud-ui/dist/css/index.css';
import CUI from 'cloooud-ui';
Vue.use(CUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
