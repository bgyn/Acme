<script setup></script>

<template>
  <div class="shop-product-section">
    <div class="shop-product-wrapper">
      <div class="shop-product-top-wrapper">
        <p class="shop-product-top-detail-text">Shop Products</p>
        <h1 class="shop-produdct-top-heading">Open 24/7/365.</h1>
      </div>
      <div class="shop-product-list">
        <div class="list-item">
          <div class="item-wrapper">
            <a href="#" class="shop-item-link-wrapper">
              <img
                src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg"
                alt="item-img"
                class="item-img"
              />
              <div class="shop-detail-wrapper">
                <p class="shop-detail-heading">White Tent</p>
                <p class="shop-detail-price">$ 200.00 USD</p>
                <a href="#" class="shop-detail-button">Detail</a>
              </div>
            </a>
          </div>
          <div class="item-wrapper">
            <a href="#" class="shop-item-link-wrapper">
              <img
                src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg"
                alt="item-img"
                class="item-img"
              />
              <div class="shop-detail-wrapper">
                <p class="shop-detail-heading">White Tent</p>
                <p class="shop-detail-price">$ 200.00 USD</p>
                <a href="#" class="shop-detail-button">Detail</a>
              </div>
            </a>
          </div>
          <div class="item-wrapper">
            <a href="#" class="shop-item-link-wrapper">
              <img
                src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg"
                alt="item-img"
                class="item-img"
              />
              <div class="shop-detail-wrapper">
                <p class="shop-detail-heading">White Tent</p>
                <p class="shop-detail-price">$ 200.00 USD</p>
                <a href="#" class="shop-detail-button">Detail</a>
              </div>
            </a>
          </div>
        </div>
        <div class="button-wrapper">
          <a href="#" class="product-btn">View All Product</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.shop-product-section {
  width: 100%;
  padding: 0 80px;
  margin: 50px 0;
}
.shop-product-wrapper .shop-product-top-wrapper .shop-product-top-detail-text {
  font-size: 18px;
  text-transform: uppercase;
  margin: 10px 0;
}
.shop-product-wrapper .shop-product-top-wrapper .shop-produdct-top-heading {
  font-size: 40px;
  margin-bottom: 30px;
}
.shop-product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-item {
  display: flex;
  gap: 20px;
}
.shop-product-list .list-item-wrapper {
  width: 30%;
}
.item-wrapper .shop-item-link-wrapper .item-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.shop-detail-wrapper {
  text-align: center;
}
.shop-detail-wrapper .shop-detail-heading {
  font-size: 20px;
  color: black;
}
.shop-detail-wrapper .shop-detail-price {
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
}
.shop-detail-wrapper .shop-detail-button {
  background-color: var(--primary-color);
  padding: 8px 35px;
  display: inline-block;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 12px;
  transition: all 0.2s ease-in;
}
.shop-detail-wrapper .shop-detail-button:hover {
  background-color: black;
}
.button-wrapper {
  margin-top: 40px;
}
.button-wrapper .product-btn {
  color: white;
  padding: 10px 35px;
  background-color: black;
  display: inline-block;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 16px;
  transition: all 0.2s ease-in;
}
.button-wrapper .product-btn:hover {
  background-color: var(--primary-color);
}

@media screen and (max-width: 480px) {
  .shop-product-section {
    padding: 0 20px;
  }
  .list-item {
    flex-direction: column;
  }
  .shop-product-list .list-item-wrapper {
    width: 100%;
  }
  .item-wrapper{
    margin: 10px 0;
  }
}
</style>
