const { log } = require('console');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
//引入glob用于遍历文件夹 node自带的库
const glob = require('glob');
const list = {};

//同步读文件
async function makeList(dirPath, list) {
    //接收遍历到的文件
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files:', files);

    for (let file of files) {
        //截取文件路径中的关键词并存在component里
        const component = file.split('/')[2];
        console.log('component: ', component);
        //将路径名与路径对应放入list
        list[component] = `./${file}`;
    }
    console.log('list：', list);
}

makeList('components/lib', list);


//打包文件输出配置
module.exports = {
    entry: list,
    mode: 'development',
    output: {
        //打包时[name]会替换成入口名字，也就是组件名
        filename: '[name].umd.js',
        //输出目录
        path: path.resolve(__dirname, 'dist'),
        //打包文件的输出
        library: 'mui',
        //将js打包成umd形式的模块
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        //配置规则，什么样的文件使用什么样的loader
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            }
        ]
    }
}