<template>
  <p :class="$style.more" @click="$emit('more')">加载更多</p>
</template>
<style lang="scss" module>
.more {
  margin: 20px auto 0;
  width: 120px;
  padding: 10px;
  font-size: 14px;
  color: #95a6d0;
  border: 1px solid #95a6d0;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: #666666;
    border: 1px solid #666666;
    background: #ffffff;
  }
}
</style>
