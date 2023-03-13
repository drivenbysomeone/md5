<template>
  <!-- Navbar is implemented already ONCE in Navbar.vue -->
  <div>
    <!-- SECTION HERO -->
    <section class="relative lg:h-[80vh] h-full">
      <!-- Slideshow arrows -->
      <div class="relative slide text-5xl">
        <!-- Slide arrows  -->
      </div>
      <div class="carousel-inner">
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
        >
          <div
            class="h-[80vh] bg-cover"
            :style="`background-image:url(${img})`"
          >
            ``
          </div>
          <!-- <img class="" :src="img" alt="First slide" /> -->

          <!-- Arrow left -->
          <div
            @click="sliderPrev()"
            class="absolute top-1/2 left-4 border-x-[22px] border-x-transparent border-b-[22px] border-b-[#212a4b] -rotate-90 cursor-pointer"
          ></div>
          <!-- Arrow right -->
          <div
            @click="sliderNext()"
            class="absolute top-1/2 right-4 border-x-[22px] border-x-transparent border-b-[22px] border-b-[#212a4b] rotate-90 border-opacity-80 cursor-pointer"
          ></div>
          <div
            class="absolute top-1/3 left-20 text-white font-semibold text-5xl uppercase text-left w-2/3"
          >
            Total Leverandør indenfor rusrfti rørbearbejdning
            <p class="pt-6 m-0"></p>
            <Button contact>
              <span class="skew-x-[40deg] inline-block font-semibold text-base"
                >Kontakt os</span
              >
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-[#212a4b] text-white grid grid-row lg:grid-cols-4 mx-auto box-border relative"
    >
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto top-0">
        <h2 class="uppercase text-xl mb-5 leading-tight">Rørbukning</h2>
        <p class="block text-[#d1d0da] text-base mb-[50px]">
          Vi udfører rørbukning i rustfri stål, fra Ø10-Ø90mm og op til 6000mm
          rørlængder, med mange forskellige radier.
        </p>

        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">RØROPTRÆK</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører røroptræk i rustfri stål, og med vores eget udviklet
          optræksystem kan vi tilbyde optræk til særdeles fordelagtige priser.
        </p>

        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">ENDEFORMNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi tilbyder ende formning i rustfri stål max godstykkelse 4mm, og med
          ende dybde på 300mm.
        </p>

        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">AUTOMATSVEJSNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px] leading-6">
          Vi kan tilbyde Automatisk tig svejsning, med emnevægt op til 250kg, og
          længder op til 3000mm.
        </p>
        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
    </section>
    <section class="py-4 md:pt-28 md:pb-28 w-full overflow-hidden">
      <div
        class="flex flex-wrap flex-col md:flex-row my-auto px-[15px] -mx-[15px]"
      >
        <div
          class="md:w-1/2 pl-[15px] pr-[24px] py-12 h-[400px] relative mb-4 mt-0 top-auto"
        >
          <h2 class="uppercase mt-0 font-medium">
            alt fra prototype til serieproduktion
          </h2>
          <p class="mt-0 mb-0 relative">
            Vi er sparingspartner fra prototype til serie produktion, og vores
            mission er at lette vores kunders hverdag. Dette ligger vi i hurtige
            leveringer samt kvalitets arbejde, vi står altid klar til at hjælpe
            vores kunder med hurtige løsninger og haste leveringer. Som
            underleverandør til mejeri- & vindmølleindustrien ved vi at pris,
            leveringstid samt kvalitet er det vigtigste, Derfor er vores
            svejsepersonale blevet certificeret efter gældende standarder, og vi
            har erhvervet os WPQR`r og WPS`r til en lang række svejsesøm, så vi
            dækker et stort område indenfor rustfri rørsvejsning. MDS Stainless
            ApS har i foråret 2016 implementeret certificeringerne DS/EN ISO
            9001:2008 samt ISO 3834-2:2006.
          </p>
        </div>
        <div
          class="w-full md:w-1/2 relative overflow-hidden m-auto -bottom-5 right-0 sm:hidden sm:invisible md:block md:visible"
        >
          <!-- Triangle -->
          <div
            class="absolute rotate-[45deg] h-[220%] w-[60%] bg-white -top-26 bottom-0 -left-10 right-0"
          ></div>
          <div
            class="absolute bg-white bottom-0 left-0 right-0 h-[42px] w-full overflow-hidden"
          ></div>

          <!-- Picture here -->
          <img
            src="~/assets/images/mdstainless1.jpg"
            alt=""
            class="hidden sm:hidden md:block md:visible"
          />
        </div>
      </div>
    </section>
    <!-- MANGLER -->

    <section class="relative h-auto max-h-[400px] overflow-hidden">
      <picture>
        <source
          :srcSet="require('~/assets/images/cnc.jpg?webp')"
          type="image/webp"
        />
        <source
          :srcSet="require('~/assets/images/cnc.jpg')"
          type="image/jpeg"
        />
        <img
          :src="require('~/assets/images/cnc.jpg')"
          alt="MDS Stainless kontakt os"
          class="-mt-[20%] h-auto align-middle border-none"
          width="100%"
        />
      </picture>
      <!-- Blue overlay here! -->
      <div
        class="absolute z-1000 h-full w-full inset-0 bg-[#212a4b] bg-opacity-90"
      ></div>
      <div
        class="absolute transform -translate-x-1/2 -translate-y-32 z-2000 w-4/5 top-1/2 left-1/2 py-12 text-white text-center md:text-align-unset content-center"
      >
        <h2 class="uppercase text-white">
          Kontakt os for at høre mere om dine muligheder,
        </h2>
        <p class="pt-6 mt-0 mb-4"></p>
        <a href="#">
          <Button contact class="relative -right-1/3 bottom-0">
            <span class="skew-x-[40deg] font-semibold text-base"
              >Kontakt os</span
            >
          </Button>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { assertTSAnyKeyword, classProperty } from "@babel/types";
import Vue from "vue";
import Slideshow from "~/components/Slideshow.vue";

export default Vue.extend({
  name: "IndexPage",
  data: () => ({
    images: ["mdstainless1.jpg", "bw_mds.jpg", "rustfrit2.jpg"],
    active: 0,
  }),

  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 4000);
  },
  methods: {
    sliderPrev() {
      if (this.active === 0) {
        this.active = this.images.length - 1;
      } else {
        this.active--;
      }
    },
    sliderNext() {
      if (this.active === this.images.length - 1) {
        this.active = 0;
      } else {
        this.active++;
      }
    },
  },
});
</script>

