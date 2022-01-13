<template>
  <div class="food-detail">
    <div class="container">
      <div class="row my-3">
        <div class="col">
          <img src="../assets/img/pp.jpg" alt="" />
        </div>
        <div class="col">
          <h1>{{ job.judul }}</h1>
          <h4>{{ job.Tempat }}</h4>
        </div>
        <hr class="my-4" />
        <div class="row text-center">
          <p>{{ job.deskripsi }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailJob",
  data() {
    return {
      job: {},
    };
  },
  methods: {
    setJob(data) {
      this.job = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/alljob/" + this.$route.params.id)
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

<style scoped>
/* img {
  width: 50%;
} */
</style>
