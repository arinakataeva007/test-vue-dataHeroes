<template>
    <div class="cardhero-section">
        <img class="cardhero-section__img" :src="hero.image">
        <div class="cardhero-section__descreption-container">
            <h1 class="descreption-container__title">{{hero.name}}</h1>
            <div class="descreption-container__status-container">
              <div class="descreption-container__status-elipce" :style="getStatusStyle(hero.status)"></div> 
              <p class="descreption-container__status-text">{{hero.status}} - {{hero.species}}</p>
            </div>
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

function getStatusStyle(status){
  switch (status) {
        case 'Alive':
          return { background: 'green' };
        case 'Dead':
          return { background: 'red' };
        default:
          return { background: 'gray' };
    }
}

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
    margin-top: 40px;
}
.cardhero-section__img{
    height: 100%;
    width: 240px;
    border-radius: 10px;
    margin-right: 20px;
}

.descreption-container__location-title, .descreption-container__epicode-title{
  color: rgb(216, 216, 216);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-bottom: -10px;
}
.descreption-container__status-container{
  display: flex;
}

.descreption-container__status-elipce{
  width: 8px;
  height: 8px;
  border-radius: 8px;
}

.descreption-container__status-text{
  margin-top: -7px;
  margin-left: 5px;
}

.descreption-container__title{
  font-size: 28px;
}
</style>