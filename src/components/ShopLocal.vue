<script setup></script>

<template>
    <div class="shop-local-section">
         <div class="shop-local-wrapper">
             <div class="shop-local-left">
                <img src="https://plus.unsplash.com/premium_photo-1664908509010-6f1b7841ab54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="">
            </div>
            <div class="shop-local-right">
                <div class="shop-local-content-wrapper">
                    <h2 class="shop-local-right-heading">Shop Local</h2>
                    <p>We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.</p>
                    <p>That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.</p>

                    <p>But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p>

                    <p>-------</p>
                    <div class="shop-local-bottom-text">
                        <p class="name">Jane & John Doe<br/></p>
                        <span>Acme Outdoor</span>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<style>
.shop-local-section{
    width: 100%;
    padding: 0 80px;
    margin: 50px 0;
}
.shop-local-wrapper{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: end;
}
.shop-local-left{
    width: 30%;
    position: absolute;
    left: 0;
    top: 30px;
}
.shop-local-left img{
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
}
.shop-local-right{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    height: 100%;
    color: white;
    border-radius: 10px;
}
.shop-local-right .shop-local-content-wrapper{
    padding: 30px 0;
    width: 40%;
}
.shop-local-right .shop-local-content-wrapper h2{
    font-size: 40px;
    margin-bottom: 20px;
}
.shop-local-right .shop-local-content-wrapper p{
    margin: 20px 0;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
}
.shop-local-right .shop-local-content-wrapper .shop-local-bottom-text p{
    margin: 20px 0 10px 0;
}

@media screen and (max-width: 480px){
    .shop-local-section{
        padding: 0;
    }
    .shop-local-wrapper{
       display: block;
       position: static;
    }
    .shop-local-left{
        position: static;
        width: 100%;
    }
    .shop-local-left img{
        border-radius: 0;
    }
    .shop-local-right{
        width: 100%;
        border-radius: 0;
    }
    .shop-local-right .shop-local-content-wrapper{
        width: 100%;
        padding: 30px 20px;
    }
}
</style>