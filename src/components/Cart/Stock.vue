<template>
  <div>
    <div class="row">

      <div class="col-xs-12 col-sm-2"><br />
        <img  :src="stocks.url"/><br><br>
        <label for="Quantity">
          <b>Quantity ({{stocks.qty}}):</b>
        </label>
        <input 
            type="text" 
            v-model.number="quantity"
            />
            <br /><br />
      </div>

      <div class="col-xs-12 col-sm-4">
        <h3>
          <i><u>{{ stocks.name }}</u></i>
        </h3>
        <p v-html="stocks.des"></p>
      </div>

      <div class="col-xs-12 col-sm-6" id="remove">
        <button 
            class="btn btn-danger"
            @click="removefromCart"
            :disabled= "quantity <= 0 || !Number.isInteger(quantity) || quantity > stocks.qty">Remove from Cart</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: ['stocks'],
    data() {
        return {
            quantity: 0
        };
    },
    methods: {
      removefromCart() {
        const order = {
              stockId: this.stocks.id,
              stockQty: this.quantity
        };
        this.$store.dispatch('removefromcart', order);
        this.$store.dispatch('addstock', order);
        this.quantity = 0;
      }
    }
}
</script>

<style scoped>
#remove {
  padding-top: 120px;
}

p {
  padding-top: 20px;
}

img {
  height: 170px;
  width: 170px;
  margin-left: 30px;
  border: 1px solid grey;
}

h3 {
  color: #ff3399;
  margin-left: 40px;
  margin-top: 40px;
}

label {
  color: #996633;
  margin-left: 10px;
}

input {
  width: 40px;
}

</style>

