<template>
    <div class="cardlist-section">
        <div class="cardlist-section__article">
            <h1 class="article__title">Rick and Morty</h1>
            <CardFilterComponent 
            v-model:modelValue="modelValue"
            v-model:modelStatus="modelStatus"
            :options="heroesName"
            @filter-heroes="filterHeroesByName"
            />
        </div>
        <div class="main">
            <div class="cardlist-section__main" v-for="hero in heroes">
                <CardHeroComponent :hero="hero"/>
            </div>
        </div>
        <PageOutComponent 
        v-model="page"
        :info="info"
        @change-page="changePage"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { getInfoAboutHeroes } from "@/services/getInfoAboutHero.service";

import PageOutComponent from "./PageOut.component.vue";
import CardHeroComponent from "./CardHero.component.vue";
import CardFilterComponent from "./CardFilter.component.vue";

const heroes = ref([]);
const filteredHeroes = ref([]);
const heroesName = ref([]);
const modelValue = ref('');
const modelStatus = ref('');
const info = ref({});

const page = ref('');

onMounted(async () => {
  try {
    const data = await getInfoAboutHeroes('https://rickandmortyapi.com/api/character/?page=1');
    info.value = data.info;
    console.log(info.value);
    heroes.value = data.results;
    filteredHeroes.value = data.results;
    heroesName.value = data.results.map((hero) => hero.name);
    console.log("Heroes names:", heroesName.value);
  } catch (error) {
    console.error("Error fetching hero data:", error);
  }
});

const filterHeroesByName = () => {
  console.log(modelValue.value, modelStatus.value);
  if (modelStatus.value === "" && modelValue.value === "") {
    heroes.value = filteredHeroes.value;
  } else if (modelValue.value !== "" && modelStatus.value === "") {
    heroes.value = filteredHeroes.value.filter((hero) => {
      return hero.name === modelValue.value;
    });
  } else if (modelValue.value === "" && modelStatus.value !== "") {
    heroes.value = filteredHeroes.value.filter((hero) => {
      return hero.status === modelStatus.value;
    });
  } else {
    heroes.value = filteredHeroes.value.filter((hero) => {
      return hero.name === modelValue.value && hero.status === modelStatus.value;
    });
  }
};

const changePage = async (pageUrl) => {
  page.value = pageUrl;
  try {
    const data = await getInfoAboutHeroes(page.value);
    heroes.value = data.results;
    filteredHeroes.value = data.results;
    info.value = data.info;
  } catch (error) {
    console.error("Error fetching hero data:", error);
  }  
};

</script>




<style scoped>
.cardlist-section__article{
    width: 1080px;
    height: 300px;
    background: rgb(196, 196, 196);
    color: #FFFF;
    font-size: 70px;
    padding: 56px 27px 69px 27px;
    text-align: center;
}
.main{
    margin-top: 50px;
    margin-left: 32px;
    display: flex;
    gap: 70px;
    flex-wrap: wrap;
}
</style>