<template>
  <HeaderVue />
  <HeaderNavigation />
  <NewsList/>
  <FooterVue />
</template>

<script>
import NewsList from "./components/NewsList.vue";
import HeaderVue from "./components/HeaderVue.vue";
import FooterVue from "./components/FooterVue.vue"
import HeaderNavigation from "./components/HeaderNavigation.vue"

export default {
  name: "App",
  components: {
    NewsList,
    HeaderVue,
    HeaderNavigation,
    FooterVue,
  },
};
</script>


<style>
@import "./styles/reset.scss";

#app {
  font-family: 'Nunito Sans', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 1721px;
  margin: 0 auto;
}

@media screen and (max-width: 1640px) {
  .container {
    width: 1240px;
  }
}

@media screen and (max-width: 1320px) {
  .container {
    width: 1200px;
  }
}

@media screen and (max-width: 1228px) {
  .container {
    width: 900px;
  }
}

@media screen and (max-width: 984px) {
  .container {
    width: 800px;
  }
}

@media screen and (max-width: 876px) {
  .container {
    width: auto;
    margin: 0 40px;
  }
}
</style>
