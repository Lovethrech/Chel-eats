<script setup>
import OnBoardingText from "@/components/OnBoardingText.vue";
import OnBoardingBtn from "@/components/OnBoardingBtn.vue";
</script>

<style scoped>
.on-boarding-content-main-ctn{
    background-color: rgb(255, 255, 255);
    width:60%;
    height:95vh;
    display:flex;
    place-items: end;
    justify-content: center;
}
.on-boarding-content-ctn{
    width:90%;
    height:70%;
    border-top-left-radius: 450px;
    padding:0 6vw;
}
</style>

<template>
    <div class="on-boarding-content-main-ctn">
        <div class="on-boarding-content-ctn">
            <OnBoardingText/>
            <br><br>
            <OnBoardingBtn/>
        </div>
    </div>
</template>