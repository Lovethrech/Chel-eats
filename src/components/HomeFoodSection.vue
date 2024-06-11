<script setup>
import FoodSection from "@/components/FoodSection.vue";
import ShadowOverlay from "@/components/ShadowOverlay.vue";
</script>

<style scoped>
.home-food-section-main-ctn{
    width:60%;
    height:100%;
}

.home-food-section-ctn{
    width:100%;
    height:100%;
}
</style>

<template>
    <div class="home-food-section-main-ctn">
        <div class="home-food-section-ctn">
`           <FoodSection/>
        </div>
    </div>
</template>