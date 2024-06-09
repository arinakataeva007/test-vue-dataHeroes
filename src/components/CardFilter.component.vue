<template>
    <select class="filter-name" :modelValue="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option value="">All characters</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option }}
      </option>
    </select>

    <select class="filter-status" :modelStatus="modelStatus" @change="$emit('update:modelStatus', $event.target.value)">
      <option value="">All status</option>
      <option>Alive</option>
      <option>Dead</option>
      <option>unknown</option>
    </select>
    <button class="filter-btn" @click="filterHeroes">Select</button>
</template>
  

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    modelStatus:{
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits:['update:modelValue', 'update:modelStatus'],
  methods: {
    filterHeroes(){
        this.$emit('filter-heroes', this.modelValue ,this.modelStatus);
    }
  },
}
</script>

<style scoped>
.filter-name{
  box-sizing: border-box;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  width: 293px;
  padding: 10px;
  background: rgb(196, 196, 196);
  margin-right: 5px;
  color: #FFFF;
}

.filter-status{
  box-sizing: border-box;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  width: 145px;
  padding: 10px;
  background: rgb(196, 196, 196);
  margin-right: 25px;
  color: #FFFF;
}

.filter-btn{
  box-sizing: border-box;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  width: 145px;
  padding: 10px;
  background: rgb(196, 196, 196);
  color: #FFFF;
}
</style>