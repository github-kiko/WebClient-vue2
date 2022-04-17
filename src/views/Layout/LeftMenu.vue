<template>
  <div>
    <Sider
      ref="side1"
      hide-trigger
      collapsible
      :collapsed-width="78"
      v-model="isCollapsed"
    >
      <Menu
        active-name="1-2"
        theme="dark"
        width="auto"
        :class="menuitemClasses"
      >
        <div v-for="(item, index) in leftMenu" :key="index">
          <MenuItem :name="item.name" @click.native="select(item)">
            <Icon :type="item.type"></Icon>
            <span>{{ item.text }}</span>
          </MenuItem>
        </div>
      </Menu>
    </Sider>
  </div>
</template>

<script>
import router from "../../router";
export default {
  data() {
    return {
      isCollapsed: false,
      leftMenu: [],
    };
  },
  created() {
    //   全屏展示
    this.$bus.$on("collapsedSider", () => {
      this.$refs.side1.toggleCollapse();
    });
     var menuRoute=router.options.routes
     menuRoute.forEach(item => {
       if(item.leftMenu) {
        this.leftMenu.push(item.leftMenu)  
       }
     });
  },
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {
      select(item) {
         this.$router.push({path:item.name})
          
      }
  },
};
</script>

<style lang="scss" scoped>
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>