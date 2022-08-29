<template>
  <div id="farm_date_pick">
    <h2>Date Planted</h2>
    <Datepicker v-model="date" />
    <h1></h1>
    <h2>Estimated Date Yeild</h2>
    <Datepicker v-model="date" />
  </div>
</template>

<style scoped>
#farm_date_pick{
  display: grid;
  place-items: center;
  text-align: left;
  gap: 20px;
  grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
} #farm_date_pick h2 {
  color: var(--green);
}
</style>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },
};
</script>
