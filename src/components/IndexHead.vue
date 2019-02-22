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

</style>
