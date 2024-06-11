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
            
            
        </div>
    </div>
</template>