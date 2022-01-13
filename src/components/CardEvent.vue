<template>
  <div class="card mb-3">
    <img src="../assets/img/event.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ event.judul }}</h5>
      <p class="card-text">{{ event.deskripsi }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardEvent",
  props: ["event"],
};
</script>

<style></style>
