<template>
  <div id="configGoods" class="page page__bd">
    <div class="weui-flex" style="padding:none;">
      <div class="left">
        <div
          class="left-item"
          :class="{'active' : item.idx == currentIdx}"
          v-for="item in configs"
          :key="item.idx"
          @click="changeGird(item.idx)"
        >{{item.idx}}层</div>
      </div>

      <div class="weui-flex__item">
        <div class="weui-panel weui-panel_access">
          <div class="weui-panel__hd">
            <a class="weui-form-preview__btn" @click="addGoods()">新增商品</a>
          </div>
          <div class="weui-panel__hd" style="text-align:left;">{{currentIdx}}&nbsp;层</div>
          <div class="weui-panel__bd" v-if="currentGoods">
            <div v-for="good in currentGoods" :key="good.goodsId">
              <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                  <img
                    class="weui-media-box__thumb"
                    :src="good.headImgUrl | patchImgHttp"
                    v-if="good.headImgUrl"
                  >
                  <img
                    class="weui-media-box__thumb"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                    alt
                    v-else
                  >
                </div>

                <div class="weui-media-box__bd">
                  <div class="right__item_line">{{good.goodsName}}</div>
                  <div class="right__item_line">
                    <label class="line__label">价格：</label>
                    <span class="price">￥{{good.goodsPrice}}</span>
                  </div>
                  <div class="right__item_line">
                    <div class="weui-flex">
                      <div class="weui-flex__item">
                        <label class="line__label">数量：</label>
                        <span class="line__quantity">{{good.quantity}}</span>
                        <span class="line__quantity_plus" v-if="good.plus">+&nbsp;{{good.plus}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="weui-flex" style="border-bottom:1px solid #eee;">
                <div class="weui-flex__item">
                  <a class="weui-form-preview__btn" @click="plusQuantity(good.goodsId)">+</a>
                </div>
                <div class="weui-flex__item">
                  <a
                    class="weui-form-preview__btn"
                    @click="minusQuantity(good.goodsId)"
                    v-if="good.plus"
                  >-</a>
                </div>

              </div>
            </div>
          </div>
          <div v-else class="weui-panel__bd">
            <p style="text-align:center;">--</p>
          </div>
        </div>
      </div>
    </div>

    <div class="__ft" @click="confirmAdd()">确认本次操作</div>

    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':showActionsheet}">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text">选择新增商品</p>
      </div>
      <div class="weui-actionsheet__menu" v-if="notInGoods.length">
        <div
          class="weui-actionsheet__cell"
          v-for="g in notInGoods"
          :key="g.id"
          @click="addTo(g)"
        >{{g.name}}</div>
      </div>
      <div class="weui-actionsheet__menu" v-else>
        <div class="weui-actionsheet__cell">没有多余商品</div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" @click="showActionsheet=false">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getProductGoodsList,
  getNotInProductInventoryGoods,
  saveProductGoods
} from "@/api/merchant";

export default {
  name: "configGoods",
  data() {
    return {
      productInventoryId: "",
      currentIdx: 1,
      currentConfig: {},
      currentGoods: [],
      configs: [],
      showActionsheet: false,
      notInGoods: []
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
      if (data) {
        this.configs = data;
        if (this.configs[this.currentIdx].goods) {
          this.currentConfig = this.configs[this.currentIdx];
          this.currentGoods = this.currentConfig.goods;
        }
      }
      console.log("configs", this.configs);
    },
    changeGird(g) {
      this.currentGoods = [];
      this.currentIdx = g;
      this.currentConfig = this.configs[g];
      this.currentGoods = this.currentConfig.goods;
    },
    async addGoods() {
      console.log("新增商品");
      const d = await getNotInProductInventoryGoods(
        this.productInventoryId
      ).catch(e => {
        console.log(e);
      });
      console.log("d", d);

      if (d) {
        this.notInGoods = d;
      }
      this.showActionsheet = true;
    },
    addTo(g) {
      console.log("g", g);

      this.currentGoods.push({
        goodsId: g.id,
        goodsName: g.name,
        goodsPrice: g.sellingPrice,
        quantity: 0
      });
      let list = [];
      this.notInGoods.forEach((item, idx, arr) => {
        if (item.id != g.id) {
          list.push(item);
        }
      });
      this.notInGoods = list;
      this.showActionsheet = false;
    },
    plusQuantity(goodsId) {
      let list = new Array();
      this.currentGoods.forEach((item, idx, arr) => {
        if (item.goodsId == goodsId) {
          if (!item.plus) {
            item.plus = 1;
          } else {
            item.plus += 1;
          }
        }
        list.push(item);
      });
      this.currentGoods = list;
    },
    minusQuantity(goodsId) {
      console.log("-", goodsId);

      let list = new Array();
      this.currentGoods.forEach((item, idx, arr) => {
        if (item.goodsId == goodsId) {
          console.log("--");
          if (item.plus && item.plus > 0) {
            item.plus = item.plus - 1;
          }
        }
        list.push(item);
      });
      this.currentGoods = list;
    },
    async confirmAdd() {
      let list = [];
      for (let key in this.configs) {
        console.log("key:", key);
        const ls = this.configs[key].goods;
        console.log(ls);

        if (ls) {
          ls.forEach((item, idx, arr) => {
            let plus = item.plus | 0;
            list.push({
              id: item.goodsId + "",
              idx: key,
              quantity: Number(item.quantity) + plus
            });
          });
        }
      }
      console.log("list", list);
      const d = await saveProductGoods({
        productInventoryId: this.productInventoryId,
        goods: list
      }).catch(e => console.log(e));

      console.log(d);
      if (d) {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style type="text/css">
.left {
  width: 100px;
  padding-top: 15px;
}

.left > .left-item {
  padding-left: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 18px;
  font-size: 18px;
  font-weight: bold;
}

.left > .active {
  background-color: #eee;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

.right__item_line {
  padding-left: 5px;
}
.line__label {
  font-size: 14px;
  color: #000;
}

.right__item_line > .price {
  font-size: 12px;
  color: orangered;
}

.line__quantity {
  font-size: 12px;
  color: orange;
}

.line__quantity_plus {
  padding-left: 10px;
  font-size: 13px;
  color: green;
}

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
