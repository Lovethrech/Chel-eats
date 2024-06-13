<script setup>
import LogoCtn from "@/components/LogoCtn.vue";
</script>

<style scoped>
.food-section-main-ctn{
    background-color: hsl(0, 0%, 0%,0.2);
    padding: 0 20px 20px;
    border-radius: 0 0 0 250px;
}
.food-section-ctn{
}
.nav-ctn{
    display:flex;
    justify-content:space-between;
    height:4vh;
}
.menu-ctn{
    display:flex;
    place-items:center;
    justify-content:center;
    background-color:white;
    color:black;
    font-size:20px;
    padding:0 10px;
    border-radius:0 20px 20px 0;
}
.history-ctn{
    background-color:white;
    color: black;
    padding: 0 10px;
    display:flex;
    gap:0.2vw;
    font-size:16px;
    font-weight:700;
    border-radius:150px;
}
.history-ctn i{
    margin:auto 0;
}
.history-ctn p{
    margin:auto 0;
}
.hero-food-slide-bg{
    width:100%;
    height:60vh;
    display:flex;
    place-items:center;
    align-items:center;
    justify-content:space-between;
}
.hero-food{
    width: 600px;
}
.hero-food img{
    width:100%;
    height:100%;
}
.left-arrow-ctn, .right-arrow-ctn{
    font-size:40px;
    background-color: rgb(29, 43, 51);
    color: rgb(255, 255, 255);
    border-radius: 0 10px 10px 0;
}
.level-ctn-ctn-main{
    width:100%;
    height:1vh;
    display:flex;
    place-items:center;
    justify-content:center;
}
.level-ctn-ctn{
    background-color: #253722;
    width:40%;
    height:100%;
    border-radius:30px;
}
.level-ctn{
    background-color:white;
    width:20%;
    height:100%;
    border-radius: 30px;
}
</style>



<template>
    <div class="food-section-main-ctn">
        <div class="food-section-ctn">
            <div class="nav-ctn">
                <div class="menu-ctn">
                    <i class='bx bxs-category'></i>
                </div>
                <!-- <LogoCtn /> -->
                <div class="history-ctn">
                    <i class='bx bx-history'></i>
                    <p>History</p>
                </div>
            </div>
            <div class="hero-food-slide-bg">
                <div class="left-arrow-ctn">
                    <!-- <i class='bx bx-chevron-left'></i> -->
                </div>
                <div class="hero-food">
                    <img src="/Cold-Stone-Creamery-1.png" alt=" Three Cold stone creamery" />
                </div>
                <div class="right-arrow-ctn">
                    <i class='bx bx-chevron-right'></i>
                </div>
            </div>
            <div class="level-ctn-ctn-main">
                <div class="level-ctn-ctn">
                    <div class="level-ctn"></div>
                </div>
            </div>
        </div>
    </div>
</template>