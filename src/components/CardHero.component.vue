<template>
    <div class="cardhero-section">
        <img class="cardhero-section__img" :src="hero.image">
        <div class="cardhero-section__descreption-container">
            <h1 class="descreption-container__title">{{hero.name}}</h1>
            <div class="descreption-container__status-elipce"></div>
            <p class="descreption-container__status-text">{{hero.status}} - {{hero.species}}</p>
            <p class="descreption-container__location-title">Last known location:</p>
            <p class="descreption-container__location-parag">{{hero.location.name}}</p>
            <p class="descreption-container__epicode-title">First seen in:</p>
            <p class="descreption-container__episode-parag">{{ firstSeenEpisode}}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  hero: {
    type: Object,
    required: true,
  },
});

const firstSeenEpisode = ref('');

const getFirstEpisode = async () => {
  try {
    const response = await axios.get(props.hero.episode[0]);
    firstSeenEpisode.value = response.data.name;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(getFirstEpisode);
</script>

<style scoped>
.cardhero-section{
    display: flex;
    flex-direction: row;
    width: 473px;
    height: 283px;
    border-radius: 10px;
    background: rgb(81, 73, 73);
    color: #FFFF;
}
.cardhero-section__img{
    height: 100%;
    width: 240px;
    border-radius: 10px;
    margin-right: 20px;
}
</style>