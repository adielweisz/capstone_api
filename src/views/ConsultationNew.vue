<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newConsultationParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createConsultation: function () {
      axios
        .post("/Consulations", this.newConsultationParams)
        .then((response) => {
          console.log("consultations create", response);
          this.$router.push("/consultaions");
        })
        .catch((error) => {
          console.log("consultations create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="consultation-new">
    <h1>New Consultation</h1>
    <form v-on:submit.prevent="createConsultation()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newConsultationParams.name" />
      Width:
      <input type="text" v-model="newConsultationParams.width" />
      Height:
      <input type="text" v-model="newConsultationParams.height" />
      Url:
      <input type="text" v-model="newConsultationParams.url" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
