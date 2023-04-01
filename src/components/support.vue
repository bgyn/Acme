<script setup></script>

<template>
  <div class="support-section">
    <div class="container">
      <div class="support-top-wrapper">
        <div class="support-top-left">
          <div class="support-top-detail-text">
            <p>ways to support</p>
          </div>
          <div class="support-top-heading">
            <h1>support Acme Outdoors.</h1>
          </div>
        </div>
        <div class="support-top-right">
          <p>
            COVID-19 has forced us to close our retail space, but we need
            support from patrons like yourself now more than ever. Below, we’ve
            listed the best ways to help us through this season.
          </p>
        </div>
      </div>
      <div class="support-bottom-wrapper">
        <div class="support-column">
          <div class="support-square">
            <div class="support-square-number">01</div>
            <div class="support-square-text">Shop Product</div>
            <img
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
              alt="Circle Decoration in Shop Products Block"
              class="support-square-image circle"
            />
          </div>
          <p>
            Our full product line is still available online here on our site!
            Getting outside and hiking is still something you can do. Get your
            gear now!
          </p>
        </div>
        <div class="support-column">
          <div class="support-square">
            <div class="support-square-number">02</div>
            <div class="support-square-text">Donate</div>
            <img
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
              alt="Triangle Decoration in Donate Block"
              class="support-square-image triangle"
            />
          </div>
          <p>
            Since we've changed the way we operate to online only, and to ensure
            your safety, not all our staff is working. Donate to keep them
            afloat.
          </p>
        </div>
        <div class="support-column">
          <div class="support-square">
            <div class="support-square-number">03</div>
            <div class="support-square-text">Buy Gift Cards</div>
            <img
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
              alt="Rectangle Decoration in Buy Gift Cards Block"
              class="support-square-image rectangle"
            />
          </div>
          <p>
            Have all the outdoor gear you need for now? Buy a gift card and use
            it later or share it with friends and family.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.support-section {
  width: 100%;
  padding: 0 80px;
}
.support-section .container {
  margin: 50px 0;
}
.container .support-top-wrapper {
  display: flex;
  justify-content: center;
}
.support-top-left {
  width: 50%;
}
.support-top-right {
  width: 50%;
}
.support-top-left .support-top-detail-text p {
  font-size: 18px;
  text-transform: uppercase;
}
.support-top-left .support-top-heading h1 {
  font-size: 40px;
  text-transform: capitalize;
}
.support-top-right p {
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 22px;
}
.support-bottom-wrapper {
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
}
.support-bottom-wrapper .support-column {
  width: 30%;
  position: relative;
}
.support-column .support-square {
  background-color: var(--alert-bg);
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
}
.support-square .support-square-number {
  color: white;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 20px;
}
.support-square .support-square-text {
  display: flex;
  justify-content: center;
  color: white;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
}
.support-square .support-square-image {
  position: absolute;
  bottom: -60px;
  right: -35px;
}
.support-square .circle {
  width: 140px;
}
.support-square .rectangle {
  width: 100px;
}
.support-column p {
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 20px;
}

@media screen and (max-width: 480px) {
  .support-section {
    padding: 0 20px;
  }
  .container .support-top-wrapper {
    flex-wrap: wrap;
  }
  .support-top-left {
    width: 100%;
  }
  .support-top-right {
    width: 100%;
    margin-top: 20px;
  }
  .support-bottom-wrapper {
    flex-direction: column;
  }
  .support-bottom-wrapper .support-column {
    width: 100%;
    margin: 20px 0;
  }
}
</style>
