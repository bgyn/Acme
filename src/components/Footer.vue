<script setup></script>

<template>
  <div class="footer-section">
    <div class="footer-wrapper">
      <div class="brand">
        <a href="#"
          ><img
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
}
.social-media-wrapper{
  display: flex;
  gap: 10px;
}
.social-media-wrapper .social-link img{
  width: 50px;
}
</style>
