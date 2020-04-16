// bus测试

const busModule = {};
busModule.install = (Vue) => {
  //Bus本身是个vue实例
  Vue.prototype.$Bus = new Vue({
    methods: {
      //触发事件，...args为参数
      emit(events, ...args) {
        console.info(events, ...args);
        this.$emit(events, ...args);
      },
      //绑定事件，callback为方法
      on(events, callback) {
        this.$on(events, callback);
      },
      off(events, callback) {
        this.$off(events, callback);
      }
    }
  });
}
export default busModule;
