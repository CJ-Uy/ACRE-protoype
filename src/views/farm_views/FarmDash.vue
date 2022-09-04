<template>
  <div class="farmnav">
    <h1>DASHBOARD</h1>
    <Farm_navbar />
  </div>
  <div class="test">
    <!--BUG something not right here -->
    <h1>{{ this.$store.getters.bananaPrice }}</h1>
    <br />
    <button @click="getBananPrice">Get Price</button>
  </div>
</template>

<style scoped>
@import url("@/assets/css/FarmUniversal.css");
.test {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>

<script>
import Farm_navbar from "@/components/farm_components/farm_nav.vue";
export default {
  components: {
    Farm_navbar,
  },
  methods: {
    getBananPrice: function () {
      console.log("Hey");
      this.$store.dispatch("setBananaPrice");
    },
  },
};
</script>
