<template>
  <header>
    <img id="logo" src="./assets/images/acre_logo.png" alt="ACRE logo" />
    <h1 id="title">{{ this.$store.getters.appName }}</h1>
    <nav>
      <router-link id="home" to="/">Home</router-link> |
      <router-link id="about" to="/about">About</router-link> |
      <router-link id="plant_base" to="/plant_base">Plant Base</router-link> |
      <router-link id="main" to="/farm/dashboard">Farm</router-link> |
      <router-link id="contact" to="/contact">Contact Us</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style scoped>
@import url("assets/css/universal.css");
</style>
