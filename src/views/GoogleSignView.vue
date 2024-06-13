<script setup>
import HomeFoodSection from "@/components/HomeFoodSection.vue";
import GoogleSignContent from "@/components/GoogleSignContent.vue";
</script>

<style scoped>
.google-sign-content-main-ctn {
    background-color: #162114;
    display: flex;

    width: 100%;
    height: 100vh;
    padding: 0;
}

.google-sign-content {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 700px 0 0 0;
}
</style>

<template>
    <div class="google-sign-content-main-ctn">
        <HomeFoodSection />
        <GoogleSignContent class="google-sign-content" />
    </div>
</template>