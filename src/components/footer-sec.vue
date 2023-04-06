<script setup>
</script>

<template>
  <div class="footer-section">
    <div class="footer-wrapper">
      <div class="brand">
        <a href="#">
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt="ACME"
        /></a>
      </div>
      <div class="social-media-wrapper">
        <div class="instagram social-link">
          <a href="#"><img src="instagram.png" alt="instagram" /></a>
        </div>
        <div class="facebook social-link"><img src="facebook.png" alt="facebook" /></div>
        <div class="twitter social-link"><img src="twitter.png" alt="twitter" /></div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-section {
  width: 100%;
  background-color: #222222;
  padding: 0 80px;
  height: 25vh;
}
.footer-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.social-media-wrapper{
  display: flex;
  gap: 20px;
}
.social-media-wrapper .social-link img{
  width: 40px;
}

@media screen and (max-width: 480px){
  .footer-section{
    padding: 0 20px;
  }
  .footer-wrapper .brand{
    margin: 20px 0;
  }
  .footer-wrapper{
    flex-direction: column;
    justify-content: center;
  }
}
</style>