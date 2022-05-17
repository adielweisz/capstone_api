<script>
export default {
  data: function () {
    return {
      message: "Welcome to Artistry Assist!",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <body class="home-bg">
    <div class="home">
      <h1>{{ message }}</h1>
    </div>
  </body>
</template>

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
  letter-spacing: 1px;
  font-weight: bold;
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
