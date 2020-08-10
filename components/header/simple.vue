<template>
  <article :class="$style.header">
    <header>
      <nuxt-link to="/">
        <img
          :class="$style['site-logo']"
          src="~/assets/images/logo-01.png"
          alt="logo"
        />
      </nuxt-link>
      <span>
        <slot></slot>
      </span>
    </header>
  </article>
</template>

<style lang="scss" module>
.header {
  min-width: 1024px;
  color: #666666;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  header {
    margin: 0 auto;
    padding: 10px 0;
    width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .site-logo {
      display: inline-block;
      width: 106px;
    }
  }
}
</style>
