<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Intro from "@/components/Intro.vue";
import HomeContent from "@/components/HomeContent.vue";

const showComponent = ref(true)
let timeoutId = null

onMounted(() => {
  timeoutId = setTimeout(() => {
    showComponent.value = false
  }, 5000) // 5 seconds
})

onUnmounted(() => {
  clearTimeout(timeoutId)
});
</script>

<style scoped>
.intro{
  width:100%;
  height:100vh;
}
</style>

<template>
  <!-- <Intro class="intro" v-if="showComponent"/> -->
  <main>
    <Intro class="intro" v-if="showComponent"/>
    <HomeContent v-else/>
  </main>
</template>
