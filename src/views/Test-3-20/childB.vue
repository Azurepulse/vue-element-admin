<!-- TODO
    childB
    by ZTY
    2020/3/31
 -->


<script>
  export default {
    name: "childB",
    inject: {h2: {default: "nothing"}},
    data() {
      return {
        showTxt: "childB",
        append: ""
      }
    },
    methods: {
      acceptA(e) {
        this.append = e;
      },
    },
    computed: {
      fullText() {
        return `${this.showTxt}&&${this.append}${this.h2.clickMe}`;
      }
    },
    created() {
      this.$Bus.$on("FromChildA", this.acceptA);
    },
    beforeDestroy() {
      this.$Bus.$off("FromChildA", this.acceptA);
    },
    mounted() {
    },
    render(h) {
      return h("h3", {
        class: {child: true},
        on: {
          click: () => {
            this.h2.clickMe = this.fullText;
          }
        }
      }, this.fullText);
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
