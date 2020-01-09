<template>
  <div :class="$style.root">users-id:{{ $route.params.id }}</div>
</template>

<style lang="scss" module>
.root {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
