<template>
  <nav
    fixed="top"
    toggleable="lg"
    type="dark"
    class="flex"
    :class="{ scrolled }"
  >
    <Logo />
    <!-- NOTE lg is 1024px and NOT the required 991px - customize this! -->
    <div
      class="flex pl-[100px] lg:bg-[#212a4be6] -lg:mt-[9px] lg:w-full lg:py-0 px-4 -lg:mt-0 lg:z-199 lg:border-transparent lg:border-none lg:bg-transparent-90 lg:after:hidden justify-between items-center leading-[1.875]"
    >
      <!-- HJÆLP Collapse i div? -->
      <div class="pl-[100px]"></div>
      <div class="inline-block float-right pr-8 relative z-1">
        <a href="#" class="color-[#fff] p-4 relative z-2"></a>
        <div
          class="content-none w-full h-full bg-[#212a4be6] transform -skew-x-45 -skew-y-0 absolute -right-[100px] top-0 z-0"
        ></div>
      </div>
      <div class="collapse bg-[#212a4ae6] z-10 pt-[50px] pb-2.5 h-auto"></div>
    </div>
  </nav>
</template>

<style>
nav {
  transition: all 1s ease-out;
  height: 60px;
  line-height: 60px;
}
nav .nav-container {
  padding-left: 100px;
}
nav .right-bg {
  display: inline-block;
  float: right;
  padding-right: 2em;
  position: relative;
  z-index: 1;
}
nav .right-bg a {
  color: white;
  padding: 1em;
  position: relative;
  z-index: 2;
}
nav .right-bg:after {
  content: "";
  width: 1000%;
  height: 100%;
  background: rgba(33, 42, 75, 0.9);
  -webkit-transform: skew(-45deg, 0deg);
  transform: skew(-45deg, 0deg);
  position: absolute;
  right: -100px;
  top: 0;
  z-index: 0;
}
@media (max-width: 991px) {
  nav {
    padding: 0.5rem 0px !important;
  }
  nav .nav-container {
    background: #212a4a e6;
    margin-top: -9px;
    width: 100%;
    padding: 0rem 1rem !important;
  }
  nav .nav-container .collapse {
    background: rgba(33, 42, 75, 0.2);
    z-index: 10;
  }
  nav .navbar-toggler {
    margin-top: 0px;
    z-index: 199;
    border-color: transparent;
    border: none;
  }
  nav .nav-container.show {
    background: transparent;
  }
  nav .right-bg:after {
    display: none;
  }
}
nav.scrolled .navbar-brand {
  padding-top: 10px;
  padding-bottom: 10px;
}
nav.scrolled .navbar-brand img {
  height: 40px;
}
nav.scrolled .navbar-brand:after {
  left: -120%;
  width: 260%;
}
.navbar .navbar-collapse {
  transition: all 0.2s ease-out;
  padding-top: 0.5rem;
  padding-bottom: 0.3125rem;
}
@media (max-width: 600px) {
  .navbar .navbar-collapse a {
    font-size: 20px !important;
  }
}
.navbar-brand {
  height: auto;
  z-index: 100;
  padding-top: 50px;
  padding-bottom: 10px;
  padding-right: 50px;
  transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
}
.navbar-brand img {
  transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
  height: 80px;
}
.navbar-brand:after {
  content: "";
  width: 260%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  transform: skew(-45deg, 0deg);
  position: absolute;
  left: -120%;
  top: 0;
  z-index: -10;
}
@media (max-width: 1200px) {
  .navbar-brand {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .navbar-brand img {
    height: 40px;
  }
  .navbar-brand:after {
    left: -120%;
    width: 260%;
  }
}
.nav-item {
  padding: 0 1.2rem;
}
.navbar a.nav-link {
  transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.8) !important;
  position: relative;
  display: block;
}
@media (min-width: 991px) {
  .navbar a.nav-link:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    top: -6px;
    left: 0;
    background: white;
    transform: translateY(0px);
    transition: transform 0.2s ease-out;
  }
  .navbar a.nav-link:hover:after,
  .navbar a.nav-link.active:after {
    transform: translateY(5px);
  }
}
@media (max-width: 1040px) {
  .navbar a.nav-link {
    font-size: 13px;
  }
  .navbar a.nav-link:after {
    top: -8px;
  }
}
</style>

<script>
import Logo from "~/components/Logo.vue";
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    if (process.client) this.handleScroll();
  },

  methods: {
    handleScroll() {
      this.scrolled = $nuxt.$route.name != "index" || window.scrollY > 0;
    },
  },
  watch: {
    $route(to, from) {
      this.handleScroll();
    },
  },
  created() {
    if (process.client) window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    if (process.client) window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    Logo,
  },
};
</script>
