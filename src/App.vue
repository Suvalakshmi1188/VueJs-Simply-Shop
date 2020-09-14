<template>
  <div class=container-fluid>
    <appHeader></appHeader>
    <br>
    <div class="row">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'
import Stocks from './components/Stock/Stocks'
import Cart from './components/Cart/Cart'

export default {
  
  components: {
    'appHeader': Header,
    'appStocks': Stocks,
    'appCart': Cart
},

created() {
  this.$store.dispatch('initStocks');
}

}
</script>

<style>

body {
  margin-top: 10px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

</style>
