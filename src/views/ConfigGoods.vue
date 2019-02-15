<template>
  <div id="configGoods">配置页面</div>
</template>

<script>
import { getProductGoodsList } from "@/api/merchant";

export default {
  name: "configGoods",
  data() {
    return {
      productInventoryId: "",
      configs: []
    };
  },
  mounted() {
    this.productInventoryId = this.$route.params.productInventoryId;
    console.log("params", this.productInventoryId);
    if (this.productInventoryId) {
      this.loadlist();
    }
  },
  methods: {
    async loadlist() {
      const data = await getProductGoodsList(this.productInventoryId).catch(
        e => {
          console.log(e);
        }
      );
      console.log("data", data);
      if (data) {
        this.configs = data;
      }
    }
  }
};
</script>

<style>
</style>
