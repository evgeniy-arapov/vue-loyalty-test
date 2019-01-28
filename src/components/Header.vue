<template>
  <b-navbar type="light" variant="light" toggleable sticky>
    <div class="text-right">
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse" class="text-center">
        <b-navbar-nav class="row">
          <b-nav-item class="col" href="#">Home</b-nav-item>
          <b-nav-item class="col" href="#">About us</b-nav-item>
          <b-nav-item class="col" href="#">Contact us</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
    <div>
      <slick
        ref="slick"
        :options="slickOptions">
        <img v-for="(image, index) in sliderImages" alt="slider image" :src="image" :key="index">
      </slick>
    </div>
  </b-navbar>
</template>

<script>
  import Vue from "vue"
  import { Navbar } from "bootstrap-vue/es/components"
  import Slick from "vue-slick"
  import { mapState } from "vuex"

  Vue.use(Navbar)

  export default {
    components: {Slick},
    data () {
      return {
        slickOptions: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [{
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        }
      }
    },
    computed: {
      ...mapState(["sliderImages"])
    }
  }
</script>

<style lang="scss">
  @import "../../node_modules/slick-carousel/slick/slick.css";
  @import "../../node_modules/slick-carousel/slick/slick-theme.css";

  .navbar {
    display: block !important;

    .navbar-nav {
      width: 100%;
    }

  }

  .slick-slider {
    .slick-prev {
      left: 0;
    }

    .slick-next {
      right: 0;
    }

    .slick-prev, .slick-next {
      z-index: 1;
      width: 50px;
      height: 50px;

      &:before {
        font-size: 50px;
      }
    }

    .slick-slide {
      padding: 5px;

      img {
        max-width: 100%;
      }
    }
  }
</style>
