<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <img
      src="https://i.fbcd.co/products/resized/resized-750-500/023cad937eabae3821a003d401c331df021d696fd84c947c0a4ce4b80f65a795.webp"
      style="width: 70px"
    />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/">Home</a>
        <a class="nav-item nav-link" href="/form">Form</a>
        <a class="nav-item nav-link" href="/about">About</a>
      </div>
    </div>
  </nav>
  <router-view />
  <footer style="width: auto; background-color: #ecd5b8">
    <div>
      <h1>Adiel Artistry</h1>
    </div>
  </footer>
</template>
<script>
// import QuestionForm from "./components/QuestionForm.vue";
// import QuestionForm from "./views/QuestionForm.vue";

export default {
  name: "App",
  // components: { QuestionForm },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ecd5b8;
  /* margin-top: 60px; */
}
body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.home-bg {
  background: url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80");
  min-height: 100%;
  min-width: 100%;
  padding-bottom: 800px;
  font-family: "Water Brush", cursive;
  font-size: 50px;
  color: black;
}
nav {
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
footer h1 {
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-top: 20px;
}
</style>
