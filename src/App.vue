<template>
  <NavbarPage></NavbarPage>
  <router-view />
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue";

export default {
  components: {
    NavbarPage,
  },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
