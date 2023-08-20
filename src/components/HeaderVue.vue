<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <img class="logo__img" alt="logo" src="../assets/logo.svg" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  .container {
    display: flex;
    justify-content: flex-start;
    padding: 40px 0 35px;

    .logo__img {
      width: 152px;
      height: 48px;
    }
  }
}
</style>
