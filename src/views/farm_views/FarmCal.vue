<template>
  <div class="farmnav">
    <h1>CALENDAR</h1>
    <Farm_navbar />
  </div>
  <div id="calendar">test</div>
</template>

<style scoped>
@import url("@/assets/css/FarmUniversal.css");
#calendar {
  margin-top: 3%;
  margin-left: 27%;
  width: 70%;
}
</style>

<script>
import Farm_navbar from "@/components/farm_components/farm_nav.vue";

export default {
  components: {
    Farm_navbar,
  },
};
</script>
