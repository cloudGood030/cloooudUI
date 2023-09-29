//为了可以整体引入组件库，需要建一个总的js
import Demo from './demo';
import Card from './card';

const components = {
    Demo,
    Card
}


//要配置install注册组件，Vue.use就是调用模块下面的install方法

const install = function(Vue) {
    //如果注册过直接返回
    if (install.installed) return
    //遍历组件并注册
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
}


const API = {
    install,
}

export default API;