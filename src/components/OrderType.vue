<style scoped>
.order-type-main-ctn{
    color:white;
    padding:50px;
}
.order-type-ctn{
    
}
.order-title{
    text-align:center;
    font-size:30px;
}
.order-option-ctn{
    display:flex;
    place-items: center;
    justify-content: center;
    gap:30px;
}
.order-pickup-ctn, .order-delivery-ctn{
    display:flex;
    gap:10px;
    padding:4px 10px;
    border:3px solid white;
    border-radius:30px;

}
.order-pickup-ctn i, .order-delivery-ctn i{
    font-size:22px;
    margin:auto 0;
}
.order-pickup-ctn p, .order-delivery-ctn p{
    margin: auto 0;
}

</style>


<template>
    <div class="order-type-main-ctn">
        <div class="order-type-ctn">
            <p class="order-title">Choose your order type:</p>
            <br/>
            <div class="order-option-ctn">
                <div class="order-pickup-ctn">
                    <i class='bx bxs-shopping-bags'></i>
                    <p>PickUp</p>
                </div>
                <div class="order-delivery-ctn">
                    <i class='bx bxs-cart-alt'></i>
                    <p>Delivery</p>
                </div>
            </div>
        </div>
    </div>
</template>