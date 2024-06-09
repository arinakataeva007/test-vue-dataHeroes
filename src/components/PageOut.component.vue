<template>
    <div>
        <button @click="prevPage" :disabled="info.prev === null">Prev</button>
        <button @click="nextPage" :disabled="info.next === null">Next</button>
    </div>
</template>

<script>
export default{
    props:{
        info:{
            type: Object
        }
    },
    methods: {
        prevPage() {
            this.$emit('change-page', this.info.prev);
        },
        nextPage() {
            this.$emit('change-page', this.info.next);
        },
    },
}
</script>