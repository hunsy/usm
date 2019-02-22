<template>
  <div class="page" id="goodsForm">
    <div class="weui-cells weui-cells_form" :model="form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">标题</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请输入商品显示标题" v-model="form.title">
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">名称</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请输入商品名称" v-model="form.name">
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">标价</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入商品标价" v-model="form.pricing">
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">售价</label>
        </div>
        <div class="weui-cell__bd">
          <input
            class="weui-input"
            type="number"
            placeholder="请输入商品售价"
            v-model="form.sellingPrice"
          >
        </div>
      </div>
    </div>

    <div class="__ft" @click="saveGoods()">保存</div>
  </div>
</template>

<script>
import { saveGoods } from "@/api/merchant";
export default {
  name: "goodsForm",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    async saveGoods() {
      const d = await saveGoods(this.form).catch(e => console.log(e));
      console.log(d);
      
      if(d){
          this.$router.go(-1);
      }
    }
  }
};
</script>

<style type="text/css">
.__ft {
  position: absolute;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 1px solid #eee;
  text-align: center;
}
.__ft :active {
  background-color: #eee;
}
</style>
