<template>
  <div class="navigation-cover">
    <img
      class="navigation-banner"
      src="../assets/banner.png"
      alt="Banner Image"
    />
    <div class="navigation">
      <div class="container">
        <p class="navigation__text">Новости</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNavigation",
};
</script>

<style lang="scss" scoped>
.navigation-cover {
  width: 100%;
  height: 320px;
  background: var(--bg-bg-5, #f0f6fe);
  position: relative;
  .navigation-banner {
    max-width: 100%;
    height: 320px;
  }

  .navigation {
    height: 320px;
    position: absolute;
    top: 0;
    width: 100%;

    .container {
      position: relative;
      height: 320px;
    }
    .navigation__text {
      position: absolute;
      bottom: 48px;
      left: 0;
      color: var(--grey-color-black-90, #17171a);

      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 48px */
      letter-spacing: -0.4px;
    }
  }
}

@media screen and (max-width: 1640px) {
  .navigation-cover {
    height: 250px;
    .navigation-banner {
      height: 250px;
    }
    .navigation {
      .container {
        height: 250px;
      }
    }
  }
}

@media screen and (max-width: 1340px) {
  .navigation-cover {
    height: 200px;
    .navigation-banner {
      height: 200px;
    }
    .navigation {
      .container {
        height: 200px;
      }
    }
  }
}

@media screen and (max-width: 1228px) {
  .navigation-cover {
    height: 150px;
    .navigation-banner {
      height: 150px;
    }
    .navigation {
      .container {
        height: 150px;
      }
    }
  }
}
@media screen and (max-width: 880px) {
  .navigation-banner {
    display: none;
  }
}
</style>
