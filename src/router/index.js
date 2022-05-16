import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionForm from "../views/QuestionForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/form",
    name: "question",
    component: QuestionForm,
  },
  // {
  //   //path: "/consultation/new",
  //   path: "/question/new",
  //   name: "question-new",
  //   component: QuestionNew,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// var App = {
//   data: function () {
//     return {
//       message: "Hello from Javascript",
//     };
//   },
// };

//Vue.createApp(App).mount("#app");
