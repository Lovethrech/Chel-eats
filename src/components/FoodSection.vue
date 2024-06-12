<style scoped>
.food-section-main-ctn{
}
.food-section-ctn{
}
.nav-ctn{
    display:flex;
    justify-content:space-between;
}
.menu-ctn{
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
    background-color: white;
    color: black;
    border-radius: 0 10px 10px 0;
}
</style>



<template>
    <div class="food-section-main-ctn">
        <div class="food-section-ctn">
            <div class="nav-ctn">
                <div class="menu-ctn">
                    <i class='bx bxs-category'></i>
                </div>
                <div class="history-ctn">
                    <i class='bx bx-history'></i>
                    <p>History</p>
                </div>
            </div>
            <div class="hero-food-slide-bg">
                <div class="left-arrow-ctn">
                    <i class='bx bx-chevron-left'></i>
                </div>
                <div class="hero-food">
                    <img src="/Cold-Stone-Creamery-1.png" alt=" Three Cold stone creamery"/>
                </div>
                <div class="right-arrow-ctn">
                    <i class='bx bx-chevron-right'></i>
                </div>
            </div>

        </div>
    </div>
</template>