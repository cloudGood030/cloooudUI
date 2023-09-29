import Demo from './src/main.vue'

//注册组件，注册完才能use
Demo.install = function(Vue) {
    Vue.component(Demo.name, Demo)
}


export default Demo