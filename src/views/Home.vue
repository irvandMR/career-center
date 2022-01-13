<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="welcome text-center my-3">
            <h5>WELCOME</h5>
            <p>We are pleased to welcome you as part of family, here at University Career Center. We would like to inform you that our site is in progress to its perfectness. Feel free to explore and gain the benefits from our features.</p>
          </div>
          <div class="row">
            <h1 class="mb-4">Job Vacancy</h1>
            <div class="card my-2" v-for="job in jobs" :key="job.id">
              <CardJob :job="job" />
            </div>
            <div class="col text-center">
              <router-link class="btn btn-outline-secondary rounded-pill my-3 px-5" to="/Vacancy">View All</router-link>
            </div>
          </div>
          <div class="row text-center my-3">
            <h1 class="mb-4">News</h1>
            <div class="col-md" v-for="info in infos" :key="info.id">
              <CardNews :info="info" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <Carousel />
          <Sak />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel.vue";
import CardJob from "../components/CardJob.vue";
import Sak from "../components/Sak.vue";
import CardNews from "../components/CardNews.vue";
import axios from "axios";

export default {
  name: "Home",
  props: ["info"],
  components: {
    Carousel,
    CardJob,
    Sak,
    CardNews,
  },
  data() {
    return {
      jobs: [],
      infos: [],
    };
  },
  methods: {
    setJob(data) {
      this.jobs = data;
    },
    setInfo(data) {
      this.infos = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/job")
      .then((response) =>
        // handle success
        this.setJob(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
    axios
      .get("http://localhost:3000/info")
      .then((response) =>
        // handle success
        this.setInfo(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
};
</script>