<style lang="css">
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}

.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: auto;

  object-fit: fill;
}
.about {
  overflow: hidden;
  height: calc(400px + 14rem);
}
.about .about-text {
  padding-right: 1.5rem;
  position: relative;
  line-height: 1.6;
  height: 400px;
}
.about .about-text .wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 56%;
  width: 87%;
}
.about .about-text:after {
  display: block;
  position: inherit;
  height: 0;
  width: 0;
  content: "";
  left: 0;
  bottom: 0;
  border-top: 400px solid #ffffff;
  border-right: 400px solid transparent;
  float: right;
  margin: -48px -424px 0 0;
  z-index: 5;
}

.arrows {
  font-size: 3.125em;
  position: relative;
  width: 100%;
}

.arrows .left {
  position: absolute;
  color: white;
  bottom: 1em;
  left: 0.4em;
  border: 0.02em solid #b10909;
  border-radius: 0.14em;
  padding: 0em 0.4em 0.2em;
  background: #f2b8a2;
  transition: 0.3s linear;
}

.triangle {
  position: inherit;
  height: 0;
  width: 0;
  content: "";
  left: 0;
  bottom: 0;
  border-top: 400px solid #ffffff;
  border-right: 400px solid transparent;
  float: right;
  margin: -48px -424px 0 0;
  z-index: 5;

  /*  leading-[1.6rem] w-0 h-0 md:w-1/2 sm:none z-400 bg-white left-0 bottom-0 border-white border-l-[150px] border-t-[96px] border-t-white-500 border-r-[70px] border-r-transparent */
}
</style>
