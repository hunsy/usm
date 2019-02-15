<template>
  <div class="myProduct">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">我的设备列表</div>

      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text" v-for="item in myProducts" :key="item.id">
          <h4 class="weui-media-box__title">{{item.productName}}</h4>
          <p class="weui-media-box__desc" v-if="item.name">别名：{{item.name}}</p>
          <p class="weui-media-box__desc">SN：{{item.sn}}</p>
          <p class="weui-media-box__desc">MAC：{{item.mac}}</p>
          <p class="weui-media-box__desc">销售额:{{item.amount}}</p>
          <p class="weui-media-box__desc">商品数量：{{item.goodQuantity}}</p>
          <div>
            <a
              class="weui-btn weui-btn_mini weui-btn_primary"
              @click="configGoods(item.productInventoryId)"
            >
            配置商品
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//我的设备
import { getMerchantProductPage } from "@/api/merchant";
export default {
  name: "myProduct",
  data() {
    return {
      pageNo: 1,
      pageSize: 5,
      myProducts: []
    };
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    async loadPage() {
      const data = await getMerchantProductPage({ pageNo: this.pageNo }).catch(
        e => {
          console.log(e);
        }
      );
      console.log("data", data);

      if (data) {
        this.myProducts = data.dataResult;
      }
    },
    configGoods(id) {
      //跳转配置页
      this.$router.push({
        name: "usmConfigGoods",
        params: { productInventoryId: id }
      });
    }
  }
};
</script>

<style>
</style>
