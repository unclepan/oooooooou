<template>
  <h3 :class="$style.title">
    <slot>条形标题</slot>
  </h3>
</template>

<style lang="scss" module>
.title {
  margin: 20px 0 10px;
  padding: 10px;
  border-left: 3px solid #409eff;
  background: #eeeeee;
  color: #3c3b4a;
}
</style>
