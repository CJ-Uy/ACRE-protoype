<template>
  <div id="farm_date_pick">
    <h2>Date Planted</h2>
    <Datepicker
      v-model="date_planted"
      :enableTimePicker="false"
      placeholder="Enter Date"
    />
    <div></div>
    <h2>Estimated Yeild Date</h2>
    <Datepicker
      v-model="estimated_yeild_date"
      :enableTimePicker="false"
      disabled
      placeholder="Enter Date Planted"
    />
  </div>
</template>

<style scoped>
#farm_date_pick {
  display: grid;
  place-items: center;
  text-align: left;
  gap: 20px;
  grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
}
#farm_date_pick h2 {
  color: var(--green);
}
</style>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  //TODO show them all on calendar component
  components: { Datepicker },
  data() {
    //
  },
  methods: {
    //Might later be needd
  },
  computed: {
    date_planted: {
      get() {
        return this.$store.state.datePlanted;
      },
      set(value) {
        this.$store.commit("setDatePlanted", value);
      },
    },
    estimated_yeild_date: {
      get() {
        let date = new Date(this.$store.state.estimatedYeildDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        if (
          (day == 1 && month == 1 && year == 1970) ||
          (day == 1 && month == 7 && year == 1970)
        ) {
          return null;
        } else {
          // eslint-disable-next-line prettier/prettier
          return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
      },
      set(value) {
        this.$store.commit("setEstimatedYeildDate", value);
      },
    },
  },
};
</script>
