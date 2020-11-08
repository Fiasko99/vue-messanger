<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper";
export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
</style>
