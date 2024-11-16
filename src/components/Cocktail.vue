<template>
  <article class="cocktail">
    <img :src="image" alt="" class="cocktail__img" />
    <div class="cocktail__recipe">
      <div class="cocktail__recipe-name">
        <img
          :src="isWideName ? nameIconWide : nameIcon"
          alt=""
          class="cocktail__recipe-img"
        />
        <h3 class="cocktail__recipe-title">{{ name }}</h3>
      </div>
      <ul class="cocktail__ingredients">
        <li v-for="ingredient in ingredients" class="cocktail__ingredient">
          <span class="cocktail__ingredient-value">{{ ingredient.value }}</span>
          <span class="cocktail__ingredient-name">{{ ingredient.name }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Cocktail } from "@/types/index.types";
import nameIcon from "@/assets/icons/name.svg";
import nameIconWide from "@/assets/icons/name-wide.svg";

defineProps<Cocktail>();
</script>

<style>
.cocktail {
  display: flex;
  justify-content: space-between;
  gap: 10px;
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
  gap: 25px;
}

.cocktail__recipe-name {
  align-self: center;
  position: relative;
}

.cocktail__recipe-title {
  width: 98%;
  margin: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 400;
  font-size: 25px;
  line-height: 37px;
  color: var(--white-color);
}

.cocktail__recipe-title--empty {
  color: var(--warning-color);
}

.cocktail__ingredients {
  display: grid;
  gap: 10px;
}

.cocktail__ingredient {
  display: flex;
  justify-content: space-between;
}

.cocktail__ingredient-value {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: var(--accent-color);
  margin-right: 15px;
}

.cocktail__ingredient-name {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: var(--white-color);
}

@media (max-width: 992px) {
  .cocktail__img {
    width: 400px;
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
    gap: 60px;
  }

  .cocktail--day {
    grid-gap: 0px;
  }

  .cocktail__img {
    width: 100%;
  }
}
</style>
