<template>
    <div class="pagesBtn">
        <button class="prev btn" @click="prevPage" :disabled="info.prev === null"><</button>
        <button class="next btn" @click="nextPage" :disabled="info.next === null">></button>
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

<style scoped>
.pagesBtn{
    display: flex;
    margin-left: 394px;
    justify-content: space-between;
    width: 300px;
    margin-top: 20px;
}
.btn{
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    width: 145px;
    padding: 5px;
    background: rgb(196, 196, 196);
    font-size: 20px;
}
</style>