<script setup></script>

<template> 
<div class="safe-section">
    <div class="container">
        <div class="safe-section-wrapper">
            <div class="safe-top-header">
                <h1>How we're keeping you<br/> safe during COVID-19</h1>
            </div>
            <div class="safe-paragraph">
                As an outdoor shop, we’ve taken precautionary<br/> measures to ensure the safety of all our<br/> customers and team members.
            </div>
            <div class="safe-button">
                <a href="#" class="btn">Read Our Statment</a>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.safe-section{
    width: 100%;
    background-image: url('https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    height: calc(100vh - 140px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.safe-section-wrapper {
    text-align: end;
}
.safe-section-wrapper .safe-top-header{
    font-size: 20px;
    color: white;
    font-weight: bolder;
    letter-spacing: 1px;
}
.safe-section-wrapper .safe-paragraph{
    color: white;
    margin: 20px 0;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 20px;
}
.safe-section-wrapper .safe-button .btn{
    color: black;
    background-color: white;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
    border-radius: 10px;
}


</style>