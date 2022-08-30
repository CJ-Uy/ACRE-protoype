<template>
  <div id="farm_nav">
    <router-link id="dashboard" to="/farm/dashboard">Dashboard</router-link>
    <br />
    <router-link id="calendar" to="/farm/calendar">Calendar</router-link>
    <br />
    <router-link id="3D_view" to="/farm/3D-View">3D View</router-link>
    <br />
    <router-link id="inventory" to="/farm/inventory">Inventory</router-link>
    <br />
  </div>
</template>

<script>
export default {
  name: "Farm_navbar",
};
</script>
