<template>
  <div class="container">
    <h1 v-if="this.$store.getters.counter !== 0">Cart</h1>
    <p v-if="this.$store.getters.counter == 0"><b>Cart is Empty</b></p>
    <appStock  v-for= "stock in stocks" :stocks="stock"></appStock>
  </div>
</template>

<script>

import stock from './Stock'

export default {
  components: {
    appStock: stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stockcart;
    }
  }
}
</script>


<style scoped>

h1 {
  color:#7700ff;
  margin-left:80px;
  font-family: "Times New Roman";
}

p {
  color: red;
  text-align: center;
  font-size: 20px;
  margin-top: 200px;
}

</style>