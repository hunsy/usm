<template>
  <div class="indexHead">
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="back">&lt;</div>
      </div>
      <div class="weui-flex__item">
        <div class="title">{{title}}</div>
      </div>
      <div class="weui-flex__item">
        <!-- <div class="placeholder">weui</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexHead",
  props: {
    isIndex: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "标题"
    }
  }
};
</script>

<style type="text/css">
.indexHead {
  height: 60px;
  background-color: #99ccff;
}
.weui-flex {
  height: 100%;
  padding: 0px;
  margin: 0px;
}
.weui-flex__item {
  line-height: 60px;
}
.back {
  text-align: left;
  padding-left: 16px;
  color: gray;
  font-size: 16px;
}

.title {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
}
</style>
