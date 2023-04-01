<script setup>
</script>

<template>
  <div class="menu-wrapper">
    <div class="container">
      <div class="alert-wrapper">
        <div class="alert-bar">Announcement</div>
        <p class="respond-text">How we're responding to COVID-19</p>
      </div>
      <div class="nav-wrapper">
        <div class="brand-wrapper">
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt="ACME"
          />
        </div>
        <div class="nav-cart-wrapper">
          <div class="navigation">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Shop</a>
            <a href="#" class="nav-link">Donate</a>
            <a href="#" class="nav-link">Contact</a>
          </div>
          <div class="cart-wrapper">
            <div class="cart">
              <img
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
              class="cart-icon"
              />
            </div>
            <div class="cart-count">
              <p class="counter">0</p>
            </div>
          </div>
          <div class="mobile-nav-wrapper">
            <div class="hamburger-menu">
              <div class="lines"></div>
              <div class="lines"></div>
              <div class="lines"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.menu-wrapper {
  width: 100%;
  position: sticky;
  top: 0;
  cursor: pointer;
  z-index: 3;
}
.alert-wrapper {
  background-color: var(--alert-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
}
.alert-wrapper .alert-bar {
  background-color: var(--primary-color);
  padding: 8px 15px;
  border-radius: 20px;
  color: white;
  letter-spacing: 1px;
  letter-spacing: 1px;
}
.alert-wrapper .respond-text {
  color: white;
  margin-left: 15px;
  font-size: 16px;
  letter-spacing: 1px;
}
.nav-wrapper {
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 80px;
}
.nav-cart-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.navigation .nav-link {
  text-decoration: none;
  margin: 0 1.5rem;
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: lighter;
  padding: 8px;
  transition: all ease-in-out 0.3s;
  border-radius: 5px;
}
.navigation .nav-link:hover {
  background-color: black;
}
.cart-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
.cart-wrapper .cart {
  background-color: black;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-radius: 5px;
}

.cart-wrapper .cart .cart-icon {
  width: 25px;
}
.cart-wrapper .cart-count {
  position: absolute;
  right: -8px;
  top: -8px;
  background-color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
}
.cart-wrapper .cart-count p {
  color: black;
  font-size: 16px;
}
.mobile-nav-wrapper{
  margin-left: 30px;
  display: none;
}
.mobile-nav-wrapper .hamburger-menu .lines{
  width: 20px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  border-radius: 15px;
}
@media screen and (max-width: 480px){
  .nav-wrapper{
    padding: 0 20px;
  }
  .alert-wrapper{
    flex-direction: column;
  }
  .respond-text{
    margin: 8px 0;
  }
  .mobile-nav-wrapper{
    display: block;
  }
  .navigation{
    display: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 70px;
    background-color: red;
    display: flex;
    flex-direction: column;
  }
  .navigation .nav-link{
    display:inline-block;
  }
}
</style>
