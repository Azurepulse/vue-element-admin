import Confirm from "@/components/Test-3-20/Confirm";
//全局询问框
const ConfirmBox = {};//这是后续export的对象
//在要export的对象上绑定install方法
ConfirmBox.install = function (Vue, options) {

  //extend根据引入的组件这个对象生成构造函数
  const ConfirmBoxConstructor = Vue.extend(Confirm);
  let ConfirmBoxInstance;
  //只有在初始化函数里，才会用new创建实例
  const initInstance = () => {
    ConfirmBoxInstance = new ConfirmBoxConstructor();//此时实例被生成
    document.body.appendChild(ConfirmBoxInstance.$mount().$el);//把实例里面的dom生成出来，提取，拼接到页面上
  };
  Vue.prototype.$ConfirmBox = {
    //无论如何，还是要留出一个地方接受option
    showMsgBox(options) {
      if (!ConfirmBoxInstance) {
        initInstance();
      }
      if (typeof options === "string") {
        ConfirmBoxInstance.content = options;
      }
      if (typeof options === "object") {
        // 反正data里的数据也是直接并在整个vue实例里，第一层，直接跟自定义数据合并
        Object.assign(ConfirmBoxInstance, options);
      }
      return ConfirmBoxInstance.showMsgBox().finally(() => {
        ConfirmBoxInstance = null;//最终会被销毁
      })
    }

  }
};
export default ConfirmBox;

/*
快排
 */
export const quickSort = (array) => {
  if (array.length <= 1) return array;

  let midIndex = 1;//Math.floor(array.length / 2);
  let midVal = array[midIndex];
  let left = array.filter((curVal, index, array) => curVal < midVal && index !== midIndex);
  let right = array.filter((curVal, index, array) => curVal >= midVal && index !== midIndex);
  console.info("过滤后", array);
  return [...quickSort(left), midVal, ...quickSort(right)];
}

export class Witcher {
  generateTime = new Date();

  constructor() {
    this.declare();
  }

  declare() {
    console.info(this.generateTime);
  }
}
