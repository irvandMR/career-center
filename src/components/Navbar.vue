<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-3" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Event" class="nav-link">Event</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/News" class="nav-link">News</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/TracerStudy" class="nav-link">Tracer Study</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Vacancy" class="nav-link">Job Vacancy</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Daftar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Masuk</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
