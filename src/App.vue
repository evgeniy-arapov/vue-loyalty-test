<template>
  <div id="app">
    <Header/>
    <div class="container" style="height: 200vh;"></div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"

  export default {
    name: "app",
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

  body {
    background: url("assets/background70.png") repeat;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
