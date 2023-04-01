<script setup>
</script>

<template>
<div class="hero-section">
    <div class="hero-wrapper">
        <div class="hero-heading">
            <h1>Serving you since 1989</h1>
        </div>
        <div class="hero-paragraph">
            <p>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
            
        </div>
        <div class="hero-button">
            <a href="#">Shop Merch</a>
        </div>
    </div>
</div>
</template>

<style>
.hero-section{
    width: 100%;
    background-image: url('https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    height: calc(100vh - 140px);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 0 80px;
}
.hero-wrapper{
    width: 380px;
}
.hero-wrapper .hero-heading h1{
    color: white;
    font-size: 60px;
    letter-spacing: 1px;
    line-height: 70px;
}
.hero-wrapper .hero-paragraph{
    margin: 10px 0 35px 0;
}
.hero-wrapper .hero-paragraph p{
    color: white;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
}
.hero-wrapper .hero-button{
    border: 1px solid white;
    display: inline;
    padding: 8px 20px;
    border-radius: 5px;
    outline: none;
    transition: all ease-in .4s;
}
.hero-wrapper .hero-button a{
    color: white;
    font-weight: bold;
    transition: all ease-in .4s;
}
.hero-wrapper .hero-button:hover{
    background-color: white;
}
.hero-wrapper .hero-button:hover a{
    color: black;
}

@media screen and (max-width: 480px) {
    .hero-section{
        align-items: end;
        padding: 0 20px;
    }
    .hero-wrapper{
        width: 250px;
        margin-bottom: 50px;
    }
    .hero-wrapper .hero-heading h1{
        font-size: 30px;
        line-height: 40px;
    }
    .hero-wrapper .hero-paragraph {
        margin: 5px 0 20px 0;
    }
    .hero-wrapper .hero-paragraph p{
        font-size: 14px;
        line-height: 20px;
    }
}
</style>