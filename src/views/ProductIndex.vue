<template>
  <div>
    <div v-for="recommendation in recommendations" v-bind:key="recommendation.id">
      <div>
        <div v-for="item in recommendation.product" v-bind:key="item.id">
          <img v-bind:src="item.image_url" />
          {{ item.name }}
          <br />
          {{ item.brand }}
          <br />
          {{ item.description }}
          <br />
          {{ item.available_at }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import { defineComponent } from '@vue/composition-api'

export default {
  data: function () {
    return {
      products: [],
      recommendations: [],
    };
  },
  created: function () {
    this.indexProduct();
    this.userRecommendations();
  },
  methods: {
    indexProduct: function () {
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    userRecommendations: function () {
      axios.get("/users_answers").then((response) => {
        console.log(response.data);
        this.recommendations = response.data;
      });
    },
  },
};
</script>
<style>
img {
  border: 1px solid #ddd;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>
