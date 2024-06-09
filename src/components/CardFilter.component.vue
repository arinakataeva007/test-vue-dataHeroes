<template>
    <select :modelValue="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option value="">All characters</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option }}
      </option>
    </select>

    <select :modelStatus="modelStatus" @change="$emit('update:modelStatus', $event.target.value)">
      <option value="">All status</option>
      <option>Alive</option>
      <option>Dead</option>
      <option>unknown</option>
    </select>
    <button @click="filterHeroes">Select</button>
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
