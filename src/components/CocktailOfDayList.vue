<template>
  <div class="day-menu__outer">
    <div class="day-menu">
      <h2 class="day-menu__title">
        Cocktails <br class="day-menu__title--br" />
        of day
      </h2>
      <Cocktail
        v-for="cocktail in cocktailFiltred"
        :image="cocktail.image"
        :name="cocktail.name"
        :is-wide-name="cocktail.isWideName"
        :is-cocktail-of-day="cocktail.isCocktailOfDay"
        :ingredients="cocktail.ingredients"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cocktails } from "../data/cocktails";
import Cocktail from "./Cocktail.vue";

const cocktailFiltred = cocktails.filter((x) => x.isCocktailOfDay);
</script>

<style>
.day-menu {
  padding: 20px;
  border: 20px solid #826d3d;
  border-image-source: url("@/assets/day-menu/day-pattern.jpg");
  border-image-slice: 20 22;
  border-image-repeat: round;
}
.day-menu__title {
  font-size: 68px;
  text-align: center;
  background-image: url("@/assets/day-menu/day-pattern.jpg");
  background-repeat: repeat;
  margin: 0px;
  background-clip: text;
  color: transparent;
  margin-bottom: 20px;
}
.day-menu__title--br {
  display: none;
}
.day-menu__outer {
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 90px;
}
@media (max-width: 767px) {
  .day-menu__title--br {
    display: block;
  }
}
@media (max-width: 576px) {
  .day-menu__title--br {
    display: none;
  }
}
@media (max-width: 480px) {
  .day-menu__title {
    font-size: 36px;
  }
}
</style>
