<template>
  <router-link class="router" :to="'/vacancy/' + job.id">
    <div class="row mt-2">
      <img src="../assets/img/pp.jpg" class="img art mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex" alt="..." />

      <div class="col-md">
        <div class="card-md-body job-content">
          <h5 class="card-title mb-4">{{ job.judul }}</h5>
          <p>
            <small>
              <cite title="Source Title">{{ job.kantor }}</cite></small
            ><br />
            <small
              ><cite title="Source Title">{{ job.Tempat }}</cite></small
            >
          </p>
        </div>
      </div>
      <div class="col-md-2">
        <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardJob",
  props: ["job"],
};
</script>

<style scoped>
.img {
  width: 120px;
  height: 100px;
  /* text-align: center; */
}
.router {
  text-decoration: none;
}

.router .job-content p {
  color: black;
}
.router .job-content h5 {
  color: #ca965c;
}
</style>
