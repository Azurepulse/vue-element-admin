<template>
  <div class="app-container">
    <div v-if="true">
      <el-row :gutter="20">
        <el-row :span="6" :xs="24" :offset="6">
          <h2>
            {{ clickMeAppend }}
          </h2>
          <child-a/>
          <child-b/>
        </el-row>

        <el-col :span="6" :xs="24">
          <user-card :user="user"/>
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Activity" name="activity">
                <activity/>
              </el-tab-pane>
              <el-tab-pane label="Timeline" name="timeline">
                <timeline/>
              </el-tab-pane>
              <el-tab-pane label="Account" name="account">
                <account :user="user"/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="6">
          <el-button type="primary">点我</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  import UserCard from '@/views/profile/components/UserCard';
  import Activity from '@/views/profile/components/Activity';
  import Timeline from '@/views/profile/components/Timeline';
  import Account from '@/views/profile/components/Account';
  import childA from '@/views/Test-3-20/childA';
  import childB from '@/views/Test-3-20/childB';
  import {quickSort, Witcher} from '@/utils/Test-3-26';
  // import Functional from "@/components/Test-3-20/Functional";

  export default {
    name: 'MyTest',
    components: {
      // Functional,
      childA, childB,
      UserCard, Activity, Timeline, Account
    },
    provide() {
      return {
        h2: this
      };
    },
    data() {
      return {
        user: {},
        activeTab: 'activity',
        clickMe: '点我！！',
        fullAppend: ''
      };
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'roles',
      ]),
      ...mapGetters("permission", ["GET_ADDROUTES"]),
      ...mapState("permission", {
        routes: state => state.routes,
        state: state => state,
      }),
      clickMeAppend() {
        return `${this.clickMe}$$${this.fullAppend}`;
      }
    },
    created() {
      this.getUser();
      // console.info(quickSort([88,602,4,123,89,55,63,41,89,63,2114,5632,45,2,13,7]));
      const witcher = new Witcher();
      Witcher.target = this.GET_ADDROUTES;
      console.info(witcher);
      console.info(Witcher, this.roles);
      console.info(Witcher.target);
      console.info(this.state);
    },
    methods: {
      getUser() {
        this.user = {
          name: this.name,
          role: this.roles.join(' | '),
          email: 'admin@test.com',
          avatar: this.avatar
        };
      }
    }
  };
</script>
<style scoped lang="scss">
  /*禁止选中文本 仅作mixin*/
  @mixin no-txt-select {
    -webkit-touch-callout: none; /* iOS Safari */

    -webkit-user-select: none; /* Chrome/Safari/Opera */

    -khtml-user-select: none; /* Konqueror */

    -moz-user-select: none; /* Firefox */

    -ms-user-select: none; /* Internet Explorer/Edge */

    user-select: none;
  }

  .app-container {
    h2 {
      text-align: center;

      &:hover {
        color: silver;
        cursor: pointer;
        @include no-txt-select;
      }
    }
  }
</style>
