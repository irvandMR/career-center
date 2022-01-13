<template>
  <div class="card mb-3">
    <img src="../assets/img/info.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ info.judul }}</h5>
      <p class="card-text">{{ info.deskripsi }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardEvent",
  props: ["info"],
};
</script>

<style></style>
