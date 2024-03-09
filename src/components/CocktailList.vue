<template>
  <Cocktail
    v-for="cocktail in cocktailFiltred"
    :image="cocktail.image"
    :name="cocktail.name"
    :is-wide-name="cocktail.isWideName"
    :is-cocktail-of-day="cocktail.isCocktailOfDay"
    :ingredients="cocktail.ingredients"
  />
</template>

<script lang="ts" setup>
import { cocktails } from "../data/cocktails";
import Cocktail from "./Cocktail.vue";

const cocktailFiltred = cocktails.filter((x) => !x.isCocktailOfDay);
</script>

<style></style>
