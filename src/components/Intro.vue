<style scoped>
.intro-main-ctn{
    background-color: #162114;
    display:flex;
    place-items:center;
    justify-content:center;
}
.intro{
    width:100px;
}

.intro img{
    width:100%;
}
.load-icon{
    width:100%;
    display:flex;
    justify-content:center;
}
.load-icon i{
    font-size:36px;
}
</style>



<template>
    <div class="intro-main-ctn">
        <div class="intro">
            <img src="/Chel logo.svg" alt="Chel Logo"/>
            <div class="load-icon">
                <i class='bx bx-loader-circle bx-spin' ></i>
            </div>
        </div>
    </div>
</template>