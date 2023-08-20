<template>
  <footer class="footer">
    <div class="container">
      <a href="/" class="logo">
        <img class="logo__img" alt="logo" src="../assets/logo.svg" />
      </a>
      <p class="footer__copyright">© alpha, 2023</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--bg-bg-5, #F0F6FE);
  .container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 64px 0;
    .logo__img {
      width: 112px;
      height: 36px;
    }
    .footer__copyright {
      margin-top: 16px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; 
    }
  }
}
</style>
