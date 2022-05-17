<template>
  <body class="form-bg">
    <div class="white">
      <form>
        <label>What is your face shape?</label>
        <br />
        <select v-model="answers[0].answer1">
          <option value="0">Choose Option</option>
          <option value="12">Round Shape</option>
          <option value="13">Oval Shape</option>
          <option value="14">Square Shape</option>
          <option value="15">Heart Shape</option>
          <option value="16">Diamond Shape</option>
          <option value="17">Rectangle Shape</option>
        </select>

        <br />
        <label>Which celebrity does your skin tone most closely match?</label>
        <select v-model="answers[1].answer2">
          <option value="0">Choose Option</option>
          <option value="18">Elle Fanning</option>
          <option value="19">Jessica Beil</option>
          <option value="20">Lucy Liu</option>
          <option value="22">Mila Kunis</option>
          <option value="25">Jessica Alba</option>
          <option value="26">Beyonce</option>
          <option value="28">Mindy Kahling</option>
          <option value="29">Jennifer Hudson</option>
        </select>

        <br />
        <label>What skin issue do you struggle with most?</label>
        <select v-model="answers[2].answer3">
          <option value="0">Choose Option</option>
          <option value="30">Acne-I can't seem to get rid of my pimples</option>
          <option value="31">Dryness-My skin feels tight after a shower and becomes irritated easily</option>
          <option value="33">Oily-My skin looks shiney and feels oily after a whole day.</option>
          <option value="34">Combination-My skin feels dry, but oil collects in certain places.</option>
          <option value="35">Reddness-I have persistant reddness in certain areas</option>
          <option value="37">Noticably large pores and blackheads</option>
        </select>

        <br />
        <label>Do you prefer a more natural or glam look?</label>
        <select v-model="answers[3].answer4">
          <option value="0">Choose Option</option>
          <option value="38">Natural- I just want to minimally enhance my features</option>
          <option value="39">Glam-I love going all out</option>
        </select>

        <br />
        <label>What colors do you reach for when picking out blushes and lipsticks?</label>
        <select v-model="answers[4].answer5">
          <option value="0">Choose Option</option>
          <option value="40">Pinks-I like just a hint of color</option>
          <option value="41">Reds-I like vibrant shades</option>
          <option value="42">Nudes-I like subtle shades that blend with my coloring</option>
        </select>

        <br />
        <label>Do you prefer a matte or shine-finish?</label>
        <select v-model="answers[5].answer6">
          <option value="0">Choose Option</option>
          <option value="45">Matte-no glazed donuts for me</option>
          <option value="46">Shine-I love to glow</option>
        </select>

        <br />
        <label>How much time do you have for a beauty routine in the beginning and end of your day?</label>
        <select v-model="answers[6].answer7">
          <option value="0">Choose Option</option>
          <option value="47">5-10-I live on the edge</option>
          <option value="48">10-20-I'm willing to put some time into it.</option>
          <option value="49">20-40-Everyday is an interview day.</option>
        </select>

        <br />
        <label>Do you prefer best-budget or high-end products?</label>
        <select v-model="answers[7].answer8">
          <option value="0">Choose Option</option>
          <option value="50">Budget-I don't care about the brand</option>
          <option value="51">High-end-I like using fancy products.</option>
        </select>

        <br />
        <label>What eye makeup technique would you like to perfect?</label>
        <select v-model="answers[8].answer9">
          <option value="0">Choose Option</option>
          <option value="52">Eyeliner for my eyeshape</option>
          <option value="53">Eyeshadow- colors and techniques that work for my eyes.</option>
          <option value="54">Party look- I want to shake things up.</option>
        </select>

        <br />
        <label>What is an issue with your current makeup routine that you want to resolve?</label>
        <select v-model="answers[9].answer10">
          <option value="0">Choose Option</option>
          <option value="56">I want to learn the basics that work for me</option>
          <option value="57">I'm bored with what I know - I want to take it to the next level</option>
          <option value="58">I want to learn how to create a Smokey Eye</option>
          <option value="59">I want to learn how to create a Cat Eye</option>
          <option value="60">I want to learn how to have my makeup last longer</option>
          <option value="61">I want to learn how to contour my face</option>
        </select>
        <button type="submit" v-on:click.prevent="submit()">Submit Form</button>
      </form>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newQuestionParams: {},
      answers: [
        {
          questionId: 1,
          answer1: "0",
        },
        {
          questionId: 2,
          answer2: "0",
        },
        {
          questionId: 3,
          answer3: "0",
        },
        {
          questionId: 4,
          answer4: "0",
        },
        {
          questionId: 5,
          answer5: "0",
        },
        {
          questionId: 6,
          answer6: "0",
        },
        {
          questionId: 7,
          answer7: "0",
        },
        {
          questionId: 8,
          answer8: "0",
        },
        {
          questionId: 9,
          answer9: "0",
        },
        {
          questionId: 10,
          answer10: "0",
        },
      ],
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createQuestion: function () {
      axios
        .post("/Questions", this.newQuestionParams)
        .then((response) => {
          console.log("questions create", response);
        })
        .catch((error) => {
          console.log("questions create error", error.response);
          this.errors = error.response.data.errors;
        });
    },

    submit() {
      axios
        .post("/users_answers", { answers: this.answers })
        .then((response) => {
          console.log(response);
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  background: rgba(255, 255, 255, 0) !important; /*  30% opaque white */
  padding: 40px;
  border-radius: 10px;
}
label {
  color: rgb(7, 7, 7) !important;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em !important;
  text-transform: uppercase;
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
.form-bg {
  cursor: url("https://i.fbcd.co/products/resized/resized-750-500/023cad937eabae3821a003d401c331df021d696fd84c947c0a4ce4b80f65a795.webp"),
    auto;
  background: url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80");
  min-height: 100%;
  min-width: 100%;
}
.white {
  background: rgba(255, 255, 255, 0.5) /*  30% opaque white */;
}
select option {
  margin: 40px !important;
  background: rgba(0, 0, 0, 0.3) !important;
  color: #fff !important;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4) !important;
}
</style>
