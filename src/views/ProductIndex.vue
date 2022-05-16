<script>
import axios from "axios";
// import { defineComponent } from '@vue/composition-api'

export default {
  data: function () {
    return {
      product: {},
    };
  },
  created: function(){
    this.indexProduct();
  },
  methods: {
    indexProduct: function () {
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.product = response.data;

      }
    }
},
};
</script>
