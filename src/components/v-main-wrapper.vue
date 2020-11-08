<template>
  <div class="v-main-wrapper">
    <vHeader />
    <router-view></router-view>
    <vButtonNav />
  </div>
</template>

<script>
import vHeader from "./layouts/v-header";
import vButtonNav from "./layouts/v-button-nav.vue";
export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vButtonNav
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {}
}
</script>

<style>

</style>