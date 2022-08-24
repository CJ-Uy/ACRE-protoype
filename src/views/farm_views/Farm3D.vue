<template>
  <nav>
    <h1>3D VIEW</h1>
    <Farm_navbar />
  </nav>
</template>

<style scoped>
@import url("@/assets/css/farm_css/Farm3D.css");
</style>

<script>
import Farm_navbar from "@/components/farm_components/farm_nav.vue";
export default {
  components: {
    Farm_navbar,
  },
};
</script>
