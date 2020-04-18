import Confirm from '@/components/Test-3-20/Confirm';
// 全局询问框
const ConfirmBox = {};// 这是后续export的对象
// 在要export的对象上绑定install方法
ConfirmBox.install = function(Vue, options) {
  // extend根据引入的组件这个对象生成构造函数
  const ConfirmBoxConstructor = Vue.extend(Confirm);
  let ConfirmBoxInstance;
  // 只有在初始化函数里，才会用new创建实例
  const initInstance = () => {
    ConfirmBoxInstance = new ConfirmBoxConstructor();// 此时实例被生成
    document.body.appendChild(ConfirmBoxInstance.$mount().$el);// 把实例里面的dom生成出来，提取，拼接到页面上
  };
  Vue.prototype.$ConfirmBox = {
    // 无论如何，还是要留出一个地方接受option
    showMsgBox(options) {
      if (!ConfirmBoxInstance) {
        initInstance();
      }
      if (typeof options === 'string') {
        ConfirmBoxInstance.content = options;
      }
      if (typeof options === 'object') {
        // 反正data里的数据也是直接并在整个vue实例里，第一层，直接跟自定义数据合并
        Object.assign(ConfirmBoxInstance, options);
      }
      return ConfirmBoxInstance.showMsgBox().finally(() => {
        ConfirmBoxInstance = null;// 最终会被销毁
      });
    }

  };
};
export default ConfirmBox;

/*
快排
 */
export const quickSort = (array) => {
  if (array.length <= 1) return array;

  const midIndex = 1;// Math.floor(array.length / 2);
  const midVal = array[midIndex];
  const left = array.filter((curVal, index, array) => curVal < midVal && index !== midIndex);
  const right = array.filter((curVal, index, array) => curVal >= midVal && index !== midIndex);
  console.info('过滤后', array);
  return [...quickSort(left), midVal, ...quickSort(right)];
};

export class Witcher {
  generateTime = new Date();

  constructor() {
    this.declare();
  }

  declare() {
    console.info(this.generateTime);
  }
}
/**

 const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
 module.exports = {
  publicPath: BASE_URL,
  css: { // 配置css模块
    loaderOptions: { // 向预处理器 Loader 传递配置选项
      less: { // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
  devServer: {
chainWebpack: config => {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true, // console
              drop_console: true,
              pure_funcs: ['console.log'] // 移除console
            },
          },
          sourceMap: false,
          parallel: true,
        })
      )
    }
  },

 */

// 引入terser插件
const TerserPlugin = require('terser-webpack-plugin');
// 使用configureWebpack字段配置webpack
module.exports = {
  // 下面两种配置方式选一即可
  // 一、配置式
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    }
  },
  // 二、链式操作
  chainWebpack: config => {
    config.optimization.minimizer([new TerserPlugin({
      terserOptions: {
        compress: {
          pure_funcs: ['console.log']
        }
      }
    })]);
  }
};
