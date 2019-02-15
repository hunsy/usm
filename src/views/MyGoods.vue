<template>
  <div id="merchantGoods">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">我的商品列表</div>

      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text" v-for="item in myGoods" :key="item.id">
          <h4 class="weui-media-box__title">{{item.title}}</h4>
          <p class="weui-media-box__desc">名称：{{item.name}}</p>
          <p class="weui-media-box__desc">售价: {{item.sellingPrice}}</p>
          <p class="weui-media-box__desc">表价：{{item.pricing}}</p>
          <p class="weui-media-box__desc">商品数量：{{item.quantity}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsPage } from "@/api/merchant";
export default {
  name: "merchantGoods",
  data() {
    return {
      myGoods: []
    };
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    async loadPage() {
      const data = await getGoodsPage({ pageNo: this.pageNo }).catch(e => {
        console.log(e);
      });
      console.log("data", data);
      if (data) {
        this.myGoods = data.dataResult;
      }
    }
  }
};
</script>

<style>
</style>
