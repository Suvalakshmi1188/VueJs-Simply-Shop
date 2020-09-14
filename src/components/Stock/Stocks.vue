<template>
  <div class="container">
    <h1>Stocks</h1>
    <appStock  v-for= "stock in stocks" :stocks="stock"></appStock>
  </div>
</template>

<script>

import stock from './Stock'

export default {

  components: {
    'appStock': stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }

};
</script>

<style scoped>

h1 {
  color:#0099ff;
  margin-left:80px;
  font-family: "Times New Roman";
}

</style>
