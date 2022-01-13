<template>
  <div class="container">
    <div class="row text-center">
      <h1 class="mb-4">News Gunadarma</h1>
      <div class="col-md" v-for="info in infos" :key="info.id">
        <CardNews :info="info" />
      </div>
    </div>
  </div>
</template>

<script>
import CardNews from "../components/CardNews.vue";
import axios from "axios";
export default {
  name: "News",

  components: {
    CardNews,
  },
  data() {
    return {
      infos: [],
    };
  },
  methods: {
    setJob(data) {
      this.infos = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/info")
      .then((response) =>
        // handle success
        this.setJob(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
};
</script>

<style>
img {
  height: 300px;
}
</style>
