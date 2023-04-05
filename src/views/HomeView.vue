<script setup>
import navmenu from './../components/NavMenu.vue';
import herosection from './../components/hero.vue';
import supports from './../components/support.vue';
import SafeSection from './../components/SafeSection.vue';
</script>

<template>
  <navmenu></navmenu>

  <herosection></herosection>

  <supports></supports>

  <SafeSection></SafeSection>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Sen', sans-serif;
}
:root{
  --primary-color : #EB5757;
  --alert-bg: #222222;  
}
</style>