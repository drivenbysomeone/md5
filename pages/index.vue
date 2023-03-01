<template>
  <!-- Navbar is implemented already ONCE in Navbar.vue -->
  <div>
    <!-- SECTION HERO -->
    <section class="relative lg:h-[80vh]">
      <!-- Slideshow arrows -->
      <div class="relative slide text-5xl">
        <!-- Slide arrows  -->
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
        >
          <img class="block w-full" :src="img" alt="First slide" />

          <!-- Arrow left -->
          <div
            @click="sliderPrev()"
            class="absolute top-1/2 left-4 h-0 w-0 border-x-[22px] border-x-transparent border-b-[22px] border-b-[#212a4b] -rotate-90 cursor-pointer"
          ></div>
          <!-- Arrow right -->
          <div
            @click="sliderNext()"
            class="absolute top-1/2 right-4 h-0 w-0 border-x-[22px] border-x-transparent border-b-[22px] border-b-[#212a4b] rotate-90 border-opacity-80 cursor-pointer"
          ></div>
        </div>
      </div>
    </section>

    <section
      class="bg-[#212a4b] text-white grid grid-row lg:grid-cols-4 mx-auto box-border"
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
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi kan tilbyde Automatisk tig svejsning, med emnevægt op til 250kg, og
          længder op til 3000mm.
        </p>
        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
    </section>
    <section class="pt-28 pb-28 w-full overflow-hidden">
      <div class="w-full flex items-center md:flex-row flex-col gap-8">
        <div class="leading-relaxed md:w-1/2 relative h-[400px] pr-6">
          <div
            class="absolute -translate-y-1/2 -translate-x-1/2 top-[50%] left-[56%] w-[87%]"
          >
            <h2 class="uppercase mt-0 font-medium">
              alt fra prototype til serieproduktion
            </h2>
            <p class="mt-0 block mb-1">
              Vi er sparingspartner fra prototype til serie produktion, og vores
              mission er at lette vores kunders hverdag. Dette ligger vi i
              hurtige leveringer samt kvalitets arbejde, vi står altid klar til
              at hjælpe vores kunder med hurtige løsninger og haste leveringer.
              Som underleverandør til mejeri- & vindmølleindustrien ved vi at
              pris, leveringstid samt kvalitet er det vigtigste, Derfor er vores
              svejsepersonale blevet certificeret efter gældende standarder, og
              vi har erhvervet os WPQR`r og WPS`r til en lang række svejsesøm,
              så vi dækker et stort område indenfor rustfri rørsvejsning. MDS
              Stainless ApS har i foråret 2016 implementeret certificeringerne
              DS/EN ISO 9001:2008 samt ISO 3834-2:2006.
            </p>
          </div>

          <!-- about .about-text:after -->
          <div
            class="inline-block absolute h-0 w-0 left-0 bottom-0 border-t-[400px] border-solid border-white border-r-[400px] float-right -mt-12 -mr-[424px] mb-0 ml-0 z-5"
          ></div>
          <!-- Picture here -->
        </div>

        <div
          class="relative h-[25rem] z-4 leading-[1.6rem] overflow-hidden w-full md:w-1/2"
        >
          <img
            src="~/assets/images/mdstainless1.jpg"
            alt="person-welding"
            class="absolute -bottom-[12%]"
          />
        </div>
      </div>
    </section>
    <!-- MANGLER -->
    <section class="relative h-auto max-h-[400px] overflow-hidden z-19">
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
        class="absolute z-1000 h-full w-full top-0 left-0 bg-[#212a4b] bg-opacity-90"
      ></div>
      <div
        class="absolute transform -translate-x-1/2 -translate-y-1/2 z-2000 w-4/5 top-1/2 left-1/2 py-12 text-white text-center md:text-align-unset"
      >
        <h2 class="uppercase text-white">
          Kontakt os for at høre mere om dine muligheder
        </h2>
        <p class="pt-6 mt-0 mb-4"></p>

        <Button contact>
          <span class="skew-x-[40deg] inline-block font-semibold text-sm"
            >Kontakt os</span
          >
        </Button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slideshow from "~/components/Slideshow.vue";

export default Vue.extend({
  name: "IndexPage",
  data: () => ({
    images: [
      "_nuxt/assets/images/mdstainless1.jpg",
      "https://picsum.photos/id/238/1024/800",
      "https://picsum.photos/id/239/1024/800",
    ],
    active: 0,
  }),
  mounted() {
    let i = 0;
    //   setInterval(() => {
    //     if (i > this.images.length - 1) {
    //       i = 0;
    //     }
    //     this.active = i;
    //     i++;
    //   }, 4000);
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

/* .arrows .right {
  position: absolute;
  color: white;
  bottom: 1em;
  right: 0.4em;
  border: 0.02em solid #ad0808;
  border-radius: 0.14em;
  padding: 0em 0.4em 0.2em;
  background: #f2b8a2;
  transition: 0.3s linear;
}
.arrows .tip-left {
  position: absolute;

  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #f2b8a2;
  transform: rotate(35deg);
}

.arrows .tip-right {
  position: absolute;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #f2b8a2;
  transform: rotate(-35deg);
}

.test {
  font-size: 10rem;
} */
</style>
