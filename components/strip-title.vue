<template>
  <div :class="$style['strip-title']">
    <h3 :class="$style.title">
      <slot>条形标题</slot>
    </h3>
    <div :class="$style.more">
      <slot name="more"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
.strip-title {
  margin: 20px 0 10px;
  padding: 10px;
  border-left: 3px solid #409eff;
  background: #ebeef5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    padding: 0;
    margin: 0;
    color: #3c3b4a;
  }
  .more {
    font-size: 12px;
    color: #aaaaaa;
    a {
      color: #aaaaaa;
    }
  }
}
</style>
