# 快速开始

#### 安装组件库

```bash
npm install cloooud-ui
```

#### 引用组件库
> 在main.js中引用组件库
```javascript
//全部引入
import 'cloooud-ui/dist/css/index.css';
import CUI from 'cloooud-ui';
Vue.use(CUI);

//按需引入
import 'cloooud-ui/dist/css/card.css';
import {Card} from 'cloooud-ui';
Vue.use(Card);
```