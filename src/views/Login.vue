<template>
  <div id="usmLogin">
    <div class="page home js_show">
      <div class="page__bd" style="height: 100%;">
        <div class="login-box">
          <form :v-model="userinfo">
            <div class="weui-cells">
              <div class="weui-cell">
                <div class="weui-cell__hd">
                  <label class="weui-label">手机号码</label>
                </div>
                <div class="weui-cell__bd">
                  <input
                    class="weui-input"
                    type="number"
                    pattern="[0-9]*"
                    v-model="userinfo.mobile"
                    placeholder="请输入号码"
                  >
                </div>
              </div>

              <div class="weui-cell">
                <div class="weui-cell__hd">
                  <label class="weui-label">密码</label>
                </div>
                <div class="weui-cell__bd">
                  <input
                    class="weui-input"
                    type="password"
                    v-model="userinfo.password"
                    placeholder="请输入密码"
                  >
                </div>
              </div>
            </div>
          </form>

          <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" @click="doLogin" id="showTooltips">登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexHead from "@/components/IndexHead";
import { login } from "@/api/merchant";
import { setToken } from "@/utils/auth";

export default {
  name: "usmLogin",
  components: {
    IndexHead
  },
  data() {
    return {
      title: "登录",
      userinfo: {}
    };
  },
  methods: {
    doLogin() {
      console.log("userinfo", this.userinfo);
      this.$store.dispatch("Login", this.userinfo).then(ret => {
        console.log("data-->", ret);
        this.$router.push("/");
      });
    }
  }
};
</script>

<style type="text/css">
.login-box {
  margin-top: 150px;
}
</style>
