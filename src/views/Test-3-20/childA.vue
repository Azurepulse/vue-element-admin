<!-- TODO
    childA
    by ZTY
    2020/3/31
 -->

<script>
  export default {
    name: "childA",
    // functional:true,
    data() {
      return {
        showTxt: "childA"
      }
    },
    methods: {},
    render(h, context) {
      return h("h3", {class: {child: true},on: {
            click: (e) => {
              console.info(e,context);
              this.$Bus.$emit("FromChildA", (this.showTxt.split("").reverse().join()).toString().replace(/,/g,""));
            }
          }}, this.showTxt,
        );
    },
  }
</script>

<style scoped lang="scss">
  .child {
    text-align: center;

    &:hover {
      color: seashell;
      cursor: pointer;
    }
  }
</style>
