<script setup>
import HomeFoodSection from "@/components/HomeFoodSection.vue";
import OnBoardingContent from "@/components/OnBoardingContent.vue";
</script>

<style scoped>
.home-content-main-ctn{
    background-color: #162114;
    display:flex;

    width: 100%;
    height:100vh;
    padding:0;
}
.on-boarding-content{
    position:absolute;
    bottom:0;
    right:0;
    border-radius: 700px 0 0 0;
}
</style>

<template>
    <div class="home-content-main-ctn">
        <HomeFoodSection/>
        <OnBoardingContent class="on-boarding-content"/>
    </div>
</template>