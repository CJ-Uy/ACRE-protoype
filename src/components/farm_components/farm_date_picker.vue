<template>
  <Datepicker v-model="date"></Datepicker>
</template>

<style scoped></style>

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
