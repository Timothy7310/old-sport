<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <img
          :src="angelsLeft"
          alt="Cute Angels"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          class="header__img aos-init aos-animate"
        />
        <div class="header__text">
          <h1 class="header__title">Old Sport</h1>
          <span class="header__subtitle">Speakeasy Bar</span>
        </div>
        <img
          :src="angelsRight"
          alt="Cute Angels"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          class="header__img aos-init aos-animate"
        />
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import angelsLeft from "../assets/header/angels-left.png";
import angelsRight from "../assets/header/angels-right.png";
</script>
<style>
.header {
  padding: 80px 0px 80px 0px;
}
.header__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__img {
  width: 220px;
}
.header__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header__title {
  font-style: normal;
  font-weight: normal;
  font-size: 155px;
  line-height: 220px;
  color: #f04902;
  margin: 0;
}
.header__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 44px;
  color: #fff;
  text-transform: uppercase;
}

@media (max-width: 1200px) {
  .header__title {
    font-size: 98px;
    line-height: 120px;
  }
  .header__subtitle {
    font-size: 20px;
  }
}

@media (max-width: 992px) {
  .header__img {
    width: 155px;
  }
  .header__title {
    font-size: 80px;
    line-height: 100px;
  }
  .header__subtitle {
    font-size: 19px;
  }
}

@media (max-width: 767px) {
  .header__img {
    width: 140px;
  }
  .header__title {
    font-size: 68px;
    line-height: 82px;
  }
  .header__subtitle {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .header__img {
    width: 25%;
  }
  .header__title {
    font-size: calc(1em + 7.7vw);
    line-height: 35px;
    margin-bottom: 15px;
  }
  .header__subtitle {
    font-size: calc(0.1em + 3vw);
    line-height: 27px;
  }
}
</style>
