<template>
  <div class="farmnav">
    <h1>CALENDAR</h1>
    <Farm_navbar />
  </div>
  <div class="farm_main">
    <div id="farm_date_picker">
      <Farm_date_picker />
    </div>
    <div id="farm_calendar">
      <Farm_calendar />
    </div>
  </div>
</template>

<style scoped>
@import url("@/assets/css/FarmUniversal.css");
#farm_calendar {
  position: inline-block;
}
#farm_date_picker {
  outline: 2px ssolid green;
  width: 20%;
}
</style>

<script>
import Farm_calendar from "@/components/farm_components/farm_calendar.vue";
import Farm_date_picker from "@/components/farm_components/farm_date_picker.vue";
import Farm_navbar from "@/components/farm_components/farm_nav.vue";

export default {
  components: {
    Farm_navbar,
    Farm_date_picker,
    Farm_calendar,
  },
};
</script>
