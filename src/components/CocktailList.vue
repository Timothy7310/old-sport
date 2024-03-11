<template>
  <div class="list">
    <Cocktail
      v-for="cocktail in cocktailFiltred"
      :image="cocktail.image"
      :name="cocktail.name"
      :is-wide-name="cocktail.isWideName"
      :is-cocktail-of-day="cocktail.isCocktailOfDay"
      :ingredients="cocktail.ingredients"
    />
  </div>
</template>

<script lang="ts" setup>
import { cocktails } from "@/data/cocktails";
import Cocktail from "@/components/Cocktail.vue";

const cocktailFiltred = cocktails.filter((x) => !x.isCocktailOfDay);
</script>

<style>
.list {
  display: grid;
  gap: 90px;
}
</style>
