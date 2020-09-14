<template>
    <div>
        <router-link to="/cart">
        <span class="fa-stack pull-right" @click="cartclicked">
            <i class="fa fa-shopping-cart fa-stack-2x"></i>
            <i class="fa fa-circle fa-stack-1x" style="color:tomato;"></i>
            <strong class="fa-stack-1x num" style="color:white;" id="num">{{ cartcount }}</strong>
        </span>
        </router-link>
        
        <router-link to="/">
        <button 
            v-if="displaycart"
            type="button" 
            class= "btn btn-primary pull-right" 
            @click="goback">Back
        </button>
        </router-link>

        <h2 class="nav justify-content-center">Simply Shop</h2>
        
    </div>
</template>

<script>

  export default {
    data() {
        return {
            displaycart: false
        };
    },
    computed: {
        cartcount() {
            return this.$store.getters.counter;
        }
    },
    methods: {
        cartclicked() {
            return this.displaycart = true;
        },
        goback() {
            return this.displaycart = false;
        }
    }
};
</script>

<style scoped>
    div {
        background-color: rgb(212, 195, 41);
        height: 80px;
    }

    h2 {
        
        font-size: 40px;
        color: rgb(245, 108, 55);
        text-shadow: 2px 2px black;
        padding: 10px 0px 10px 0px;
    }

    .fa-shopping-cart:hover {
        color: violet;
    }

    .fa-stack {
        font-size: 25px;
        color: slateblue;
        margin: 10px 20px 0px 0px;
    }

    .fa-circle {
        left: 40%;
        bottom: 30%;
    }

    .num {
        left: 40%;
        bottom: 30%;
        font-size: 15px;
    }

    button {
        margin: 20px 20px 0px 0px;
    }

</style>