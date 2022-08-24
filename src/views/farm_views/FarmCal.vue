<template>
  <div class="farmnav">
    <h1>CALENDAR</h1>
    <Farm_navbar />
  </div>
  <div id="calendar">
    <Farm_calendar />
  </div>
</template>

<style scoped>
@import url("@/assets/css/FarmUniversal.css");
#calendar {
  position: absolute;
  top: 15%;
  margin-left: 21%;
  width: 70%;
}
</style>

<script>
import Farm_calendar from "@/components/farm_components/farm_calendar.vue";
import Farm_navbar from "@/components/farm_components/farm_nav.vue";

export default {
  components: {
    Farm_navbar,
    Farm_calendar,
  },
};
</script>
