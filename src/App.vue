<template>
  <div class="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>
