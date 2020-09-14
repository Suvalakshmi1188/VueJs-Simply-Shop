<template>
  <div>
    <div class="row">

      <div class="col-xs-12 col-sm-2"><br />
        <img  :src="stocks.url"/><br><br>
        <label for="Quantity">
          <b>Quantity:</b>
        </label>
        <input 
            type="text" 
            v-model.number="quantity"
            :disabled= "stocks.qty == 0"/> <br /><br />
      </div>

      <div class="col-xs-12 col-sm-4">
        <div  class="col">
          <h3>
            <i><u>{{ stocks.name }}</u></i>
          </h3>
          <p v-html="stocks.des"></p><br>
        </div>
        <div class="err">
          <small v-if="stocks.qty == 0"><b>Sorry! no more stock available</b></small>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6" id="add">
          <button 
             class="btn btn-success"
             @click="addtoCart"
             :disabled= "quantity <= 0 || !Number.isInteger(quantity) || quantity > stocks.qty">
             {{ success }}
          </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    props: ['stocks'],
    data() {
        return {
            quantity: 0,
            success: 'Add to Cart'
        };
    },
    methods: {
        addtoCart() {
            const order = {
                stockId: this.stocks.id,
                stockQty: this.quantity
            };
            //console.log(order);
            this.$store.dispatch('addtocart', order);
            this.$store.dispatch('removestock', order);
            this.quantity = 0;
            setTimeout(() => {
              this.success = 'Added Successfully';
            },10);
            
            setTimeout(() => {
              this.success = 'Add to Cart';
            },800);
        }
    }
}
</script>


<style scoped>

.col {
  height: 180px;
}

.err {
  margin-left: -30px;
}

#add {
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
  margin-left: 35px;
}

input {
  width: 40px;
}

small {
  color: red;
}

</style>