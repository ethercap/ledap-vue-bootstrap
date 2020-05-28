# ledap-vue-bootstrap
ledap-vue-bootstrap 是服务于 ledap 的一个适用于 Vue 生态的 bootstrap 风格的主题。

## 安装
```bash
npm install ledap-vue-bootstrap -D
```
需要在 ledap 中使用，并且依赖 bootstrap 和 bootstrap-vue
```bash
npm install ledap bootstrap bootstrap-vue -D
```

## 使用
```javascript
import Vue from 'vue';
import * as ledap from 'ledap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import ledapVueBootstrap from 'ledap-vue-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

ledap.App.config({
    themeConfig: ledapVueBootstrap
});
ledap.App.register(Object.keys(ledap.App.getTheme().components), Vue);
```

## 文档
[文档](http://zhiyuancap.com/ledap.org/)
