<!-- TODO
    Functional
    by ZTY
    2020/3/20
 -->
<script>
  import {_debounce} from "@/utils";

  export default {
    name: "Functional",
    functional: true,
    render(createElement, context) {
      let eventKeys = Array.from(context.props.events);
      console.info(context);
      let slotDef = context.$slots.default[0];
      let originMap, debouncedMap = {};
      eventKeys.forEach((curVal, index, array) => {
        let target = slotDef.data.on[curVal]; //获得该函数式组件下，子组件上的监听事件;
        const debouncedFunc = _debounce(target);
        slotDef.data.on[curVal] = debouncedFunc;
      });
      return slotDef;
    },

  }
</script>
