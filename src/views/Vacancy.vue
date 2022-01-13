<template>
  <div class="container">
    <div class="career-search mb-60">
      <form action="#" class="career-form mb-60">
        <div class="row d-md-flex align-items-center justify-content-between">
          <div class="col-md col-lg my-3">
            <div class="input-group position-relative">
              <input v-model="search" type="text" class="form-control" placeholder="Web,UI,Tech,...." aria-label="Web,UI,Tech,...." aria-describedby="basic-addon1" @keyup="searchJob" />
            </div>
          </div>
          <div class="col-md col-lg my-3">
            <div class="input-group position-relative">
              <input v-model="place" type="text" class="form-control" placeholder="Jakarta" aria-label="Web,UI,Tech,...." aria-describedby="basic-addon1" @keyup="searchPlace" />
            </div>
          </div>

          <div class="col-md-6 col-lg-3 my-3">
            <div class="select-container">
              <select class="custom-select">
                <option value="FH">Full Time</option>
                <option value="PT">Part Time</option>
                <option value="IN">Internship</option>
              </select>
            </div>
          </div>
          <!-- <div class="d-grid gap-2 col-md col-lg my-3 mx-auto">
            <button type="button" class="btn btn-lg btn-light" id="contact-submit">Search</button>
          </div> -->
        </div>
      </form>
      <!-- <div class="filter-result">
        <p class="mb-30 ff-montserrat">Total Job Openings : 89</p>
      </div> -->

      <div class="row my-3 mb-30 d-md-flex align-items-center justify-content-between">
        <div class="card col-md-6" v-for="job in jobs" :key="job.id">
          <CardJob :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardJob from "../components/CardJob.vue";
import axios from "axios";
export default {
  name: "Vacancy",
  components: {
    CardJob,
  },
  data() {
    return {
      jobs: [],
      search: "",
      place: "",
    };
  },
  methods: {
    setJob(data) {
      this.jobs = data;
    },
    searchJob() {
      axios
        .get("http://localhost:3000/alljob?judul_like=" + this.search)
        .then((response) =>
          // handle success
          this.setJob(response.data)
        )
        .catch((error) =>
          // handle error
          console.log(error)
        );
    },
    searchPlace() {
      axios
        .get("http://localhost:3000/alljob?Tempat_like=" + this.place)
        .then((response) =>
          // handle success
          this.setJob(response.data)
        )
        .catch((error) =>
          // handle error
          console.log(error)
        );
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/alljob")
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
.career-form {
  background-color: #eedec4;
  border-radius: 5px;
  padding: 0 16px;
}

.career-form .form-control {
  background-color: rgba(255, 255, 255, 0.3);
  border: 0;
  padding: 12px 15px;
  color: gray;
}

.career-form .form-control::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: gray;
}

.career-form .form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: gray;
}

.career-form .form-control:-ms-input-placeholder {
  /* IE 10+ */
  color: gray;
}

.career-form .form-control:-moz-placeholder {
  /* Firefox 18- */
  color: gray;
}

.career-form .custom-select {
  background-color: rgba(255, 255, 255, 0.3);
  border: 0;
  padding: 12px 15px;
  color: gray;
  width: 100%;
  border-radius: 5px;
  text-align: left;
  height: auto;
  background-image: none;
}

.career-form .custom-select:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  color: gray;
}

.career-form .select-container .selected {
  position: relative;
  color: gray;
}

.career-form .select-container:before {
  position: absolute;
  right: 15px;
  top: calc(50% - 14px);
  font-size: 18px;
  color: gray;
}

.filter-result .job-box {
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.3);
  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
  padding: 10px 35px;
}
</style>
