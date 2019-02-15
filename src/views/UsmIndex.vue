<template>
  <div id="usmIndex" class="page tabbar js_show">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <div class="weui-tab__panel">
          <index-head :title="title"/>
          <div v-if="currentIndex == 0">熬上撒大所大所多0000</div>
          <div v-if="currentIndex == 1">
            <my-product/>
          </div>
          <div v-if="currentIndex == 2">
            <my-goods/>
          </div>
          <div v-if="currentIndex == 3">熬上撒大所大所多333333</div>
        </div>
        <div class="weui-tabbar">
          <a
            @click="changeIdx(0)"
            class="weui-tabbar__item"
            :class=" {'weui-bar__item_on':currentIndex == 0} "
          >
            <span style="display: inline-block;position: relative;">
              <img src="@/assets//icon_tabbar.png" alt class="weui-tabbar__icon">
              <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            </span>
            <p class="weui-tabbar__label">微信</p>
          </a>
          
          <a
            @click="changeIdx(1)"
            class="weui-tabbar__item"
            :class=" {'weui-bar__item_on':currentIndex == 1} "
          >
            <img src="@/assets//icon_tabbar.png" alt class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我的设备</p>
          </a>
          
          <a
            @click="changeIdx(2)"
            class="weui-tabbar__item"
            :class=" {'weui-bar__item_on':currentIndex == 2} "
          >
            <span style="display: inline-block;position: relative;">
              <img src="@/assets//icon_tabbar.png" alt class="weui-tabbar__icon">
              <span
                class="weui-badge weui-badge_dot"
                style="position: absolute;top: 0;right: -6px;"
              ></span>
            </span>
            <p class="weui-tabbar__label">我的商品</p>
          </a>
          
          <a @click="changeIdx(3)" class="weui-tabbar__item">
            <img
              src="@/assets/icon_tabbar.png"
              alt
              class="weui-tabbar__icon"
              :class=" {'weui-bar__item_on':currentIndex == 3} "
            >
            <p class="weui-tabbar__label">我</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexHead from "@/components/IndexHead";
import MyProduct from "./MyProduct";
import MyGoods from "./MyGoods";
export default {
  name: "usmIndex",
  components: {
    IndexHead,
    MyProduct,
    MyGoods
  },
  data() {
    return {
      title: "首页",
      currentIndex: 0,
      tabItem: "weui-tabbar__item",
      tabItemOn: "weui-bar__item_on"
    };
  },
  computed: {
    isCurrentIndex: function(i) {
      return this.currentIndex == i;
    }
  },
  methods: {
    changeIdx(i) {
      this.currentIndex = i;
      if (i == 0) {
        this.title = "首页";
      }
      if (i == 1) {
        this.title = "我的设备";
      }
      if (i == 2) {
        this.title = "我的商品";
      }
      if (i == 3) {
        this.title = "我";
      }
    }
  }
};
</script>

<style>
</style>
