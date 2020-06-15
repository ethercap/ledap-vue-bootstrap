import theme from './theme';
import './theme.less';

// yii2-ledap 需要有一个全局变量，如果觉得这种方案不优雅，可以考虑将 webpack-cli 架构改成 gulp
window.themeConfig = theme;
export default theme;