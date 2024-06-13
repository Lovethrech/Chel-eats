<script setup>
import { ref, watch } from "vue";

const gMail = ref("");
const displayBtn = ref(false);

watch(gMail, (newValue) => {
    displayBtn.value = newValue !== null && newValue !== "";
});
</script>

<style scoped>
.on-boarding-content-main-ctn {
    background-color: rgb(255, 255, 255);
    width: 60%;
    height: 95vh;
    display: flex;
    flex-direction:column;
    place-items: end;
    justify-content:end;
}
.on-boarding-content-ctn {
    color:black;
    width: 90%;
    height: 70%;
    border-top-left-radius: 450px;
    padding: 0 6vw;
}
.home-btn-ctn{
    font-size: 32px;
}
.link{
    color:black;
    padding:0;
    margin:0;
}
.title, .desc, .email-ctn{
    margin: 0 10px;
}
.title{
    margin-top:-10px;
    font-size:24px;
    font-weight:600;
}
.desc{
    color:#aba0a0;
}
.email-ctn input::placeholder{
    color:#aba0a0;
}
.email-ctn, .email-ctn input{
    width:100%;
    font-size:20px;
    border:0; 
}
.email-ctn{
    border-bottom:2px solid black;
}
.submit-link{
    background: #280d0d;
    color:white;
    padding:10px 0;
    font-size: 22px;
    font-weight:600;
    letter-spacing: 0.5vw;
    width: 100%;
    text-align:center;
}
</style>

<template>
    <div class="on-boarding-content-main-ctn">
        <div class="on-boarding-content-ctn">
            
            <div class="home-btn-ctn">
                <RouterLink to="/" class="link">
                    <i class='bx bx-chevron-left'></i>
                </RouterLink> 
            </div>
            
            <h3 class="title">Let's get started with your email:</h3>
            <p class="desc">*Indicate required field</p>
            <br><br><br>
            <div class="email-ctn">
                <input v-model="gMail" type="email" name="email" placeholder="*Email"/>
            </div>
        </div>
        <RouterLink to="/" class="submit-link" v-show="displayBtn">Continue</RouterLink>
    </div>
</template>