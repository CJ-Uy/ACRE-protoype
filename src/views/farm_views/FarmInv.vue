<template>
  <div class="farmnav">
    <h1>INVENTORY</h1>
    <Farm_navbar />
  </div>
</template>

<style scoped>
@import url("@/assets/css/FarmUniversal.css");
</style>

<script>
import Farm_navbar from "@/components/farm_components/farm_nav.vue";
export default {
  components: {
    Farm_navbar,
  },
};
</script>
