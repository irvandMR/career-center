<template>
  <div class="container">
    <div class="row text-center">
      <h1 class="mb-4">Event</h1>
      <div class="col-md" v-for="event in events" :key="event.id">
        <CardEvent :event="event" />
      </div>
    </div>
  </div>
</template>

<script>
import CardEvent from "../components/CardEvent.vue";
import axios from "axios";
export default {
  name: "Event",

  components: {
    CardEvent,
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    setJob(data) {
      this.events = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/event")
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
