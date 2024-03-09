<template>
  <article class="cocktail">
    <img :src="props.image" alt="" class="cocktail__img" />
    <div class="cocktail__recipe">
      <div class="cocktail__recipe-name">
        <img
          :src="props.isWideName ? nameIconWide : nameIcon"
          alt=""
          class="cocktail__recipe-img"
        />
        <h2 class="cocktail__recipe-title">{{ props.name }}</h2>
      </div>
      <ul class="cocktail__ingredients">
        <li
          v-for="ingredient in props.ingredients"
          class="cocktail__ingredient"
        >
          <span class="cocktail__ingredient-value">{{ ingredient.value }}</span>
          <span class="cocktail__ingredient-name">{{ ingredient.name }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import type { Cocktail } from "../types/index.types";
import nameIcon from "../assets/icons/name.svg";
import nameIconWide from "../assets/icons/name-wide.svg";

const props = defineProps<Cocktail>();
</script>

<style>
.cocktail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
}

.cocktail:nth-last-child(1) {
  margin-bottom: 0px;
}

.cocktail__img {
  border-radius: 13px;
  width: 600px;
}

.cocktail__recipe {
  display: flex;
  flex-direction: column;
}

.cocktail__recipe-name {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  position: relative;
  margin-bottom: 25px;
}

.cocktail__recipe-title {
  width: 98%;
  margin: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 37px;
  color: #fff;
}

.cocktail__recipe-title--empty {
  color: #f04902;
}

.cocktail__ingredients {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cocktail__ingredient {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cocktail__ingredient:nth-last-child(1) {
  margin-bottom: 0px;
}

.cocktail__ingredient-value {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #ab8c6d;
  margin-right: 15px;
}

.cocktail__ingredient-name {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
}

@media (max-width: 992px) {
  .cocktail__img {
    width: 400px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .cocktail--day {
    flex-direction: column;
    grid-gap: 60px;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .cocktail {
    flex-direction: column;
  }

  .cocktail--day {
    grid-gap: 0px;
  }

  .cocktail__img {
    width: 100%;
    margin-bottom: 60px;
  }
}
</style>
