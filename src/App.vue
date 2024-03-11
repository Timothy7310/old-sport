<script setup lang="ts">
import Header from "@/components/Header.vue";
import CocktailList from "@/components/CocktailList.vue";
import CocktailOfDayList from "@/components/CocktailOfDayList.vue";
</script>

<template>
  <Header />
  <main class="main">
    <div class="container">
      <div class="main__wrap">
        <CocktailOfDayList />
        <CocktailList />
      </div>
    </div>
  </main>
</template>

<style>
.container {
  max-width: 1346px;
  margin: 0px auto;
}

.main {
  padding: 0px 40px 100px 40px;
}

@media (max-width: 1200px) {
  .container {
    width: 960px;
  }
  .main {
    padding: 0px 0px 100px 0px;
  }
}

@media (max-width: 992px) {
  .container {
    width: 700px;
  }
}

@media (max-width: 767px) {
  .container {
    width: 550px;
  }
}

@media (max-width: 576px) {
  .container {
    width: 90%;
  }
}
</style>
