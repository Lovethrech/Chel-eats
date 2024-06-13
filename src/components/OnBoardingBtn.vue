<script setup>
import OnBoardLists from "@/data/OnBoardLists.json";
</script>


<style scoped>
.on-boarding-btn-main-ctn {
    color: black;
}

.on-boarding-btn-ctn {

}

.link-box-ctn{
    font-size:22px;
    letter-spacing: 15px;
    display:flex;
    justify-content: center;
    margin:20px 0;
    width:100%;
    border:2px solid black;
}
.link{
    width:80%;
    text-decoration: none;
    color:black;
    display:flex;
    justify-content:left;
    gap:20px;
    padding:10px;
}
.link-box-ctn:hover, .link:hover{
    cursor:pointer;
    color: white;
    background-color: black;
    transform:scaleX(0.98);
    transition: all .4s;
}
</style>

<template>
    <div class="on-boarding-btn-main-ctn">
        <div class="on-boarding-btn-ctn">
            <div class="link-box-ctn" v-for="OnBoardList in OnBoardLists" :key="OnBoardList.id">
                <RouterLink :to="OnBoardList.link" class="link">
                    <div class="link-icon" v-html="OnBoardList.icon"></div>
                    <p class="link-name">{{OnBoardList.name}}</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>