<template>
  <nav>
    <h1>INVENTORY</h1>
    <Farm_navbar />
  </nav>
</template>

<style scoped>
@import url("@/assets/css/farm_css/FarmInventory.css");
</style>

<script>
import Farm_navbar from "@/components/farm_components/farm_nav.vue";
export default {
  components: {
    Farm_navbar,
  },
};
</script>
