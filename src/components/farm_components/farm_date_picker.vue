<template>
  <div id="farm_date_pick">
    <h2>Date Planted</h2>
    <Datepicker
      v-model="date_planted"
      :format="format"
      :enableTimePicker="false"
      placeholder="Enter Date"
    />
    <div></div>
    <h2>Estimated Yeild Date</h2>
    <input
      v-model="estimated_yeild_date"
      disabled
      placeholder="Enter Date Planted"
    />
  </div>
</template>

<style scoped>
/*TODO style the estimated yeild date to look like the date planted */
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
        let banana_cycle_length = 6; //in months
        let newDate = new Date(this.date_planted);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1 + banana_cycle_length;
        const year = newDate.getFullYear();
        //This if condition checks for when the date is cleared in the date_planted form
        if (day == 1 && month == 7 && year == 1970) {
          return "Enter Date Planted";
        }
        return `${day}/${month}/${year}`;
      },
      set() {},
    },
  },
};
</script>
