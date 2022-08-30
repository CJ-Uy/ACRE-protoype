<template>
  <div id="farm_date_pick">
    <h2>Date Planted</h2>
    <Datepicker
      v-model="date_planted"
      :format="format"
      :enableTimePicker="false"
      placeholder="Enter Date"
    />
    <h1></h1>
    <h2>Estimated Yeild Date</h2>
    <Datepicker
      v-model="estimated_yeild_date"
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
import { ref } from "vue";

export default {
  //TODO show estimated yeild date
  //TODO add date_planted to vuex
  //TODO show them all on calendar component
  setup() {
    const date_planted = ref(new Date());
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    return {
      date_planted,
      format,
    };
  },
  components: { Datepicker },
  data() {
    //Might be important
  },
  methods: {
    //Might later be needed
  },
  computed: {
    //TODO Figure this out
    estimated_yeild_date: {
      get() {
        let banana_cycle_length = 6; //in months
        let newDate = new Date(this.date_planted);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1 + banana_cycle_length;
        const year = newDate.getFullYear();
        return `${day}/${month}/${year}`;
      },
      set() {},
    },
  },
};
</script>
